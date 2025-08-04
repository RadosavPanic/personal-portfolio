import { supabase } from "@/lib/supabase/supabase-client";

export type Project = {
  id: string;
  created_at: string;
  title: string;
  description: string;
  image_url?: string;
  github_link: string;
  demo_link?: string;
};

export type Social = {
  id: string;
  name: string;
  url_to: string;
  image_url?: string;
};

export const fetchAllProjects = async () => {
  const { data, error } = await supabase.from("projects").select("*");
  if (error) {
    console.error("Error fetching projects:", error.message);
    return [];
  }

  return data || [];
};

export const fetchAllSocials = async () => {
  const { data, error } = await supabase.from("socials").select("*");
  if (error) {
    console.error("Error fetching socials:", error.message);
    return [];
  }

  return data || [];
};
