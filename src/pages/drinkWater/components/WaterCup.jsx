import React, {useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
} from 'react-native-reanimated';

export default function WaterCup({waterConsumed, goal}) {
  const fillHeight = useSharedValue(0);

  // Calcula o preenchimento de acordo com o consumo de água
  useEffect(() => {
    const fillRatio = Math.min(waterConsumed / goal, 1); // Limita a 100%
    fillHeight.value = withTiming(fillRatio * 284, {duration: 500});
  }, [waterConsumed]);

  // Estilo animado para o preenchimento
  const animatedStyle = useAnimatedStyle(() => ({
    height: fillHeight.value,
  }));

  const percent = (waterConsumed / goal) * 100;

  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={styles.goalContainer}>
          <Text style={styles.consumed}>{waterConsumed} ml</Text>
          <Text style={styles.goal}>de {goal} ml</Text>
        </View>
        <View style={styles.glassContainer}>
          <View style={styles.waterContainer}>
            <Animated.View style={[styles.waterConsumed, animatedStyle]} />
          </View>
          <Svg width={270} height={354} viewBox="0 0 368 470">
            <Path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M368 0H0L52 470H316L368 0ZM319 47H50L88.0109 431H280.989L319 47Z"
              fill="#A4D4FF"
            />
          </Svg>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={styles.percentage}>{percent.toFixed(0)}%</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  consumed: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#57B0FF',
  },
  goal: {
    fontSize: 16,
    color: '#57B0FF',
  },
  goalContainer: {
    alignItems: 'center',
    marginBottom: 12,
  },
  glassContainer: {
    position: 'relative',
  },
  waterContainer: {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    top: 38,
    bottom: 31,
    width: 200,
    left: '50%',
    marginLeft: -100,
    overflow: 'hidden', // Oculta qualquer conteúdo fora da área do copo
  },
  waterConsumed: {
    backgroundColor: '#57B0FF',
    width: '100%',
    position: 'absolute',
    bottom: 0, // Define o preenchimento a partir da parte inferior
  },
  percentage: {
    fontSize: 50,
    fontWeight: 'bold',
    marginTop: 0,
    color: '#57B0FF',
  },
});
