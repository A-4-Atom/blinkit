import FeatureGrid from "@/components/FeatureGrid";
import SearchBar from "@/components/SearchBar";
import TopBar from "@/components/TopBar";
import React from "react";
import { View } from "react-native";

const Index = () => {
  return (
    <View className="flex-1 items-center w-full bg-background dark:bg-background-dark p-3">
      <TopBar />
      <SearchBar placeHolder="Search Anything..." />
      <FeatureGrid />
    </View>
  );
};

export default Index;
