import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 
import Careers from './Careers';
import Applied from './Applied';
import MyProfile from './MyProfile';

 


const Bottomtabs = () => {

    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName: any;

        if (route.name === 'Careers') {
          iconName = focused ? 'search-location' : 'search';
        } else if (route.name === 'Applied') {
          iconName = focused ? 'clipboard-check' : 'clipboard-check';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'user-circle' : 'user-circle';
        } else if (route.name === 'Alerts') {
          iconName = focused ? 'bell' : 'bell';
        } else if (route.name === 'Saves') {
          iconName = focused ? 'heart' : 'heart';
        }

        const animatedStyle = useAnimatedStyle(() => {
          return {
            transform: [{ scale: withSpring(focused ? 1.5 : 1) }],
          };
        });

        return (
          <Animated.View style={animatedStyle}>
            <FontAwesome5 name={iconName} size={20} color={color} />
          </Animated.View>
        );
      },
      tabBarActiveTintColor: '#7F265B',
      tabBarInactiveTintColor: '#144734',
      tabBarHideOnKeyboard: true,
      tabBarStyle: {
        height: 70,
        paddingHorizontal: 10,
        paddingBottom: 5,
        paddingTop: 10,
        backgroundColor: 'white',
        position: 'absolute',
        margin: 10,
        borderRadius: 10,
      },
      tabBarLabelStyle: {
        fontSize: 10,
        paddingBottom: 5,
      },
    })}
  >
    
    <Tab.Screen
      name="Careers"
      component={Careers}
      options={{ headerShown: false }}
    />    

    <Tab.Screen
      name="Profile"
      component={MyProfile}
      options={{ headerShown: false }}
    />
    <Tab.Screen
      name="Applied"
      component={Applied}
      options={{ headerShown: false }}
    />
   
    
  </Tab.Navigator>
  )
}

export default Bottomtabs