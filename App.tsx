import { View, Text ,StatusBar } from 'react-native'
import React, { useEffect,useState } from 'react'
import { GoogleSignin, statusCodes ,GoogleSigninButton} from '@react-native-google-signin/google-signin';
 import { GooglesigninContext } from './context/GooglesigninContext';
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
import Selectform from './components/Mycomponent';
import { GoogleUser } from './models/googleusers.model';

 
 





const App = () => {

 const stack=createNativeStackNavigator()

 const [user, setUser] = useState<GoogleUser[]>();
 const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);


  

useEffect(()=>{
  GoogleSignin.configure({
    webClientId: "921754705350-r860uflg4d87dqqndv45j1nfjlsbqu5n.apps.googleusercontent.com",
    offlineAccess: false,
  
    
    scopes: ['profile', 'email'],
  
  });
},[])

const GoogleLogin = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log(userInfo)
    return userInfo;

   
  } catch (error) {
    console.error('Google Sign-In error:', error);
    throw error;
  }
   
};



const handleGoogleLogin = async () => {
  setLoading(true);
  try {
    const response = await GoogleLogin();
    const { idToken, user }:any = response;  // Check response structure
    console.log("Google User Info:", user);
    
    // Set user details to state
    setUser(user); // This should contain user details like email, name, etc.
    
  } catch (apiError:any) {
    console.error('Error during Google Sign-In:', apiError);
    setError(apiError.message || 'Something went wrong during login');
  } finally {
    setLoading(false);
  }
};




 
 

 

const signOut = async () => {
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    setUser([])
    
    
  } catch (error) {
    console.error(error);
  }
};
 


  return (
    <View className="flex-1">
     <StatusBar barStyle="light-content" backgroundColor="#7F265B"></StatusBar>
     <GooglesigninContext.Provider value={{signOut,user,setUser,handleGoogleLogin,GoogleLogin}}>
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
         <stack.Screen name='SelectForm' component={Selectform} ></stack.Screen>
         
       </stack.Navigator>
     </NavigationContainer>
     </GooglesigninContext.Provider> 
    </View>
  )
}

export default App