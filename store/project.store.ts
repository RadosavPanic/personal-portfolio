import { create } from "zustand";
import { persist } from "zustand/middleware";

type ProjectState = {
  title: string;
  name: string;
  description: DescriptionJSON;
  modalOpen: boolean;
  type: string;
  setModalOpen: (value: boolean) => void;
  setProjectInfo: (
    title: string,
    name: string,
    description: DescriptionJSON,
    type: string
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
      type: "",
      setModalOpen: (value: boolean) => {
        set({ modalOpen: value });
      },
      setProjectInfo: (
        title: string,
        name: string,
        description: DescriptionJSON,
        type: string
      ) => {
        set({ title, name, description, type });
      },
      clearProjectInfo: () => {
        set({ title: "", name: "", description: {}, type: "" });
      },
    }),
    {
      name: "project-storage",
    }
  )
);

export default useProjectStore;
