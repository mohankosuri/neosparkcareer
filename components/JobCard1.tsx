import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const JobCard1 = () => {
  return (
    <View className='flex-1'>
       <TouchableOpacity className='bg-white w-[180px] h-[150px] border shadow-lg' >
            <View>
                <Text className='text-2xl font-bold'>Job Title</Text>
                <Text className='text-lg'>Job Description</Text>
                <Text className='text-lg'>Job Location</Text>

            </View>
       </TouchableOpacity>
    </View>
  )
}

export default JobCard1

const styles = StyleSheet.create({})