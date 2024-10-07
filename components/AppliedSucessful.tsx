import { View, Text } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const Appliedsucessful = () => {

    const navigation:any = useNavigation();


    useEffect(() => {
        
    
         
        setTimeout(() => {
          navigation.replace('bottomtabs');
        }, 2500);
      }, []);
  return (
    <View className='flex-1 justify-center'>
        <View className='flex items-center'>
            <Text className='text-2xl font-bold text-green-600'>Application Submited</Text>
        </View>
        <LottieView
        source={require('../assets/applied.json')}
        autoPlay
        loop
        style={{ height: 300 }} 
      />
    </View>
  )
}

export default Appliedsucessful