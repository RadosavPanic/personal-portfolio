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

export const fetchCVFile = async () => {
  const { data } = await supabase.storage
    .from("cv-files")
    .getPublicUrl("radosav_panic_cv.pdf", {
      download: true,
    });

  return data?.publicUrl || "";
};
