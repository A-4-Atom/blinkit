import { useThemeStore } from "@/store/themeStore";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  const { theme } = useThemeStore();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#0C831F",
        tabBarInactiveTintColor: theme === "dark" ? "#9CA3AF" : "#6B7280",
        tabBarStyle: {
          backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F5F5",
          borderTopColor: theme === "dark" ? "#2A2A2A" : "#E5E7EB",
          height: 60,
          paddingTop: 6,
          paddingBottom: 6,
        },
        tabBarLabelStyle: {
          fontFamily: "Inter-Regular",
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: "Form",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="edit-note" size={26} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => (
            <Entypo name="grid" size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
