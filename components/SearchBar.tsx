import { useThemeStore } from "@/store/themeStore";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { TextInput, View, ViewStyle } from "react-native";

interface SearchBarProps {
  placeHolder: string;
  style?: ViewStyle;
}

const SearchBar = ({ placeHolder, style }: SearchBarProps) => {
  const theme = useThemeStore((s) => s.theme);
  const placeholderColor = theme === "dark" ? "#9CA3AF" : "#6B7280";

  return (
    <View
      className="w-full h-12 bg-surface dark:bg-background-dark rounded-lg shadow-sm border border-primary flex-row items-center px-3 gap-3"
      style={style}
    >
      <Feather name="search" size={20} color="#4B5563" />
      <TextInput
        className="flex-1 text-[14px] text-text dark:text-text-dark font-inter"
        placeholder={placeHolder}
        placeholderTextColor={placeholderColor}
        returnKeyType="search"
      />
      <FontAwesome name="microphone" size={20} color="#4B5563" />
    </View>
  );
};

export default SearchBar;
