declare type SocialsTypes = {
  name: string;
  src: string;
  width: number;
  height: number;
  href: string;
};

declare type DescriptionJSON = {
  texts?: string[];
  images?: string[];
};

declare type Project = {
  id: string;
  created_at: string;
  name: string;
  title: string;
  description: DescriptionJSON;
  image_url?: string;
  github_link: string;
  demo_link?: string;
  type?: "web" | "mobile";
  skills?: string[];
};

declare type ProjectModalProps = {
  title: string;
  name: string;
  description: DescriptionJSON;
  closeModal: () => void;
};

declare type WebProjectProps = {
  src: string;
  title: string;
  description: DescriptionJSON;
  demo_link: string;
  github_link: string;
  skills: string[];
  name: string;
};

declare type MobileProjectProps = {
  src: string;
  title: string;
  github_link: string;
  skills: string[];
  description: DescriptionJSON;
};

declare type WorkExperience = {
  id: string;
  created_at: string;
  title: string;
  company: string;
  date_range: string;
  description: string;
  image_url?: string;
};
