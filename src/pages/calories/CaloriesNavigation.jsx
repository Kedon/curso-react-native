import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CaloriesHome from './home/CaloriesHome';
import CaloriesDetails from './details/CaloriesDetails';

export const Routes = {
  HOME: "calories_home",
  DETAILS: "calories_details",
}

const CaloriesStack = createNativeStackNavigator();

export default function CaloriesNavigation() {
  return (
      <CaloriesStack.Navigator>
        <CaloriesStack.Group
          screenOptions={{
            headerTitleAlign: 'center'
          }}>
          <CaloriesStack.Screen 
            name={Routes.HOME} 
            options={{ title: 'Calorias dos alimentos' }}
            component={CaloriesHome} />
          <CaloriesStack.Screen 
            name={Routes.DETAILS}
            options={{ title: 'Lista de alimentos' }}
            component={CaloriesDetails} />
        </CaloriesStack.Group>
      </CaloriesStack.Navigator>
  );
}