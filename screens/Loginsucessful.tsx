import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Loginsucessful = () => {

    const navigation:any = useNavigation();


    useEffect(() => {
        
    
         
        setTimeout(() => {
          navigation.replace('bottomtabs');
        }, 2500);
      }, []);
  return (
    <View className='flex-1 justify-center'>
        <View className='flex items-center'>
            <Text className='text-2xl font-bold text-green-600'>Login Successful</Text>
        </View>
        <LottieView
        source={require('../assets/sucess.json')}
        autoPlay
        loop
        style={{ height: 300 }} // Adjust height as needed
      />
    </View>
  )
}

export default Loginsucessful