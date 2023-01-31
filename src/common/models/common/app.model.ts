export interface IApp {
  NODE_ENV: string;
  ENVIRONMENT: string;
  ENCRYPTION_PASSWORD: string;
}

export interface IMessages {
  [key: string]: {
    message: string;
  };
}

export interface IMessageSuccess {
  success: boolean;
}
