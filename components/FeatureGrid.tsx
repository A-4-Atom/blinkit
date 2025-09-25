import { FEATURE_CATEGORIES } from "@/constants/productData";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { FlatList, Pressable, Text, View } from "react-native";


export type FeatureGridProps = {
  onSelect?: (categoryId: string) => void;
  activeCategoryId?: string; 
};


export default function FeatureGrid({
  onSelect,
  activeCategoryId,
}: FeatureGridProps) {
  const [localActive, setLocalActive] = useState(FEATURE_CATEGORIES[0]?.id);
  const current = activeCategoryId ?? localActive;

  const handlePress = (id: string) => {
    if (activeCategoryId === undefined) setLocalActive(id);
    onSelect?.(id);
  };

  return (
    <View className="w-full mt-4">
      <FlatList
        horizontal
        data={FEATURE_CATEGORIES}
        keyExtractor={(i) => i.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}
        extraData={current}
        renderItem={({ item }) => {
          const active = item.id === current;
          return (
            <Pressable
              onPress={() => handlePress(item.id)}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              className={`items-center ${active ? "opacity-100" : "opacity-90"}`}
            >
              <View
                className={`w-16 h-14 px-2 rounded-md items-center justify-center border bg-surface dark:bg-surface-dark ${
                  active
                    ? "border-primary bg-primary/10 dark:bg-primary/20"
                    : "border-secondary/40 dark:border-secondary/30"
                }`}
              >
                <Ionicons
                  name={item.icon as any}
                  size={24}
                  color={active ? "#FF6B35" : "#4CAF50"}
                />
              </View>
              <Text
                numberOfLines={1}
                className={`mt-1 text-[12px] font-inter text-text dark:text-text-dark ${
                  active ? "font-inter-bold text-primary" : ""
                }`}
                style={{ maxWidth: 70 }}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
}
