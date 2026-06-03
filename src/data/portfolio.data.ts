import { PORTFOLIO_TYPE } from '@/constants/global.constants';
import { TPortfolio } from '@/types/portfolio.type';

export const portfolios: TPortfolio[] = [
  {
    name: 'Personal Portfolio',
    icon: '/icons/icon.png',
    url: 'https://www.jirehnimes.com',
    description:
      'A personal portfolio website showcasing my projects and skills.',
    type: PORTFOLIO_TYPE.WEB,
    technologies: ['React', 'TypeScript', 'CSS Modules'],
  },
];
