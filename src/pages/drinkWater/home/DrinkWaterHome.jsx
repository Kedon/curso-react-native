import * as React from 'react';
import { Routes } from '../DrinkWaterNavigation';
import { Text, View, Button } from 'react-native';
import WaterCup from '../components/WaterCup';

function DrinkWaterHome({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <WaterCup />
      </View>
    );
  }

  export default DrinkWaterHome;
  