import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type themeStore = {
  theme: "light" | "dark";
  toggleTheme: () => void;
  setTheme: (theme: "light" | "dark") => void;
};

export const useThemeStore = create(
  persist<themeStore>(
    (set) => ({
      theme: "light",
      toggleTheme: () =>
        set((state) => ({
          ...state,
          theme: state.theme === "light" ? "dark" : "light",
        })),
      setTheme: (theme) => set((state) => ({ ...state, theme })),
    }),
    {
      name: "theme-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
