import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const carouselData = [
  {
    title: "Your next favourite book is here",
    subtitle: "Get new releases, classics and more",
    image: { uri: "https://images.unsplash.com/photo-1521056787327-165dc2a32836?w=400&auto=format&fit=crop&q=60" },
    bg: "bg-yellow-200 dark:bg-yellow-900",
    button: "Shop now",
  },
  // Add more slides as needed
];

const PromoCarousel = () => {
  return (
    <View className="w-full h-48 my-3 ml-6">
        <Text className="text-xl font-inter-bold text-text dark:text-text-dark mb-3">Discover Trending Products</Text>
      <Carousel
        loop
        width={350}
        height={192}
        autoPlay
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <View className={`flex-row items-center rounded-2xl p-5 ${item.bg}`}>
            <View className="flex-1 pr-2">
              <Text className="text-xl font-bold text-black dark:text-white mb-1">
                {item.title}
              </Text>
              <Text className="text-base text-black/70 dark:text-white/70 mb-4">
                {item.subtitle}
              </Text>
              <Pressable className="bg-black dark:bg-white px-4 py-2 rounded-lg w-fit">
                <Text className="text-white dark:text-black font-semibold">
                  {item.button}
                </Text>
              </Pressable>
            </View>
            <Image
              source={item.image}
              className="w-24 h-36 rounded-lg"
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
};

export default PromoCarousel;
