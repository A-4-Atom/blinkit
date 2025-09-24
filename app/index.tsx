import React from "react";
import { Text, View } from "react-native";
import { ThemeToggle } from "../components/ThemeToggle";

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-primary-light dark:bg-primary-dark">
      <Text className="text-text-light dark:text-text-dark text-xl font-semibold">
        Hello
      </Text>
      <ThemeToggle />
    </View>
  );
};

export default Index;
