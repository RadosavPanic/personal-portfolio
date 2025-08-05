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
