import { FrequencyEnum } from '@common/enums/frequency.enum';

export const FREQUENCY_DAYS: { [key in FrequencyEnum]: number } = {
  [FrequencyEnum.DAILY]: 1,
  [FrequencyEnum.WEEKLY]: 7,
  [FrequencyEnum.BIWEEKLY]: 14,
  [FrequencyEnum.MONTHLY]: 30,
  [FrequencyEnum.QUARTERLY]: 90,
  [FrequencyEnum.ANNUALY]: 365,
};
