import { Kanit } from 'next/font/google';

export enum FONT_WEIGHT {
  LIGHT = '300',
  REGULAR = '400',
  MEDIUM = '500',
  SEMI_BOLD = '600',
  BOLD = '700',
  EXTRA_BOLD = '800',
  BLACK = '900',
}

export const kanitRegular = Kanit({
  variable: '--font-kanit',
  subsets: ['latin'],
  weight: [
    FONT_WEIGHT.LIGHT,
    FONT_WEIGHT.REGULAR,
    FONT_WEIGHT.MEDIUM,
    FONT_WEIGHT.SEMI_BOLD,
    FONT_WEIGHT.BOLD,
    FONT_WEIGHT.EXTRA_BOLD,
    FONT_WEIGHT.BLACK,
  ],
});
