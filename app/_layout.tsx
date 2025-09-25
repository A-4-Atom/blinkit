import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect, useState } from "react";
import { Pressable } from "react-native";
import AnimatedSplash from "../components/AnimatedSplash";
import "../global.css";
import { useThemeStore } from "../store/themeStore";

export default function RootLayout() {
  const { theme } = useThemeStore();
  const { setColorScheme } = useColorScheme();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setColorScheme(theme);
  }, [theme, setColorScheme]);

  if (showSplash) {
    return <AnimatedSplash />;
  }

  return (
    <>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: theme === "dark" ? "#121212" : "#FFFDF7",
          },
          headerTitleStyle: {
            color: theme === "dark" ? "#F5F5F5" : "#1F2937",
            fontFamily: "Inter-Bold",
          },
          headerTintColor: theme === "dark" ? "#F5F5F5" : "#1F2937", // Hamburger/menu icon color
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                <Entypo
                  name="user"
                  size={24}
                  color={theme === "dark" ? "#F5F5F5" : "#1F2937"}
                  className="px-2"
                />
              </Pressable>
            </Link>
          ),
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{ drawerLabel: "Home", title: "Home" }}
        />
        <Drawer.Screen
          name="orders"
          options={{ drawerLabel: "Orders", title: "Orders" }}
        />
        <Drawer.Screen
          name="profile"
          options={{ drawerLabel: "Profile", title: "Profile" }}
        />
        <Drawer.Screen
          name="settings"
          options={{ drawerLabel: "Settings", title: "Settings" }}
        />
      </Drawer>
      <StatusBar style={theme === "dark" ? "light" : "dark"} />
    </>
  );
}
