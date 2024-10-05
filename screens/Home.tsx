import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation: any = useNavigation();

  return (
    <View className="flex-1 justify-center">
      {/* Lottie Animation */}
      <LottieView
        source={require('../assets/career.json')}
        autoPlay
        loop
        style={{ height: 300 }} // Adjust height as needed
      />

      <View className='flex justify-center items-center'>
        <Text className='font-bold text-2xl'>Explore The App</Text>
      </View>

      {/* Button */}
      <View className="mt-[70px] flex justify-center items-center"> 
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          className=' items-center p-4 w-[200px] bg-splash rounded-md'
        >
          <Text className='font-bold text-white text-lg tracking-widest'>Let's Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
