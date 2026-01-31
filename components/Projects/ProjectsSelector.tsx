"use client";

import React, { useEffect } from "react";
import ProjectBadge from "./ProjectBadge";
import useProjectStore from "@/store/project.store";

const ProjectsSelector = () => {
  const { type, setProjectType } = useProjectStore();

  useEffect(() => {
    if (!type) setProjectType("web");
  }, [type, setProjectType]);

  return (
    <div className="flex items-center justify-center gap-3 mb-6">
      <ProjectBadge title="web" label="web" active={type === "web"} />

      <ProjectBadge title="mobile" label="mobile" active={type === "mobile"} />

      <ProjectBadge title="other" label="more" active={type === "other"} />
    </div>
  );
};

export default ProjectsSelector;
