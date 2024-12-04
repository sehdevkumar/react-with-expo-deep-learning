import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

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
      <Stack screenOptions={{ headerShown: false  , animation: "slide_from_right"}}>
        <Stack.Screen name="index" options={{ headerShown: true ,title: "Home" }} />
        <Stack.Screen name="(tabsRouting)" options={{ headerShown: false }} />
        <Stack.Screen name="(gourp1)" options={{ headerShown: false }} />
        <Stack.Screen name="(gourp2)" options={{ headerShown: false }} />
        <Stack.Screen name="dynamicRouting/[id].tsx" options={{ headerShown: true ,title: "Dynamic Routing" }} />
        <Stack.Screen name="List" options={{ headerShown: true ,title: "List" }} />
        <Stack.Screen name="localfirst" options={{ headerShown: true ,title: "Local First" }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
