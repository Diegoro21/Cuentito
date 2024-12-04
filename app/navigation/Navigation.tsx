import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MisCuentitos from '../screens/MisCuentitos';
import Login from '../screens/Login';
import Tutorial from '../screens/Tutorial';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Mis Cuentitos" component={MisCuentitos} />
    </Tab.Navigator>
  );
}
export function TabNavigator() {
  return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tutorial" component={Tutorial} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
  );
}