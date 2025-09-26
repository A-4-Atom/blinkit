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
            backgroundColor: theme === "dark" ? "#0A0A0A" : "#FFFFFF",
          },
          headerTitleStyle: {
            color: theme === "dark" ? "#FFFFFF" : "#1F2937",
            fontFamily: "Inter-Bold",
          },
          headerTintColor: theme === "dark" ? "#FFFFFF" : "#1F2937", // Hamburger/menu icon color
          drawerStyle: {
            backgroundColor: theme === "dark" ? "#0A0A0A" : "#FFFFFF",
            width: 280,
          },
          drawerContentContainerStyle: {
            paddingLeft: 8,
            paddingTop: 16,
          },
          drawerItemStyle: {
            paddingHorizontal: 12,
            borderRadius: 8,
            marginHorizontal: 8,
            marginVertical: 4,
          },
          drawerContentStyle: {
            marginTop: 32,
          },
          drawerActiveBackgroundColor: theme === "dark" ? "#1A3C32" : "#F5F5F5",
          drawerActiveTintColor: theme === "dark" ? "#FFFFFF" : "#0C831F",
          drawerInactiveTintColor: theme === "dark" ? "#E5E5E5" : "#1F2937",
          drawerLabelStyle: {
            fontFamily: "Inter-Regular",
            fontSize: 16,
          },
          headerRight: () => (
            <Link href="/profile" asChild>
              <Pressable>
                <Entypo
                  name="user"
                  size={24}
                  color={theme === "dark" ? "#FFFFFF" : "#1F2937"}
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
