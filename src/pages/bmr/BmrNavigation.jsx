import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BmrHome from './home/BmrHome';
import BmrDetails from './details/BrmDetails';

export const Routes = {
  HOME: "bmr_home",
  DETAILS: "bmr_details",
}

const BmrStack = createNativeStackNavigator();

export default function BmrNavigationNavigation() {
  return (
      <BmrStack.Navigator>
        <BmrStack.Group
          screenOptions={{
            headerTitleAlign: 'center'
          }}>
          <BmrStack.Screen 
            options={{ title: 'Acompanhamento de peso' }}
            name={Routes.HOME} 
            component={BmrHome} />
          <BmrStack.Screen 
            options={{ title: 'Histórido de peso' }}
            name={Routes.DETAILS}
            component={BmrDetails} />
        </BmrStack.Group>
      </BmrStack.Navigator>
  );
}