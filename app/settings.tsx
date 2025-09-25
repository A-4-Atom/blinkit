import { ThemeToggle } from "@/components/ThemeToggle";
import { useUserStore } from "@/store/userStore";
import React, { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

const Settings = () => {
  const { userName, setUserName } = useUserStore();
  const [newUserName, setNewUserName] = useState(userName);

  return (
    <View className="flex-1 bg-background dark:bg-background-dark p-3">
      <View className="flex flex-row items-center justify-between pb-5">
        <Text className="text-2xl font-inter-bold text-text dark:text-text-dark">
          Settings
        </Text>
        <ThemeToggle />
      </View>
      <Text className="text-2xl font-inter text-text dark:text-text-dark">
        {userName}
      </Text>

      <TextInput
        placeholder="Change Username"
        value={newUserName}
        onChangeText={setNewUserName}
        className="mt-6 px-4 py-2 rounded-md bg-surface dark:bg-surface-dark border border-secondary text-text dark:text-text-dark font-inter"
      />
      <Pressable
        onPress={() => {
          setUserName(newUserName);
        }}
        className="mt-4 px-4 py-2 rounded-md bg-primary dark:bg-primary-dark flex-row items-center justify-center "
      >
        <Text className="text-text dark:text-text-dark font-inter">Save</Text>
      </Pressable>
    </View>
  );
};

export default Settings;
