"use client";

import React from "react";
import { useGlobalState } from "../context/globalProvider";
import Tasks from "../components/Tasks/Tasks";

const Important = () => {
  const { importantTasks } = useGlobalState();
  return <Tasks title="Important tasks" tasks={importantTasks} />;
};

export default Important;
