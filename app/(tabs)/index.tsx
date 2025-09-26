import FeatureGrid from "@/components/FeatureGrid";
import FrequentlyBought from "@/components/FrequentyBought";
import ProductCard from "@/components/ProductCard";
import SearchBar from "@/components/SearchBar";
import TopBar from "@/components/TopBar";
import { CATEGORIES } from "@/constants/productData";
import React, { useState } from "react";
import { FlatList, ScrollView, View } from "react-native";

const Home = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(CATEGORIES[0].id);

  const products =
    CATEGORIES.find((c) => c.id === activeCategoryId)?.products ?? [];

  return (
    <ScrollView
      className="flex-1 w-full bg-background dark:bg-background-dark"
      contentContainerStyle={{ paddingBottom: 48 }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-3 pt-3">
        <TopBar />
        <SearchBar placeHolder="Search Anything..." />
        <FeatureGrid
          activeCategoryId={activeCategoryId}
          onSelect={setActiveCategoryId}
        />
      </View>
      <View className="mt-4 px-3">
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={{ gap: 12 }}
          contentContainerStyle={{ gap: 12 }}
          ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
          renderItem={({ item }) => (
            <ProductCard image={item.image} title={item.name} />
          )}
          scrollEnabled={false}
        />
      </View>
      <FrequentlyBought />
    </ScrollView>
  );
};

export default Home;
