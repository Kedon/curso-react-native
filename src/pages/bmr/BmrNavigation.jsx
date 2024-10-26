import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Button } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Basal Metabolic Rate!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('BMR Details')}
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
        onPress={() => navigation.navigate('BMR')}
      />
    </View>
  );
}

const BmrStack = createNativeStackNavigator();

export default function BmrNavigationNavigation() {
  return (
      <BmrStack.Navigator>
        <BmrStack.Screen name="BMR" component={HomeScreen} />
        <BmrStack.Screen name="BMR Details" component={DetailsScreen} />
      </BmrStack.Navigator>
  );
}