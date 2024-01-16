"use client";

import { useEffect, useState } from "react";
import { GlobalProvider } from "../context/globalProvider";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return null;
  }

  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
