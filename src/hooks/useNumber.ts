import { useCallback, useState } from "react";

export interface INumberHookOptions {
  step?: number;
  max?: number;
  min?: number;
}

const defaultOptions: INumberHookOptions = {
  step: 1,
};

const setComparedValue = (value: number, max?: number, min?: number) => {
  if (max && value > max) {
    return max;
  }

  if (min && value < min) {
    return min;
  }

  return value;
};

export default (
  initialValue: number,
  options: INumberHookOptions = defaultOptions,
) => {
  const [value, setValue] = useState(initialValue);

  const increment = useCallback(() => {
    setValue(
      setComparedValue(value + (options.step || 1), options.max, options.min),
    );
  }, [value, options]);

  const decrement = useCallback(() => {
    setValue(
      setComparedValue(value - (options.step || 1), options.max, options.min),
    );
  }, [value, options]);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue, setValue]);

  return {
    decrement,
    increment,
    reset,
    set: setValue,
    value,
  };
};
