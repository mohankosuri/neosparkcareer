import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Applyform from '../screens/Applyform';
import MyProfile from '../screens/MyProfile';

const Selectform = () => {
  const [selectedOption, setSelectedOption] = useState('myself'); // Default selection is 'myself'

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select an Option:</Text>
      
      <View style={styles.radioContainer}>
        {/* Option: Myself */}
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleOptionChange('myself')}
        >
          <View style={styles.radioCircle}>
            {selectedOption === 'myself' && <View style={styles.radioInnerCircle} />}
          </View>
          <Text style={styles.radioLabel}>Myself</Text>
        </TouchableOpacity>
        
        {/* Option: Others */}
        <TouchableOpacity
          style={styles.radioButton}
          onPress={() => handleOptionChange('others')}
        >
          <View style={styles.radioCircle}>
            {selectedOption === 'others' && <View style={styles.radioInnerCircle} />}
          </View>
          <Text style={styles.radioLabel}>Others</Text>
        </TouchableOpacity>
      </View>
      
      {/* Conditionally render content based on selected option */}
      {selectedOption === 'myself' && (
        <View className='flex-1'>
           <Applyform/>
          {/* Add more content for 'myself' if needed */}
        </View>
      )}
      {selectedOption === 'others' && (
        <View style={styles.content}>
           <MyProfile/>
          {/* Add more content for 'others' if needed */}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  radioInnerCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#000',
  },
  radioLabel: {
    fontSize: 16,
  },
  content: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  contentText: {
    fontSize: 18,
  },
});

export default Selectform;
