import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "nativewind";
import { useEffect } from "react";
import { Pressable } from "react-native";
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
      <Drawer
        screenOptions={{
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                <Entypo name="user" size={24} color={theme === "dark" ? "white" : "black"} className="px-2" />
              </Pressable>
            </Link>
          ),
        }}
      >
        <Drawer.Screen
          name="index"
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
