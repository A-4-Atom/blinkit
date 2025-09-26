import { FREQUENTLY_BOUGHT_CATEGORIES } from "@/constants/productData";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const Categories = () => {
  return (
    <ScrollView className="flex-1 bg-background dark:bg-background-dark p-4">
      <Text className="text-2xl font-inter-bold text-text dark:text-text-dark mb-4">
        Categories
      </Text>
      <View className="gap-3">
        {FREQUENTLY_BOUGHT_CATEGORIES.map((cat) => (
          <View
            key={cat.id}
            className="p-4 rounded-lg bg-surface dark:bg-surface-dark border border-secondary"
          >
            <Text className="text-lg font-inter-bold text-text dark:text-text-dark">
              {cat.title}
            </Text>
            <Text
              className="text-text-muted dark:text-text-mutedDark font-inter mt-1"
              numberOfLines={2}
            >
              {cat.moreCount} more
            </Text>
            <View className="flex-row mt-2 gap-2">
              {cat.images.map((img, idx) => (
                <View
                  key={idx}
                  className="w-8 h-8 rounded overflow-hidden bg-gray-200"
                >
                  <Image
                    source={{ uri: img }}
                    style={{ width: 32, height: 32, borderRadius: 8 }}
                    resizeMode="cover"
                  />
                </View>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Categories;
