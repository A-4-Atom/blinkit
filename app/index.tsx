import React from "react";
import { Text, View } from "react-native";
import { ThemeToggle } from "../components/ThemeToggle";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text className="text-black dark:text-white text-xl font-semibold">
        Hello
      </Text>
      <ThemeToggle />
    </View>
  );
};

export default Index;
