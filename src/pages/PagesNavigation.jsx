import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrinkWaterNavigation from './drinkWater/DrinkWaterNavigation';
import CaloriesNavigation from './calories/CaloriesNavigation';
import BmrNavigationNavigation from './bmr/BmrNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

export default function PagesNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#01796f",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 12, fontWeight: 600 },
          tabBarIconStyle: { marginBottom: -2, marginTop: 4 },
        }}
      >
        <Tab.Screen
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="local-drink" color={color} size={size + 2} />
            ),
            tabBarBadge: 3,
            tabBarBadgeStyle: {
              marginTop: -7,
              fontSize: 12,
              fontWeight: 700
            }
          }}
          name="Beber Água" component={DrinkWaterNavigation} />
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="restaurant" color={color} size={size + 2} />
            ),
          }}
          name="Calorias" component={CaloriesNavigation} />
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Icon name="fitness-center" color={color} size={size + 2} />
            )
          }}
          name="TMB" component={BmrNavigationNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}