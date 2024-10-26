import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrinkWaterNavigation from './drinkWater/DrinkWaterNavigation';
import CaloriesNavigation from './calories/CaloriesNavigation';
import BmrNavigationNavigation from './bmr/BmrNavigation';

const Tab = createBottomTabNavigator();

export default function PagesNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{ headerShown: false}}
          name="Beber Água" component={DrinkWaterNavigation} />
        <Tab.Screen 
          options={{ headerShown: false}}
          name="Calorias" component={CaloriesNavigation} />
        <Tab.Screen 
          options={{ headerShown: false}}
          name="TMB" component={BmrNavigationNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}