import * as React from 'react';
import { Routes } from '../DrinkWaterNavigation';
import { Text, View, Button } from 'react-native';

function DrinkWaterHome({ navigation }) {
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

  export default DrinkWaterHome;
  