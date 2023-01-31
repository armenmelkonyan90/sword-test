import { AUTH_ERROR_MESSAGES } from './auth';
import { INTEGRATIONS_SERVICES_ERROR_MESSAGES } from './integrations';
import { LIST_ERROR_MESSAGES } from './list';
import { MEDIA_ERROR_MESSAGES } from './media';
import { CODES_ERROR_MESSAGES } from './verification-codes';

export const ERROR_MESSAGES = {
  ...AUTH_ERROR_MESSAGES,
  ...MEDIA_ERROR_MESSAGES,
  ...CODES_ERROR_MESSAGES,
  ...LIST_ERROR_MESSAGES,
  ...INTEGRATIONS_SERVICES_ERROR_MESSAGES,
  ...AUTH_ERROR_MESSAGES,
};
