import * as React from 'react';
import { Text, View, Button } from 'react-native';

function CaloriesDetails({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Calories Details!</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.goBack()}
        />
      </View>
    );
  }

  export default CaloriesDetails
  