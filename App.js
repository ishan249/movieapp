import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native"; // Import StatusBar component
import MoodInputScreen from "./screens/MoodInputScreen";
import MovieListScreen from "./screens/MovieListScreen";

const Stack = createStackNavigator();

export default function App() {
  // Load Inter font
  const [fontsLoaded] = useFonts({
    "Inter-Regular": require("./assets/fonts/Inter_18pt-Regular.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter_18pt-Bold.ttf"),
    "Inter-Semibold": require("./assets/fonts/Inter_18pt-SemiBold.ttf"),
  });

  // Show a loading screen or null until fonts are loaded
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {/* Set the status bar to light content to make the icons and time visible on dark backgrounds */}
      <StatusBar barStyle="light-content" backgroundColor="#14181c" />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="MoodInput">
          <Stack.Screen
            name="Mood Input"
            component={MoodInputScreen}
            options={{
              title: "What To Watch",
              headerStyle: {
                backgroundColor: "#14181c",
                borderBottomWidth: 1,
                borderBottomColor: "#14181c",
              },
              headerTintColor: "#fff", // White text for header
              headerTitleStyle: {
                fontWeight: "semibold",
                fontFamily: "Inter-Regular",
              },
              cardStyle: {
                backgroundColor: "#14181c", // Black background for the screen
              },
            }}
            // #14181c - blue
            // #00ac1c - orange
            // #ff8000 - green
            // #40bcf4 - light-blue
          />
          <Stack.Screen
          name="MovieListScreen"
          component={MovieListScreen}
          options={{
            title: "Movie List",
            headerStyle: {
              backgroundColor: "#14181c",
              borderBottomWidth: 1,
              borderBottomColor: "#14181c",
            },
            headerTintColor: "#fff", // White text for header
            headerTitleStyle: {
              fontWeight: "semibold",
              fontFamily: "Inter-Regular",
            },
            cardStyle: {
              backgroundColor: "#14181c", // Black background for the screen
            },
          }}
        />
        </Stack.Navigator>
        
      </NavigationContainer>
    </>
  );
}
