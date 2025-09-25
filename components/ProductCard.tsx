import type { Product } from "@/constants/productData";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";

interface ProductCardProps {
  product: Product;
  onPress?: (product: Product) => void;
  style?: any;
}

// Displays only image + product name (no price per request)
const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onPress,
  style,
}) => {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => onPress?.(product)}
      className="flex-1 rounded-xl bg-surface dark:bg-surface-dark p-3 border border-secondary/20 dark:border-secondary/30"
      style={[{ minWidth: 150, maxWidth: 180 }, style]}
    >
      <View className="w-full aspect-square overflow-hidden rounded-lg bg-background dark:bg-background-dark">
        <Image
          source={{ uri: product.image }}
          resizeMode="cover"
          className="w-full h-full"
        />
      </View>
      <Text
        numberOfLines={2}
        className="mt-2 text-sm font-inter text-text dark:text-text-dark"
      >
        {product.name}
      </Text>
    </Pressable>
  );
};

export default ProductCard;
