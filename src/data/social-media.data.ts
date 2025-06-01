import { SOCIAL_MEDIA } from '@/constants/global.constants';
import { TSocialMedia } from '@/types/social-media.type';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons/faLinkedin';

export const socialMedia: TSocialMedia[] = [
  {
    name: SOCIAL_MEDIA.LINKEDIN,
    url: 'https://www.linkedin.com/in/jireh-june-nimes-77a603109/',
    icon: faLinkedin,
  },
  {
    name: SOCIAL_MEDIA.GITHUB,
    url: 'https://github.com/jirehnimes',
    icon: faGithub,
  },
];
