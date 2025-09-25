import { Pressable, Text } from "react-native";
import { useThemeStore } from "../store/themeStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Pressable
      onPress={toggleTheme}
      className="mt-4 px-4 py-2 rounded-md bg-surface dark:bg-surface-dark flex-row items-center justify-center w-auto self-start border border-secondary"
    >
      <Text className="text-text dark:text-text-dark font-inter">
        Switch to {theme === "light" ? "Dark" : "Light"}
      </Text>
    </Pressable>
  );
}
