import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { catchError, lastValueFrom, map } from 'rxjs';

import {
    FiatGeneralService,
    IIntergiroAuth,
    IIntergiroCreateIndividualBody,
    IIntergiroIndividual,
    IIntergiroIndividualOnBoard,
    IIntergiroIndividualOnboardBody,
} from '../models';

import { AxiosError } from 'axios';

import { omit } from 'lodash';

@Injectable()
export class IntergiroService implements FiatGeneralService {
    private _authCredentials: IIntergiroAuth;
    constructor(
        private _http: HttpService,
        private _configService: ConfigService
    ) {
        this.initializeInterceptor();
    }

    initializeInterceptor(): void {
        this._http.axiosRef.interceptors.request.use(config => {
            config.baseURL = this._configService.get('INTERGIRO_URL');
            if (
                config.headers.authNeeded === null ||
                config.headers.authNeeded === undefined ||
                config.headers.authNeeded === true
            ) {
                config.headers = {
                    ...(config.headers || {}),
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this._authCredentials.access_token}`,
                };
                config = omit(config, 'authNeeded');
            }
            return config;
        });
    }

    authorize(): Promise<void> {
        return lastValueFrom(this._http.post<IIntergiroAuth>('/v3/auth/login', {
            api_key: this._configService.get('INTERGIRO_API_KEY')
        }, { headers: { authNeeded: false } }).pipe(
            map(({ data }) => {
                this._authCredentials = data;
            }),
            catchError((err: AxiosError) => {
                throw err;
            })
        ));
    }

    createIndividual(body: IIntergiroCreateIndividualBody): Promise<IIntergiroIndividual> {
        return lastValueFrom(
            this._http.post<IIntergiroIndividual>('/v3/individuals', body)
                .pipe(
                    map(({ data }) => {
                        return data;
                    }),
                    catchError((err: AxiosError) => {
                        throw err;
                    })
                ),
        );
    }

    listAllIndividuals(): Promise<IIntergiroIndividual[]> {
        return lastValueFrom(
            this._http.get<{ data: IIntergiroIndividual[] }>('/v3/individuals?limit=100')
                .pipe(
                    map(({ data: res }) => {
                        const { data } = res;
                        return data;
                    }),
                    catchError((err: AxiosError) => {
                        console.log('err', err.response.data);
                        throw err;
                    })
                ),
        );
    }

    onBoardIndividual(body: IIntergiroIndividualOnboardBody): Promise<IIntergiroIndividualOnBoard> {
        const requestBody = omit(body, 'id');
        return lastValueFrom(
            this._http.post<IIntergiroIndividualOnBoard>(`/v3/individuals/${body.id}/onboard`, requestBody)
                .pipe(
                    map(({ data }) => {
                        return data;
                    }),
                    catchError((err: AxiosError) => {
                        console.log('err', err.response.data);
                        throw err;
                    })
                ),
        );
    }
}
