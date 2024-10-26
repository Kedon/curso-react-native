import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

const Routes = {
  HOME: "drink_water_home",
  DETAILS: "drink_water_details",
}
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drink Water!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate(Routes.DETAILS)}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
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
            component={HomeScreen} />
          <DrinkWaterStack.Screen
            options={{ title: 'Histórico de consumo de água' }}
            name={Routes.DETAILS}
            component={DetailsScreen} />
          </DrinkWaterStack.Group>
      </DrinkWaterStack.Navigator>
  );
}