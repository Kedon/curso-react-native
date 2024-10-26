import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrinkWaterHome from './home/DrinkWaterHome';
import DrinkWaterDetails from './details/DrinkWaterDetails';

export const Routes = {
  HOME: "drink_water_home",
  DETAILS: "drink_water_details",
}

const DrinkWaterStack = createNativeStackNavigator();

export default function DrinkWaterNavigation() {
  return (
      <DrinkWaterStack.Navigator>
        <DrinkWaterStack.Group
          screenOptions={{
            headerTitleAlign: 'center'
          }}>
          <DrinkWaterStack.Screen 
            options={{ title: 'Consumo de água' }}
            name={Routes.HOME} 
            component={DrinkWaterHome} />
          <DrinkWaterStack.Screen
            options={{ title: 'Histórico de consumo de água' }}
            name={Routes.DETAILS}
            component={DrinkWaterDetails} />
          </DrinkWaterStack.Group>
      </DrinkWaterStack.Navigator>
  );
}