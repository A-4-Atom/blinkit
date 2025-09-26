import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { FlatList, Pressable, Text, View } from "react-native";

const CATEGORIES = [
  { id: "all", name: "All", icon: "grid" },
  { id: "festivals", name: "Festivals", icon: "gift", badge: "New" },
  { id: "electronics", name: "Electronics", icon: "headset" },
  { id: "beauty", name: "Beauty", icon: "color-wand" },
  { id: "kids", name: "Kids", icon: "happy" },
  { id: "decor", name: "Decor", icon: "home" },
];

type CategoryNavProps = {
  onSelect?: (id: string) => void;
  activeId?: string;
};

const CategoryNav = ({ onSelect, activeId = "all" }: CategoryNavProps) => {
  return (
    <View className="mt-3 mb-5">
      <FlatList
        horizontal
        data={CATEGORIES}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingHorizontal: 12, gap: 16 }}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onSelect?.(item.id)}
            className="items-center"
          >
            <View className="relative">
              <View className="w-12 h-12 rounded-full bg-surface dark:bg-surface-dark border border-secondary/40 dark:border-secondary/30 items-center justify-center">
                <Ionicons
                  name={item.icon as any}
                  size={22}
                  color={activeId === item.id ? "#0C831F" : "#555"}
                />
              </View>
              {item.badge && (
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full px-1">
                  <Text className="text-[8px] text-white font-inter">
                    {item.badge}
                  </Text>
                </View>
              )}
            </View>
            <Text className="mt-1 text-xs font-inter text-text dark:text-text-dark">
              {item.name}
            </Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default CategoryNav;
