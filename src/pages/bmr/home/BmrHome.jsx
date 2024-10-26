import * as React from 'react';
import {Routes} from '../BmrNavigation';
import {Text, View, Button} from 'react-native';

function BmrHome({navigation}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Basal Metabolic Rate!</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate(Routes.DETAILS)}
      />
    </View>
  );
}

export default BmrHome;
