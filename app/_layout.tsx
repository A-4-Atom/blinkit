import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import "../global.css";
import { useThemeStore } from "../store/themeStore"; 

export default function RootLayout() {
  const { theme } = useThemeStore(); 
  const { setColorScheme } = useColorScheme();

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  return (
    <>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </>
  );
}
