import { useMemo, useState } from 'react';

enum TOGGLE_MORE_DETAILS {
  SHOW = '',
  HIDE = 'more-details__hide',
}

export const useIndexAboutWorkingExperiencesRowHook = () => {
  const [showMore, setShowMore] = useState<TOGGLE_MORE_DETAILS>(
    TOGGLE_MORE_DETAILS.HIDE
  );

  const getMonthName = (monthNumber: string): string => {
    const date = new Date();
    const monthValue = parseInt(monthNumber);
    date.setMonth(monthValue - 1);

    return date.toLocaleString('default', { month: 'long' });
  };

  const getWithLastDayOfMonth = (month: string, year: string): Date => {
    return new Date(parseInt(year), parseInt(month), 0);
  };

  const isPlural = (value: number, sentence: string): string =>
    value > 1 ? `${sentence}s` : sentence;

  const computeTotalYears = (startDate: Date, endDate: Date): string => {
    let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
    months -= startDate.getMonth();
    months += endDate.getMonth();
    let monthTotal = months <= 0 ? 0 : months;
    const yearTotal = Math.floor(monthTotal / 12);
    monthTotal = monthTotal - yearTotal * 12;
    const yearStatement =
      yearTotal > 0 ? `${yearTotal} ${isPlural(yearTotal, 'year')}` : '';
    const monthStatement =
      monthTotal > 0 ? ` ${monthTotal} ${isPlural(monthTotal, 'month')}` : '';

    return `${yearStatement}${monthStatement}`.trim();
  };

  const computeRange = useMemo(
    () =>
      (startDate: string, endDate?: string): string => {
        const SPLIT_CHARACTER = '/';
        const [startMonth, startYear] = startDate.split(SPLIT_CHARACTER);
        let startMonthName: string,
          endMonthName: string,
          startResult: string,
          endMonth: string,
          endYear: string;
        startMonthName = endMonthName = startResult = endMonth = endYear = '';
        let endResult = 'Present';

        startMonthName = getMonthName(startMonth);
        startResult = `${startMonthName} ${startYear}`;

        if (!!endDate === true) {
          [endMonth, endYear] = endDate.split(SPLIT_CHARACTER);
          endMonthName = getMonthName(endMonth);
          endResult = `${endMonthName} ${endYear}`;
        }

        const startComputeDate = new Date(`${startMonth}/01/${startYear}`);
        const endComputeDate =
          !!endDate === true
            ? getWithLastDayOfMonth(endMonth, endYear)
            : new Date();
        const totalYears = computeTotalYears(startComputeDate, endComputeDate);

        return `${startResult} - ${endResult} (${totalYears})`;
      },
    []
  );

  const toggleMoreDetails = () => {
    if (showMore === TOGGLE_MORE_DETAILS.SHOW) {
      setShowMore(TOGGLE_MORE_DETAILS.HIDE);
    } else {
      setShowMore(TOGGLE_MORE_DETAILS.SHOW);
    }
  };

  return {
    showMore,
    computeRange,
    toggleMoreDetails,
  };
};
