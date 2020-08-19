import { ChangeEvent, useCallback, useState } from "react";

export default (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValue(e.target.value);
    },
    [setValue],
  );

  const clear = useCallback(() => {
    setValue("");
  }, [setValue]);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [setValue]);

  return { value, set: setValue, reset, clear, handleChange };
};
