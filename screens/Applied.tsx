import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import LoginScreen from './LoginScreen'

const Applied = () => {
  return (
    <View className='flex-1'>
      <Text style={styles.quicksandRegular}>Applied</Text>
   
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