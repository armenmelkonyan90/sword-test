export interface IIntergiroCreateIndividualBody {
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    date_of_birth: string;
    address?: {
        country_code: string;
        street1: string;
        city: string;
        region: string;
        postal_code: string;
    };
}

export enum IntergiroIndividualStatus {
    PENDING_ACTIVATION = 'pending_activation',
    ONBOARDING_REQUESTED = 'onboarding_requested',
    ONBOARDING_DATA_PROVIDED = 'onboarding_data_provided',
    ACTIVATED = 'activated',
    BLOCKED = 'blocked'
}

export interface IIntergiroIndividual extends IIntergiroCreateIndividualBody {
    id: string;
    status: IntergiroIndividualStatus;
}

export interface IIntergiroIndividualOnboardBody {
    id: string;
    return_url: string;
}

export interface IIntergiroIndividualOnBoard {
    redirect_url: string;
    expires_at?: string;
}
