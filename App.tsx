import { View, Text, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { GooglesigninContext } from './context/GooglesigninContext';
import { NavigationContainer } from '@react-navigation/native';
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
import Selectform from './components/Mycomponent';
import { GoogleUser } from './models/googleusers.model';
import { useNavigation } from '@react-navigation/native';

const App = () => {
  const Stack = createNativeStackNavigator();
  

  const [user, setUser] = useState<GoogleUser | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "1022890447446-klui736utmdu8i95kl5dnl0vc0fhq4ba.apps.googleusercontent.com",
      offlineAccess: false,
      scopes: ['profile', 'email'],
    });
  }, []);

  

  const GoogleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("User Info:", userInfo);
      
       
      return userInfo;
    } catch (error) {
      console.error('Google Sign-In error:', error);
      throw error;
    }
  };

 

 

  return (
    <View className="flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#7F265B"></StatusBar>
      <GooglesigninContext.Provider value={{ user, setUser,GoogleLogin,setError,setLoading, }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='splash'>
            <Stack.Screen name='splash' component={AnimatedSplashScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
            <Stack.Screen name='signup' component={Signupscreen} options={{ headerShown: false }} />
            <Stack.Screen name='bottomtabs' component={Bottomtabs} options={{ headerShown: false }} />
            <Stack.Screen name='otpscreen' component={OtpScreen} options={{ headerShown: false }} />
            <Stack.Screen name='Loginsucessful' component={Loginsucessful} options={{ headerShown: false }} />
            <Stack.Screen name='Applyform' component={Applyform} />
            <Stack.Screen name='AppliedSucess' component={Appliedsucessful} options={{ headerShown: false }} />
            <Stack.Screen name='JobDetail' component={JobDetailScreen} />
            <Stack.Screen name='SelectForm' component={Selectform} />
          </Stack.Navigator>
        </NavigationContainer>
      </GooglesigninContext.Provider>
    </View>
  );
};

export default App;
