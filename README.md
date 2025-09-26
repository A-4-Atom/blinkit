# Blinkit

A simple, modern grocery shopping app built with Expo, React Native, and TypeScript.

<p align="center">
  ![Blinkit Logo](./assets/images/BlinkitLogo.png)
</p>

## Features

- Browse products by category (fruits, vegetables, etc.)
- Search for products
- View frequently bought items
- Animated splash screen
- Light & dark theme support
- Persistent user and theme settings

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start the app**

   ```bash
   npm start
   ```

3. **Run on device or emulator**
   - Use the Expo Go app, Android emulator, or iOS simulator

## Project Structure

- `app/` — App screens and navigation (Expo Router)
- `components/` — Reusable UI components
- `constants/` — Product/category data
- `store/` — Zustand stores for user and theme
- `assets/` — Images, fonts, and splash animation

## Tech Stack

- [Expo](https://expo.dev/) (React Native)
- [TypeScript](https://www.typescriptlang.org/)
- [NativeWind](https://www.nativewind.dev/) (Tailwind CSS for React Native)
- [Zustand](https://zustand-demo.pmnd.rs/) (state management)
- [Lottie](https://airbnb.io/lottie/#/) (splash animation)

## Customization

- Edit product/category data in `constants/productData.ts`
- Update branding in `assets/images/` and splash animation in `assets/Splashscreen-Animation.json`

---

Made with ❤️ using Expo & React Native.
