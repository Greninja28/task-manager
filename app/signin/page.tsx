"use client";

import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignINPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <SignIn />
    </div>
  );
};

export default SignINPage;
