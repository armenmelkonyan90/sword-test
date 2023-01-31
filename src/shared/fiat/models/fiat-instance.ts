import { ICreateIndividualBody, IIndividual, IIndividualOnBoardBody, IIndividualOnBoard } from "./fiat-main";

export interface FiatInstance {
    authorize(): Promise<void>;
    createIndividual(body: ICreateIndividualBody): Promise<IIndividual>;
    listAllIndividuals(): Promise<IIndividual[]>;
    onBoardIndividual(body: IIndividualOnBoardBody): Promise<IIndividualOnBoard>;
}
