import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProjectState = {
  title: string;
  name: string;
  description: DescriptionJSON;
  modalOpen: boolean;
  type: ProjectType;
  setModalOpen: (value: boolean) => void;
  setProjectType: (type: ProjectType) => void;
  setProjectInfo: (
    title: string,
    name: string,
    description: DescriptionJSON,
    type: ProjectType,
  ) => void;
  clearProjectInfo: () => void;
};

const useProjectStore = create<ProjectState>()(
  persist(
    (set, get) => ({
      modalOpen: false,
      title: "",
      name: "",
      description: {},
      type: "web",
      setModalOpen: (value: boolean) => {
        set({ modalOpen: value });
      },
      setProjectType: (type: ProjectType) => {
        set({ type });
      },
      setProjectInfo: (
        title: string,
        name: string,
        description: DescriptionJSON,
        type: ProjectType,
      ) => {
        set({ title, name, description, type });
      },
      clearProjectInfo: () => {
        set({ title: "", name: "", description: {}, type: "web" });
      },
    }),
    {
      name: "project-storage",
    },
  ),
);

export default useProjectStore;
