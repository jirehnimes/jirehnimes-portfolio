import { PORTFOLIO_TYPE } from '@/constants/global.constants';

export type TPortfolio = {
  name: string;
  icon: string;
  url?: string;
  description: string;
  type: PORTFOLIO_TYPE;
  technologies: string[];
};
