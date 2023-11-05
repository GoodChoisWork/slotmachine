import { StatusBar } from 'expo-status-bar';
import Game from './screens/Games';
import Home from './screens/Home';
import HowToPlay from './screens/HowToPlay';
import About from './screens/About';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="HowToPlay"
          component={HowToPlay}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Game"
          component={Game}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar style="auto"></StatusBar>
    </NavigationContainer>
    );
}
