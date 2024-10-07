import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const JobCard = () => {
  const skills = ['.net', 'Core Java', 'Cloud', 'Mango DB', 'Next Js', 'React Js', 'React Native', 'Node Js', 'CSS', 'Dev Apps', 'Java'];
  const documents = ['Description Doc', 'Skill Set Doc'];
  const navigation:any = useNavigation()
  return (
    <View style={{  backgroundColor: '#ffffff', flexGrow: 1,paddingBottom:10 }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text style={styles.jobTitle}>Web Developer</Text>
            <Text style={styles.postDate}>Posted on: 15-01-2024</Text>
          </View>
          
        </View>
        <View className='mb-4'>
           <Text style={styles.company}>Wipro Technologies Pvt Ltd</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Description :</Text>
          <Text style={styles.description}>
            As a Technical Lead - Data Build Tool, you will be a part of an Agile team to build healthcare applications and implement new features while adhering to the best coding development standards.
          </Text>
        </View>

        <View style={styles.details}>
          <View style={styles.detailItem}>
            <Ionicons name="briefcase-outline" size={20} color="#6a1b9a" />
            <Text style={styles.detailText}>Full Stack Developer</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="time-outline" size={20} color="#6a1b9a" />
            <Text style={styles.detailText}>Experience 5+yrs</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="cash-outline" size={20} color="#6a1b9a" />
            <Text style={styles.detailText}>4.5 LPA</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="location-outline" size={20} color="#6a1b9a" />
            <Text style={styles.detailText}>Bangalore</Text>
          </View>
          <View style={styles.detailItem}>
            <Ionicons name="calendar-outline" size={20} color="#6a1b9a" />
            <Text style={styles.detailText}>Opportunity Type: Full Time</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Key Skills :</Text>
          <View style={styles.chipsContainer}>
            {skills.map((skill, index) => (
              <Text key={index} style={styles.chip}>
                {skill}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Documents :</Text>
          <View style={styles.chipsContainer}>
            {documents.map((doc, index) => (
              <Text key={index} style={styles.chip}>
                {doc}
              </Text>
            ))}
          </View>
        </View>

        <View style={styles.applyButtonContainer}>
          <TouchableOpacity style={styles.applyButton} onPress={()=>navigation.navigate('Applyform')}>
            <Text style={styles.applyButtonText}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    
  },
  header: {
    flexDirection: 'row' as const,
    justifyContent: 'space-between' as const,
    alignItems: 'center' as const,
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#6a1b9a',
  },
  postDate: {
    fontSize: 14,
    color: '#6a1b9a',
  },
  company: {
    fontSize: 14,
    color: '#6a1b9a',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#6a1b9a',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#6a1b9a',
  },
  details: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row' as const,
    alignItems: 'center' as const,
    marginRight: 20,
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    color: '#6a1b9a',
    marginLeft: 5,
  },
  chipsContainer: {
    flexDirection: 'row' as const,
    flexWrap: 'wrap' as const,
  },
  chip: {
    borderColor: '#6a1b9a',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#6a1b9a',
    fontSize: 14,
    marginRight: 10,
    marginTop: 5,
  },
  applyButtonContainer: {
    flexDirection: 'row' as const,
    justifyContent: 'flex-end' as const,
  },
  applyButton: {
    backgroundColor: '#6a1b9a',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  applyButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default JobCard;
