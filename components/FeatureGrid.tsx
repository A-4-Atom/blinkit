import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";

// Static categories based on the image
const CATEGORIES = [
  { id: "all", name: "All", icon: "grid" },
  { id: "festivals", name: "Festivals", icon: "gift" },
  { id: "electronics", name: "Electronics", icon: "headset" },
  { id: "beauty", name: "Beauty", icon: "flask" },
  { id: "kids", name: "Kids", icon: "happy" },
  { id: "decor", name: "Decor", icon: "home" },
];

export type FeatureGridProps = {
  onSelect?: (categoryId: string) => void;
  activeCategoryId?: string;
};

export default function FeatureGrid({
  onSelect,
  activeCategoryId,
}: FeatureGridProps) {
  const [localActive, setLocalActive] = useState(CATEGORIES[0]?.id);
  const current = activeCategoryId ?? localActive;

  const handlePress = (id: string) => {
    if (activeCategoryId === undefined) setLocalActive(id);
    onSelect?.(id);
  };

  return (
    <View className="w-full mt-4 mb-1">
      <FlatList
        horizontal
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12, gap: 14 }}
        renderItem={({ item }) => {
          const active = item.id === current;
          return (
            <Pressable
              onPress={() => handlePress(item.id)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              className="items-center w-16"
            >
              <View className="items-center justify-center relative">
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={active ? "#0C831F" : "#6B7280"}
                />
                <Text
                  numberOfLines={1}
                  className={`text-xs mt-1 font-inter text-text dark:text-text-dark ${
                    active ? "font-inter-bold" : ""
                  }`}
                >
                  {item.name}
                </Text>
                {/* Bottom indicator bar for active item */}
                {active && (
                  <View className="h-0.5 w-8 bg-primary dark:bg-primary mt-1 rounded-full" />
                )}
              </View>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
