import { useUserStore } from "@/store/userStore";
import React from "react";
import { Text, View } from "react-native";

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12) return "Good Morning";
  if (hour < 18) return "Good Afternoon";
  return "Good Evening";
};

const TopBar = () => {
  const userName = useUserStore((state) => state.userName);
  const greeting = getGreeting();
  return (
    <View className="w-full flex-row items-center mb-4 mt-4 bg-transparent">
      <Text className="text-2xl font-inter-bold text-text dark:text-text-dark">
        {greeting}, {userName}
      </Text>
    </View>
  );
};

export default TopBar;
