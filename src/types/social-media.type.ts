import { SOCIAL_MEDIA } from '@/constants/global.constants';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type TSocialMedia = {
  name: SOCIAL_MEDIA;
  url: string;
  icon: IconDefinition;
};
