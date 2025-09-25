import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type userStore = {
  userName: string;
  setUserName: (name: string) => void;
};

export const useUserStore = create(
  persist<userStore>(
    (set) => ({
      userName: "Vikas",
      setUserName: (name) => set((state) => ({ ...state, userName: name })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
