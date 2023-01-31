import { ICreateIndividualBody, IIndividual } from "./fiat-main";

export interface FiatGeneralService {
    initializeInterceptor(): void;
    authorize(): Promise<void>;
    createIndividual(body: ICreateIndividualBody): Promise<IIndividual>;
    listAllIndividuals(): Promise<IIndividual[]>
}
