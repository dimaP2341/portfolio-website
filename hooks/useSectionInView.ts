import { useActiveSectionContext } from "@/context/active-section-content";
import type { SectionName } from "@/lib/types";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick]);
  return {
    ref,
  };
}
