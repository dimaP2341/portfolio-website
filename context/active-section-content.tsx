"use client";

import type { SectionName } from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

type ActiveSectionContentProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName;
  timeOfLastClick: number;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const ActiveSectionContext = createContext<ActiveSectionContextType | null>(
  null
);

export default function ActiveSectionContent({
  children,
}: ActiveSectionContentProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error();
  }

  return context;
}
