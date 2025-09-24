import { Pressable, Text } from "react-native";
import { useThemeStore } from "../store/themeStore";

export function ThemeToggle() {
  const { theme, toggleTheme } = useThemeStore();
  return (
    <Pressable
      onPress={toggleTheme}
      className="mt-4 px-4 py-2 rounded-md bg-neutral-200 dark:bg-neutral-800"
    >
      <Text className="text-neutral-900 dark:text-neutral-100">
        Switch to {theme === "light" ? "Dark" : "Light"}
      </Text>
    </Pressable>
  );
}
