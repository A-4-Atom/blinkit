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
      style={{
        flex: 1,
        borderRadius: 16,
        overflow: "hidden",
        backgroundColor: "#0C6E5A", // Main card color
      }}
    >
      {/* Images grid */}
      <View className="p-2 flex-row flex-wrap">
        {images.slice(0, 4).map((image, index) => (
          <View key={index} className="w-1/2 aspect-square p-1">
            <Image
              source={{ uri: image }}
              resizeMode="cover"
              className="w-full h-full rounded-md bg-background dark:bg-background-dark"
            />
          </View>
        ))}
      </View>

      {/* Content area with protruding middle */}
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 12,
          paddingBottom: 12,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          // This gives the subtle bulge in the middle
          marginLeft: -2,
          marginRight: -2,
          backgroundColor: "#0C6E5A",
          // Shadow to enhance the protrusion effect
          shadowColor: "rgba(0,0,0,0.3)",
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 2,
          elevation: 2,
        }}
      >
        <Text className="text-white text-xs font-inter text-center">
          +{moreCount} more
        </Text>
        <Text className="text-white text-sm font-inter-bold text-center mt-1">
          {title}
        </Text>
      </View>
    </Pressable>
  </View>
);

export default FrequentlyBoughtCard;
