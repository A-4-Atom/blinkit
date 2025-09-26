import React from "react";
import { Image, Pressable, Text, View } from "react-native";

type FrequentlyBoughtCardProps = {
  title: string;
  moreCount: number;
  images: string[];
  onPress?: () => void;
};

const FrequentlyBoughtCard = ({
  title,
  moreCount,
  images,
  onPress,
}: FrequentlyBoughtCardProps) => (
  <View className="flex-1 min-w-[160px] max-w-[180px]">
    <Pressable
      onPress={onPress}
      className="flex-1 rounded-2xl overflow-hidden bg-surface dark:bg-[#007a14] border border-surface/60 dark:border-[#0C831F]/60 shadow"
    >
      <View className="p-2 flex-row flex-wrap">
        {images.map((image, index) => (
          <View key={index} className="w-1/2 aspect-square p-1">
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              className="w-full h-full rounded-md bg-background dark:bg-background-dark"
            />
          </View>
        ))}
      </View>

      <View className="py-2.5 px-3 pb-3 -mx-0.5 rounded-t-2xl bg-surface dark:bg-[#007a14] shadow">
        <Text className="text-text dark:text-text-dark text-xs font-inter text-center">
          +{moreCount} more
        </Text>
        <Text className="text-text dark:text-text-dark text-md font-inter-bold text-center mt-1">
          {title}
        </Text>
      </View>
    </Pressable>
  </View>
);

export default FrequentlyBoughtCard;
