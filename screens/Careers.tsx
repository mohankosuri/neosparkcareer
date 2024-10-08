import { View, Text,ScrollView,StyleSheet } from 'react-native'
import React from 'react'
import JobCard from '../components/JobCard'
import JobListScreen from '../components/Joblist'

const Careers = () => {
  return (
    <ScrollView className='flex-1 flex-col mb-[80px]  bg-white' showsVerticalScrollIndicator={false}>
      <View className='flex p-2'>
       <Text style={styles.quicksandRegular}>Jobs based on your profile</Text>
      </View>
        <View className='flex'>
          <JobListScreen/>
        </View>
        <View>
          
        </View>
     
       
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  quicksandRegular: {
      fontFamily: 'OpenSans_Condensed-Bold',
      fontSize: 20,
    }
})

export default Careers