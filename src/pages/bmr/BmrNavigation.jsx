import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BmrHome from './home/BmrHome';
import BmrDetails from './details/BrmDetails';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Importa a biblioteca de ícones


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
            headerTitleAlign: 'center',
            headerTintColor: '#01796f',
            headerShadowVisible: false,
            headerTransparent: true,
            headerTitleStyle: { fontSize: 18 },
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