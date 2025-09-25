import { Redirect } from "expo-router";

export default function RootRedirect() {
  // Redirect to the tabs group root which hosts the Home screen
  return <Redirect href="/(tabs)" />;
}

