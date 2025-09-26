import { CATEGORIES } from "@/constants/productData";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const Categories = () => {
  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark p-4">
      <Text className="text-2xl font-inter-bold text-text dark:text-text-dark mb-4">
        Categories
      </Text>
      <View className="gap-3">
        {CATEGORIES.map((cat) => (
          <View
            key={cat.id}
            className="p-4 rounded-lg bg-surface dark:bg-surface-dark border border-secondary"
          >
            <Text className="text-lg font-inter-bold text-text dark:text-text-dark">
              {cat.label}
            </Text>
            <Text
              className="text-text-muted dark:text-text-mutedDark font-inter mt-1"
              numberOfLines={2}
            >
              {cat.products.length} products
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;
