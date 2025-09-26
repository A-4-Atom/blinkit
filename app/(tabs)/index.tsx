import FeatureGrid from "@/components/FeatureGrid";
import FrequentlyBought from "@/components/FrequentyBought";
import SearchBar from "@/components/SearchBar";
import TopBar from "@/components/TopBar";
import React, { useState } from "react";
import { ScrollView, View } from "react-native";

const Home = () => {
  const [activeCategoryId, setActiveCategoryId] = useState("all");

  return (
    <ScrollView
      className="flex-1 w-full bg-background dark:bg-background-dark"
      contentContainerStyle={{ paddingBottom: 48 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-3 pt-3 pb-2 shadow-sm bg-surface/60 dark:bg-surface-dark/30 rounded-b-xl">
        <TopBar />
        <SearchBar placeHolder="Search for snacks, groceries and more" />
        <FeatureGrid
          activeCategoryId={activeCategoryId}
          onSelect={setActiveCategoryId}
        />
      </View>

      <FrequentlyBought />

      {/* Additional content like promotional banners can be added here */}
    </ScrollView>
  );
};

export default Home;
