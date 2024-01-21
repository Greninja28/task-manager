"use client";

import { useEffect, useState } from "react";
import { GlobalProvider } from "../context/globalProvider";
import { Toaster } from "react-hot-toast";

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 200);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  return (
    <GlobalProvider>
      <Toaster />
      {children}
    </GlobalProvider>
  );
};

export default ContextProvider;
