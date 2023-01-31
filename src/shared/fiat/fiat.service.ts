import { Injectable } from '@nestjs/common';

import { IntergiroService } from './integrations';
import {
    FiatTypes, FiatInstance,
    ICreateIndividualBody, IIndividual,
    IIndividualOnBoardBody, IIndividualOnBoard
} from './models';

@Injectable()
export class FiatService implements FiatInstance {
    private _fiatInstance: FiatInstance;

    constructor(
        private _intergiroService: IntergiroService,
    ) {
        this.setFiatType(FiatTypes.INTERGIRO);
    }

    async authorize(): Promise<void> {
        await this._fiatInstance.authorize();
    }

    setFiatType(type: FiatTypes): FiatService {
        switch (type) {
            case FiatTypes.INTERGIRO: {
                this._fiatInstance = this._intergiroService;
                break;
            }
        }
        return this;
    }

    createIndividual(body: ICreateIndividualBody): Promise<IIndividual> {
        return this._fiatInstance.createIndividual(body);
    }

    listAllIndividuals(): Promise<IIndividual[]> {
        return this._fiatInstance.listAllIndividuals();
    }

    onBoardIndividual(body: IIndividualOnBoardBody): Promise<IIndividualOnBoard> {
        return this._fiatInstance.onBoardIndividual(body);
    }

}