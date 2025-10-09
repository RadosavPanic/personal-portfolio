import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProjectState = {
  title: string;
  name: string;
  description: DescriptionJSON;
  modalOpen: boolean;
  setModalOpen: (value: boolean) => void;
  setProjectInfo: (
    title: string,
    name: string,
    description: DescriptionJSON
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
      setModalOpen: (value: boolean) => {
        set({ modalOpen: value });
      },
      setProjectInfo: (
        title: string,
        name: string,
        description: DescriptionJSON
      ) => {
        set({ title, name, description });
      },
      clearProjectInfo: () => {
        set({ title: "", name: "", description: {} });
      },
    }),
    {
      name: "project-storage",
    }
  )
);

export default useProjectStore;
