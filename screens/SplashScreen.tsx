import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image,StatusBar } from 'react-native';
import Animated, { Easing, useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import SplashScreen from 'react-native-splash-screen';
 
 

const AnimatedSplashScreen = ({ navigation }:any) => {
  // Animation value for logo scaling
  const scale = useSharedValue(0);

  // Animation value for opacity of the title
  const opacity = useSharedValue(0);

  // Define animation styles for the logo
  const logoStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withTiming(scale.value, { duration: 1500, easing: Easing.bounce }) }]
    };
  });

  // Define animation styles for the title
  const titleStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(opacity.value, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
    };
  });

  // Trigger the animation when the component mounts
  useEffect(() => {
    SplashScreen.hide(); // Hide the native splash screen
    // Start the animations
    scale.value = 1;
    opacity.value = 1;

    // Navigate to the home screen after the animation finishes
    setTimeout(() => {
      navigation.replace('Home');
    }, 2500);
  }, []);

  return (
    <View className='flex-1 justify-center items-center'>
        <StatusBar barStyle="light-content" backgroundColor="#7F265B"></StatusBar>
        <Animated.View style={[styles.logoContainer, logoStyle]}>
        <View className='flex justify-center items-center'>
            <Image source={require('../assets/careerq.png')}></Image>
            <Text className='font-bold text-[30px]'>Neo Spark <Text className='text-red-600 text-[30px]'>Career</Text></Text>
        </View>
      </Animated.View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Customize your background color
  },
  logoContainer: {
    width: '100%',
    height: 150,
    marginBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default AnimatedSplashScreen;
