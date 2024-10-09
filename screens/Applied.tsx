import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'
import TabViewExample from '../components/Tabview'
import MyComponent from '../components/Mycomponent'
import ProfilePage from '../components/Profilescreen'
 
 

const Applied = () => {
  return (
    <View className='flex-1'>
      <Text style={styles.quicksandRegular}>Applied</Text>
      
        <ProfilePage/>
     
    </View>
  )
}



const styles = StyleSheet.create({
    quicksandRegular: {
        fontFamily: 'OpenSans_Condensed-Bold',
        fontSize: 20,
      }
})

export default Applied