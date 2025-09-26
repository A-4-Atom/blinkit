import React from "react";
import { FlatList, Text, View } from "react-native";
import FrequentlyBoughtCard from "./FrequentlyBoughtCard";
import { FREQUENTLY_BOUGHT_CATEGORIES } from "../constants/productData";

const FrequentlyBought = () => {
  return (
    <View className="w-full mt-6">
      <View className="px-3 mb-4">
        <Text className="text-xl font-inter-bold text-text dark:text-text-dark">
          Frequently bought
        </Text>
      </View>

      <FlatList
        data={FREQUENTLY_BOUGHT_CATEGORIES}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 12, gap: 12 }}
        columnWrapperStyle={{ gap: 12 }}
        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
        renderItem={({ item }) => (
          <FrequentlyBoughtCard
            title={item.title}
            moreCount={item.moreCount}
            images={item.images}
          />
        )}
        scrollEnabled={false}
      />
    </View>
  );
};

export default FrequentlyBought;
