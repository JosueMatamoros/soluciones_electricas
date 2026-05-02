import { useMemo, useState } from "react";
import { PROJECTS } from "../data/Projects/projects";
import { CATEGORY_FILTER_MAP } from "../constants/categories";
import { shuffle } from "../utils/arrayUtils";

export function useProjectFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return shuffle(PROJECTS);
    return PROJECTS.filter((p) => p.category === CATEGORY_FILTER_MAP[activeCategory]);
  }, [activeCategory]);

  return { activeCategory, setActiveCategory, filteredProjects };
}
