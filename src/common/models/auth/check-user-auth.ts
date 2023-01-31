export interface ICheckUserAuthBody {
    login: string;
}

export interface ICheckUserAuth {
    userExists: boolean;
    accessToken?: string;
    code?: string;
}
