import { PORTFOLIO_TYPE } from '@/constants/global.constants';
import { SKILL } from '@/constants/skills.constants';
import { TPortfolio } from '@/types/portfolio.type';

export const portfolios: TPortfolio[] = [
  {
    name: 'Personal Portfolio',
    icon: '/icons/icon.png',
    url: 'https://www.jirehnimes.com',
    description:
      'A personal portfolio website showcasing my projects and skills.',
    type: PORTFOLIO_TYPE.WEB,
    technologies: [SKILL.REACT, SKILL.TYPESCRIPT, SKILL.NEXTJS, SKILL.CSS],
  },
];
