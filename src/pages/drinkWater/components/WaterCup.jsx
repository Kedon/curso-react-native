import React from 'react';
import Svg, {Path} from 'react-native-svg';
import { View, StyleSheet, Text } from 'react-native';

import Animated, {
    useSharedValue,
    withinTiming,
    useAnimatedStyle
} from 'react-native-reanimated';

const WaterCup = () => {
    return (
    <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: 'center'}}>
            <View style={styles.goalContainer}>
                <Text style={styles.consumed}>
                    250 ml
                </Text>
                <Text style={styles.goal}>
                    de 2000 ml
                </Text>
            </View>
        
        <Svg width={270} height={354} viewBox="0 0 368 470">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M368 0H0L52 470H316L368 0ZM319 47H50L88.0109 431H280.989L319 47Z"
              fill="#A4D4FF"
            />
          </Svg>
          <View style={styles.footer}>
            <Text style={styles.percent}>
                20%
            </Text>
          </View>
        </View>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    goalContainer: {
        alignItems: 'center',
        marginBottom: 12
    },
    consumed: {
        fontSize: 42,
        fontWeight: 'bold',
        color: "#5fb0ff"
    },
    goal: {
        fontSize: 16,
        color: "#5fb0ff"
    },
    footer: {
        alignItems: 'center'
    },
    percent: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "#5fb0ff"
    }
})

export default WaterCup