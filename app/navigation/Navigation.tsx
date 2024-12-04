import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "../screens/Home";
import MisCuentitos from "../screens/MisCuentitos";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;

          switch (route.name) {
            case "Crear Cuento":
              iconName = "create-outline";
              break;
            case "Mis Cuentitos":
              iconName = "book-outline";
              break;
            default:
              iconName = "circle"; // Icono por defecto (no debería usarse)
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#43B582", // Color del icono activo
        tabBarInactiveTintColor: "#7f8c8d", // Color del icono inactivo
        tabBarStyle: { backgroundColor: "#ffffff" }, // Estilo de la barra
      })}
    >
      <Tab.Screen
        name="Crear Cuento"
        component={Home}
        options={{ headerShown: false }} // Oculta el header si es necesario
      />
      <Tab.Screen
        name="Mis Cuentitos"
        component={MisCuentitos}
        options={{ headerShown: false }} // Oculta el header si es necesario
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
