export const formatClasses = (classes: string[]): string =>
  classes.reduce(
    (previousValue: string, currentValue: string, index: number) => {
      if (index === 0) {
        return currentValue;
      }

      return `${previousValue} ${currentValue}`;
    },
    ''
  );
