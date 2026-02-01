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

type ProjectType = "web" | "mobile" | "other";

declare type Project = {
  id: string;
  created_at: string;
  name: string;
  title: string;
  description: DescriptionJSON;
  image_url?: string;
  github_link: string;
  demo_link?: string;
  type: ProjectType;
  skills?: string[];
};

type ProjectBadgeProps = {
  title: ProjectType;
  label?: string;
  active: boolean;
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
  type: ProjectType;
};

declare type MobileProjectProps = {
  src: string;
  title: string;
  github_link: string;
  skills: string[];
  description: DescriptionJSON;
  name: string;
  type: ProjectType;
};

declare type JourneyExp = {
  id: string;
  created_at: string;
  title: string;
  company: string;
  date_range: string;
  description: { texts: string[] };
  image_url?: string;
};
