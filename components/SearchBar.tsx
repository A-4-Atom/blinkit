import { useThemeStore } from "@/store/themeStore";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { TextInput, View, ViewStyle } from "react-native";

interface SearchBarProps {
  placeHolder: string;
  style?: ViewStyle;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeHolder, style }) => {
  const theme = useThemeStore((s) => s.theme);
  const placeholderColor = theme === "dark" ? "#9CA3AF" : "#6B7280"; // muted / mutedDark

  return (
    <View
      className="w-full h-12 bg-surface dark:bg-surface-dark rounded-md shadow-lg border border-secondary/60 dark:border-secondary/40 flex-row items-center px-3 gap-3"
      style={style}
    >
      <Feather name="search" size={20} color="#4CAF50" />
      <TextInput
        className="flex-1 text-[14px] text-text dark:text-text-dark font-inter"
        placeholder={placeHolder}
        placeholderTextColor={placeholderColor}
        returnKeyType="search"
      />
      <FontAwesome name="microphone" size={20} color="#4CAF50" />
    </View>
  );
};

export default SearchBar;
