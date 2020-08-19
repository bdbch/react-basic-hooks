import { useEffect, useState } from "react";

export type NetworkState = "online" | "offline";

export default () => {
  const [value, setValue] = useState<NetworkState>(
    navigator.onLine ? "online" : "offline",
  );

  useEffect(() => {
    const onlineHandler = () => {
      setValue("online");
    };

    const offlineHandler = () => {
      setValue("offline");
    };

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

  return value;
};
