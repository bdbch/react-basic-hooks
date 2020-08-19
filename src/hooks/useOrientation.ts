import { useEffect, useState } from "react";

export type Orientation = "landscape" | "portrait";

const getOrientation = (type: OrientationType): Orientation => {
  if (type === "landscape-primary" || type === "landscape-secondary") {
    return "landscape";
  } else {
    return "portrait";
  }
};

export default () => {
  const [value, setValue] = useState(getOrientation(screen.orientation.type));

  useEffect(() => {
    const orientationChangeHandler = (e: any) => {
      setValue(getOrientation(e.target.screen.orientation.type));
    };

    window.addEventListener("orientationchange", orientationChangeHandler);

    return () => {
      window.removeEventListener("orientationchange", orientationChangeHandler);
    };
  }, []);

  return value;
};
