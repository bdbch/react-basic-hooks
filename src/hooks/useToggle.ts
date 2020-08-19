import { useCallback, useState } from "react";

export default (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue(!value);
  }, [value, setValue]);

  return { value, toggle };
};
