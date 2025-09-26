import { router } from "expo-router";
import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { ThemeToggle } from "../components/ThemeToggle";
import { useUserStore } from "../store/userStore";

const Profile = () => {
  const { userName } = useUserStore();

  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark">
      {/* Header */}
      <View className="px-4 pt-12 pb-6">
        <Text className="text-2xl font-inter-bold text-text dark:text-text-dark">
          Profile
        </Text>
      </View>

      {/* Profile Card */}
      <View className="mx-4 p-6 rounded-xl bg-surface dark:bg-surface-dark shadow-sm">
        <View className="flex-row items-center space-x-4">
          <View className="h-16 w-16 rounded-full bg-secondary items-center justify-center">
            <Text className="text-2xl font-inter-bold text-text">
              {userName.charAt(0)}
            </Text>
          </View>
          <View className="flex-1">
            <Text className="text-xl font-inter-bold text-text dark:text-text-dark">
              {userName}
            </Text>
            <Text className="text-text-muted dark:text-text-mutedDark font-inter">
              Welcome back!
            </Text>
          </View>
        </View>
      </View>

      {/* Options */}
      <View className="mx-4 mt-6 rounded-xl bg-surface dark:bg-surface-dark overflow-hidden">
        <Pressable
          className="p-4 border-b border-gray-100 dark:border-gray-800 flex-row justify-between items-center"
          onPress={() => router.push("/settings")}
        >
          <Text className="font-inter text-text dark:text-text-dark">
            Settings
          </Text>
          <Text className="text-text-muted dark:text-text-mutedDark">›</Text>
        </Pressable>

        <Pressable
          className="p-4 border-b border-gray-100 dark:border-gray-800 flex-row justify-between items-center"
          onPress={() => router.push("/orders")}
        >
          <Text className="font-inter text-text dark:text-text-dark">
            My Orders
          </Text>
          <Text className="text-text-muted dark:text-text-mutedDark">›</Text>
        </Pressable>

        <Pressable className="p-4 flex-row justify-between items-center">
          <Text className="font-inter text-text dark:text-text-dark">
            Help & Support
          </Text>
          <Text className="text-text-muted dark:text-text-mutedDark">›</Text>
        </Pressable>
      </View>

      {/* Theme Toggle */}
      <View className="mx-4 mt-6 items-center">
        <ThemeToggle />
      </View>

      {/* App Version */}
      <View className="mt-8 mb-12 items-center">
        <Text className="text-text-muted dark:text-text-mutedDark font-inter text-sm">
          Blinkit v1.0.0
        </Text>
      </View>
    </ScrollView>
  );
};

export default Profile;
