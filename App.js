import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MoodInputScreen from './screens/MoodInputScreen';
// import RecommendationsScreen from './RecommendationsScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MoodInput">
        <Stack.Screen name="What to Watch" component={MoodInputScreen} />
        {/* <Stack.Screen name="Recommendations" component={RecommendationsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
