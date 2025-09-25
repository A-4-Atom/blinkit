import LottieView from "lottie-react-native";
import React from "react";
import { View } from "react-native";

const AnimatedSplash: React.FC = () => (
  <View className="flex-1 bg-white px-5">
    <View className="flex-1 w-5/6 self-center">
      <LottieView
        source={require("../assets/Splashscreen-Animation.json")}
        autoPlay
        style={{ flex: 1 }}
      />
    </View>
  </View>
);

export default AnimatedSplash;
