"use client";
import { Team } from "@/components/pages/Team";
import { Winners } from "@/components/pages/Winners";
import AppLayout from "@/components/templates/appLayout/appLayout";
import React from "react";

const WinnersPage = () => {
  return (
    <AppLayout>
      <Winners />
    </AppLayout>
  );
};

export default WinnersPage;
