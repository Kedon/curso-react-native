import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calories!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Calories Details')}
      />
    </View>
  );
}

function DetailsScreel({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details!</Text>
      <Button
        title="Go to Home"
        onPress={() => navigation.navigate('Calories')}
      />
    </View>
  );
}

const CaloriesStack = createNativeStackNavigator();

export default function CaloriesNavigation() {
  return (
      <CaloriesStack.Navigator>
        <CaloriesStack.Screen name="Calories" component={HomeScreen} />
        <CaloriesStack.Screen name="Calories Details" component={DetailsScreel} />
      </CaloriesStack.Navigator>
  );
}