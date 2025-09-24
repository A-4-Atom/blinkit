import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useEffect, useRef } from "react";
import { StyleSheet, View } from "react-native";
import splashAnimation from "../assets/images/Splashscreen-Animation.json";

// Ensure splash screen doesn't auto hide until we manually do so
SplashScreen.preventAutoHideAsync().catch(() => {});

// (The JSON import above relies on resolveJsonModule from Expo base tsconfig)

interface AnimatedSplashProps {
  onFinish?: () => void;
  backgroundLight?: string;
  backgroundDark?: string;
  darkMode?: boolean;
  fadeOutDuration?: number;
}

/**
 * AnimatedSplash overlays the app while playing a single Lottie animation.
 * After the animation completes it fades out, hides the native splash, and unmounts.
 */
export const AnimatedSplash = ({
  onFinish,
  backgroundLight = "#ffffff",
  backgroundDark = "#000000",
  darkMode = false,
  fadeOutDuration = 450, // retained for backward compatibility (unused)
}: AnimatedSplashProps) => {
  const lottieRef = useRef<LottieView>(null);

  const handleAnimationFinish = () => {
    // Directly hide the native splash; fade handled inside the Lottie design itself
    (async () => {
      try {
        await SplashScreen.hideAsync();
      } catch {}
      onFinish?.();
    })();
  };

  useEffect(() => {
    // Start playing after a tiny delay to ensure component fully mounted
    const t = setTimeout(() => lottieRef.current?.play(), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <View
      style={[
        styles.overlay,
        { backgroundColor: darkMode ? backgroundDark : backgroundLight },
      ]}
    >
      <LottieView
        ref={lottieRef}
        source={splashAnimation}
        autoPlay={false}
        loop={false}
        onAnimationFinish={handleAnimationFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  animation: {
    width: 260,
    height: 260,
  },
});
