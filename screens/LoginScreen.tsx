import React,{useContext} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { GooglesigninContext } from '../context/GooglesigninContext';
 


const LoginScreen = () => {

    const navigation:any = useNavigation()

    const {GoogleLogin,setLoading, setError,setUser}: any = useContext(GooglesigninContext);

    const handleGoogleLogin = async () => {
      setLoading(true);
      try {
        const response = await GoogleLogin();
  
        console.log("responsdsd",response)
        const { user }:any = response.data; // Extract user directly
        console.log("Google User Info:", user);
        setUser(user)
  
        if (user) {
          // Navigate to the home screen after successful login
          navigation.navigate('bottomtabs');
        }
  
        // Set user details to context
        // Store user details in the state
  
      } catch (apiError: any) {
        console.error('Error during Google Sign-In:', apiError);
        setError(apiError.message || 'Something went wrong during login');
      } finally {
        setLoading(false);
      }
    };

    
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Login Account <Icon name="person-outline" size={20} />
        </Text>
        
      </View>

      <View style={styles.logo}>
        <Image
          source={require('../assets/careerq.png')}
          style={styles.logoImage}
        />
      </View>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter email i’d"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forget Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={()=>navigation.navigate('otpscreen')}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>Or login with</Text>
        <View style={styles.line} />
      </View>

      <View style={styles.socialButtons}>
        
        <TouchableOpacity style={styles.socialButton}>
          <Image
            source={{ uri: 'https://store-images.s-microsoft.com/image/apps.30616.14374512070697751.fcbc53c2-4843-4c59-aa6a-206ec85835b5.915cc067-8e3d-468b-bc6b-37c7c8d35d93' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton} onPress={handleGoogleLogin}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2702/2702602.png' }}
            style={styles.socialIcon}
          />
        </TouchableOpacity>
      </View>
      

      <TouchableOpacity style={styles.createAccount} onPress={()=>navigation.navigate('signup')}>
        <Text style={styles.createAccountText}>
          Not registered yet?{' '}
          <Text style={styles.createAccountLink}>Create Account</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    marginTop: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 24,
    fontFamily: 'OpenSans_Condensed-ExtraBold',
    
  },
  welcomeText: {
    fontSize: 14,
    color: '#666',
  },
  logo: {
    marginVertical: 20,
  },
  logoImage: {
    width: 250,
    height: 150,
  },
  formContainer: {
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
  },
  forgotPassword: {
    width: '80%',
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    fontSize: 12,
    color: '#666',
  },
  loginButton: {
    backgroundColor: '#6b1d5c',
    width: '80%',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold'
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  dividerText: {
    marginHorizontal: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
  },
  socialButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 50,
    elevation: 4, // Shadow for Android
  },
  socialIcon: {
    width: 44,
    height: 44,
  },
  createAccount: {
    marginTop: 20,
  },
  createAccountText: {
    fontSize: 14,
  },
  createAccountLink: {
    color: '#6b1d5c',
    fontWeight: '700',
  },
});

export default LoginScreen;
