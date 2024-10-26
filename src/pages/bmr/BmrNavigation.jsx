import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

const Routes = {
  HOME: "bmr_home",
  DETAILS: "bmr_details",
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Basal Metabolic Rate!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate(Routes.DETAILS)}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
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
            component={HomeScreen} />
          <BmrStack.Screen 
            options={{ title: 'Histórido de peso' }}
            name={Routes.DETAILS}
            component={DetailsScreen} />
        </BmrStack.Group>
      </BmrStack.Navigator>
  );
}