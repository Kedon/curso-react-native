import * as React from 'react';
import { Routes } from '../DrinkWaterNavigation';
import { Text, View, Button } from 'react-native';
import WaterCup from '../components/WaterCup';
import AddWater from '../components/AddWater';

function DrinkWaterHome({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <WaterCup waterConsumed={200} goal={2000} />
        <AddWater />
      </View>
    );
  }

  export default DrinkWaterHome;
  