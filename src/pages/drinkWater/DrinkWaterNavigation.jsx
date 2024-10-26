import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Drink Water!</Text>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Drink Water Details')}
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
        onPress={() => navigation.navigate('Drink Water')}
      />
    </View>
  );
}

const DrinkWaterStack = createNativeStackNavigator();

export default function DrinkWaterNavigation() {
  return (
      <DrinkWaterStack.Navigator>
        <DrinkWaterStack.Screen name="Drink Water" component={HomeScreen} />
        <DrinkWaterStack.Screen name="Drink Water Details" component={DetailsScreen} />
      </DrinkWaterStack.Navigator>
  );
}