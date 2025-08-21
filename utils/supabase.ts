import { supabase } from "@/lib/supabase/supabase-client";

export type Project = {
  id: string;
  created_at: string;
  name: string;
  title: string;
  description: string;
  image_url?: string;
  github_link: string;
  demo_link?: string;
};

export type WorkExperience = {
  id: string;
  created_at: string;
  title: string;
  company: string;
  date_range: string;
  description: string;
  image_url?: string;
};

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

export const fetchWorkExperiences = async () => {
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
