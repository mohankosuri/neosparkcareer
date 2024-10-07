import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import JobCard from '../components/JobCard'

const Careers = () => {
  return (
    <ScrollView className='flex-1 flex-col mb-[80px] mx-4 mt-2' showsVerticalScrollIndicator={false}>
        <View className='flex'>
          <JobCard/>
        </View>
        <View className='flex'>
          <JobCard/>
        </View>
     
       
    </ScrollView>
  )
}

export default Careers