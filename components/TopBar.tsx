import { useUserStore } from "@/store/userStore";
import React from "react";
import { Text, View } from "react-native";

const TopBar = () => {
  const userName = useUserStore((state) => state.userName);
  return (
    <View className="w-full flex-row items-center mb-4 bg-transparent">
      <Text className="text-xl font-inter text-text dark:text-text-dark">
        Good Morning, {userName}
      </Text>
    </View>
  );
};

export default TopBar;
