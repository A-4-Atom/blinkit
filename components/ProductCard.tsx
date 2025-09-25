import React from "react";
import { Image, Text, View } from "react-native";

type ProductCardProps = {
  image: string;
  title: string;
  count?: number;
  className?: string;
};

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  count,
  className,
}) => (
  <View
    className={`flex-1 rounded-xl bg-surface dark:bg-surface-dark p-3 border border-secondary/20 dark:border-secondary/30 ${className ?? ""}`}
    style={{ minWidth: 150, maxWidth: 180 }}
  >
    <View className="w-full aspect-square overflow-hidden rounded-lg bg-background dark:bg-background-dark">
      <Image
        source={{ uri: image }}
        resizeMode="cover"
        className="w-full h-full"
      />
    </View>
    <Text
      numberOfLines={2}
      className="mt-2 text-sm font-inter text-text dark:text-text-dark"
    >
      {title}
    </Text>
    {typeof count === "number" && (
      <Text className="text-xs text-secondary mt-1">{count} left</Text>
    )}
  </View>
);

export default ProductCard;
