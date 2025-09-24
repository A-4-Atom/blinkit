import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { AnimatedSplash } from "../components/AnimatedSplash";
import "../global.css";
import { useThemeStore } from "../store/themeStore";

export default function RootLayout() {
  const { theme } = useThemeStore();
  const { setColorScheme } = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      {showSplash && (
        <AnimatedSplash
          darkMode={theme === "dark"}
          onFinish={() => setShowSplash(false)}
          backgroundLight="#ffffff"
          backgroundDark="#000000"
        />
      )}
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </>
  );
}
