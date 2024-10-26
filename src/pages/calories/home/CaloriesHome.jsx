import * as React from 'react';
import { Routes } from '../CaloriesNavigation';
import { Text, View, Button } from 'react-native';

function CaloriesHome({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calorias!</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate(Routes.DETAILS)}
        />
      </View>
    );
  }

  export default CaloriesHome;
  