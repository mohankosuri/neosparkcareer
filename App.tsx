import { View, Text ,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
 
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import AnimatedSplashScreen from './screens/SplashScreen';
import Bottomtabs from './screens/Bottomtabs';
import LoginScreen from './screens/LoginScreen';
import Signupscreen from './screens/Signupscreen';
import OtpScreen from './screens/OtpScreen';
import Loginsucessful from './screens/Loginsucessful';
import Applyform from './screens/Applyform';
import Appliedsucessful from './components/AppliedSucessful';
import JobDetailScreen from './screens/JobDetailScreen';
 
 





const App = () => {

 const stack=createNativeStackNavigator()
 


  return (
    <View className="flex-1">
     <StatusBar barStyle="light-content" backgroundColor="#7F265B"></StatusBar>
     
     <NavigationContainer>
       <stack.Navigator initialRouteName='splash'>
         <stack.Screen name='splash' component={AnimatedSplashScreen} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='Home' component={Home} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='Login' component={LoginScreen} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='signup' component={Signupscreen} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='bottomtabs' component={Bottomtabs} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='otpscreen' component={OtpScreen} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='Loginsucessful' component={Loginsucessful} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='Applyform' component={Applyform} ></stack.Screen>
         <stack.Screen name='AppliedSucess' component={Appliedsucessful} options={{headerShown:false}}></stack.Screen>
         <stack.Screen name='JobDetail' component={JobDetailScreen} ></stack.Screen>
         
       </stack.Navigator>
     </NavigationContainer>
       
    </View>
  )
}

export default App