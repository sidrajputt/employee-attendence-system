import React from "react";
import { QuickView } from "./components/QuickView";
import { ActivityLog } from "./components/ActivityLog";

export const DashboardHome = () => {
  return (
    <>
      <QuickView />
      <ActivityLog/>
    </>
  );
};
