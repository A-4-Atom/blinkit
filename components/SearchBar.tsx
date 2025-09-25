import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { TextInput, View } from "react-native";

const SearchBar = ({ placeHolder }: { placeHolder: string }) => {
  return (
    <View className="w-full h-12 bg-surface dark:bg-surface-dark rounded-md shadow-lg border border-secondary flex-row items-center justify-between px-4 mx-4">
      <Feather name="search" size={24} color="#4CAF50" />
      <TextInput
        className="flex-1 mx-2 text-text dark:text-text-dark placeholder-text-muted dark:placeholder-text-mutedDark"
        placeholder={placeHolder}
        placeholderTextColor="#6B7280" // text-muted
      />
      <FontAwesome name="microphone" size={24} color="#4CAF50" />
    </View>
  );
};

export default SearchBar;
