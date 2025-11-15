// @ts-nocheck
import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, Image, StyleSheet, Animated } from 'react-native';

export default function RotatingImage() {
  const [isRotating, setIsRotating] = useState(false);
  const rotation = useRef(new Animated.Value(0)).current;
  const animationRef = useRef(null);

  const startRotation = () => {
    rotation.setValue(0);
    animationRef.current = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      })
    );
    animationRef.current.start();
  };

  const stopRotation = () => {
    if (animationRef.current) {
      animationRef.current.stop();
    }
  };

  const handlePress = () => {
    if (isRotating) {
      stopRotation();
    } else {
      startRotation();
    }
    setIsRotating(!isRotating);
  };

  const rotateY = rotation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handlePress} activeOpacity={0.8}>
        <Animated.Image
          source={require('../assets/food.png')}
          className={"w-44 h-44"}
          style={[
            {
              transform: [{ rotateY }],
            },
          ]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
//   image: {
//     width: 300,
//     height: 400,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//     elevation: 8,
//   },
});