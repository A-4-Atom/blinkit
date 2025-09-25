import ProductCard from "@/components/ProductCard";
import { CATEGORIES } from "@/constants/productData";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

// Gather all products marked as frequentlyBought
const frequentlyBoughtProducts = CATEGORIES.flatMap((cat) =>
  cat.products.filter((p) => p.frequentlyBought)
);

const { width: windowWidth } = Dimensions.get("window");

const FrequentlyBought: React.FC = () => {
  return (
    <View className="mt-6 mb-2 max-w-max">
      <Text className="text-2xl font-bold mb-3 text-text dark:text-text-dark self-start ml-2">
        Frequently Bought
      </Text>
      <View className="items-center w-fit ml-40">
        <Carousel
          width={windowWidth * 0.9}
          height={260}
          data={frequentlyBoughtProducts}
          mode="horizontal-stack"
          modeConfig={{
            snapDirection: "left",
            stackInterval: 18,
          }}
          renderItem={({ item }) => (
            <ProductCard
              image={item.image}
              title={item.name}
              className="w-full"
            />
          )}
          snapEnabled
          loop
          autoPlay
          autoPlayInterval={3500}
          pagingEnabled
        />
      </View>
    </View>
  );
};

export default FrequentlyBought;
