export const formatClasses = (classes: string[]): string =>
  classes.reduce(
    (previousValue: string, currentValue: string, index: number) => {
      if (index === 0) {
        return currentValue;
      }

      const appendValue =
        !!currentValue.trim() === false ? '' : ` ${currentValue}`;

      return `${previousValue}${appendValue}`;
    },
    ''
  );

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const debounce = (callbackFunction: Function, timeout = 1000) => {
  let timer: undefined | NodeJS.Timeout;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (...args: any[]) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFunction.apply(this, args);
    }, timeout);
  };
};
