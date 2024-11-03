import {useState} from 'react';
import { View } from 'react-native';
import WaterCup from '../components/WaterCup';
import AddWater from '../components/AddWater';

function DrinkWaterHome() {
    const [waterConsumed, setWaterConsumed] = useState(200);
    const [goal, setGoal] = useState(2000);

    const handleAddWater = (amount) => {
      setWaterConsumed(waterConsumed + amount);
    };

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <WaterCup waterConsumed={waterConsumed} goal={goal} />
        <AddWater onAddWater={handleAddWater} />
      </View>
    );
  }

  export default DrinkWaterHome;
  