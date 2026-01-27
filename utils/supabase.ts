import { supabase } from "@/lib/supabase/supabase-client";

export const fetchAllProjects = async () => {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("id");
  if (error) {
    console.error("Error fetching projects:", error.message);
    return [];
  }

  return data || [];
};

export const fetchJourneyExp = async () => {
  const { data, error } = await supabase.from("work_experiences").select("*");
  if (error) {
    console.error("Error fetching work experiences:", error.message);
    return [];
  }

  return data || [];
};

export const fetchCVFile = () => {
  const { data } = supabase.storage
    .from("cv-files")
    .getPublicUrl("radosav_panic_cv.pdf", {
      download: true,
    });

  return data?.publicUrl || "";
};

export const fetchTechImages = async () => {
  try {
    const { data } = await supabase.storage.from("tech-stack").list();

    if (!data) return [];

    return data?.map((file) => {
      const { data: publicUrlData } = supabase.storage
        .from("tech-stack")
        .getPublicUrl(file.name);

      return {
        name: file.name,
        url: publicUrlData.publicUrl,
      };
    });
  } catch (error) {
    console.error("Error fetching tech stack images:", error);
    return [];
  }
};
