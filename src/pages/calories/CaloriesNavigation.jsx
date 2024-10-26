import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

const Routes = {
  HOME: "calories_home",
  DETAILS: "calories_details",
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Calories!</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate(Routes.DETAILS)}
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
        onPress={() => navigation.goBack()}
      />
    </View>
  );
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
            component={HomeScreen} />
          <CaloriesStack.Screen 
            name={Routes.DETAILS}
            options={{ title: 'Lista de alimentos' }}
            component={DetailsScreel} />
        </CaloriesStack.Group>
      </CaloriesStack.Navigator>
  );
}