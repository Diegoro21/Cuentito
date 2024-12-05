import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import MisCuentitos from '../screens/MisCuentitos';
import Login from '../screens/Login';
import Tutorial from '../screens/Tutorial';
import Cuento from '../screens/Cuento';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: any;

          if (route.name === 'Crear Cuento') {
            // iconName = focused ? 'home' : 'home-outline';
            iconName = focused ? 'lead-pencil' : 'lead-pencil';
          } else if (route.name === 'Mis Cuentitos') {
            iconName = focused ? 'book-open-page-variant' : 'book-outline';
          }

          // Devuelve el ícono correspondiente
          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Crear Cuento" component={Home} />
      <Tab.Screen name="Mis Cuentitos" component={MisCuentitos} />
      {/* <Tab.Screen name="Cuento" component={Cuento} /> */}
    </Tab.Navigator>
  );
}

export function TabNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="Login" component={Login} /> */}
      <Stack.Screen name="Tutorial" component={Tutorial} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
      <Stack.Screen name="Cuento" component={Cuento} />
    </Stack.Navigator>
  );
}
