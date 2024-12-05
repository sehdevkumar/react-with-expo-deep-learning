import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { ErrorBoundaryProps, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";
import { useColorScheme } from '@/hooks/useColorScheme';
import { Text, View } from 'react-native';
import { Try } from 'expo-router/build/views/Try';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();


export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false, animation: "slide_from_right" }}>
        <Stack.Screen name="index" options={{ headerShown: true, title: "Home" }} />
        <Stack.Screen name="(tabsRouting)" options={{ headerShown: false }} />
        <Stack.Screen name="(gourp1)" options={{ headerShown: false }} />
        <Stack.Screen name="(gourp2)" options={{ headerShown: false }} />
        <Stack.Screen name="dynamicRouting/[id].tsx" options={{ headerShown: true, title: "Dynamic Routing" }} />
        <Stack.Screen name="List" options={{ headerShown: true, title: "List" }} />
        <Stack.Screen name="localfirst" options={{ headerShown: false, title: "Local First" }} />
        <Stack.Screen name="interactionmanager" options={{ headerShown: false, title: "Interaction Manager" }} />
        <Stack.Screen name="patterns" options={{ headerShown: false, title: "Patterns" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />

    </ThemeProvider>
  );
}

