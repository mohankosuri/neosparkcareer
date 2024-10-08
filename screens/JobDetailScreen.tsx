import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useRoute, useNavigation } from '@react-navigation/native';

const JobDetailScreen = () => {
  const route = useRoute();
  const navigation:any = useNavigation();
  const { job }:any = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.jobTitle}>{job.role}</Text>
        <Text style={styles.postDate}>Posted on: {job.postedOn}</Text>
      </View>
      

      <View style={styles.details}>

      <View style={styles.section}>
          <Text style={styles.sectionTitle}>Job Description :</Text>
          <Text style={styles.description}>
             {job.description}
          </Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="briefcase-outline" size={20} color="#6a1b9a" />
          <Text style={styles.detailText}>{job.role}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="time-outline" size={20} color="#6a1b9a" />
          <Text style={styles.detailText}>Experience: {job.experience}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="cash-outline" size={20} color="#6a1b9a" />
          <Text style={styles.detailText}>Package: {job.package}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="location-outline" size={20} color="#6a1b9a" />
          <Text style={styles.detailText}>Location: {job.location}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="calendar-outline" size={20} color="#6a1b9a" />
          <Text style={styles.detailText}>Opportunity Type: {job.OpportunityType}</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Skills:</Text>
        <View style={styles.chipsContainer}>
          {job.skills.map((skill:any, index:any) => (
            <Text key={index} style={styles.chip}>
              {skill}
            </Text>
          ))}
        </View>
      </View>

      <View style={styles.applyButtonContainer}>
        <TouchableOpacity style={styles.applyButton} onPress={() => navigation.navigate('Applyform')}>
          <Text style={styles.applyButtonText}>Apply</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    
  },
  header: {
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
    fontSize: 16,
    color: '#6a1b9a',
    marginBottom: 20,
  },
  details: {
    marginBottom: 20,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailText: {
    fontSize: 16,
    marginLeft: 5,
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
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom:70
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
  description: {
    fontSize: 16,
    color: '#6a1b9a',
  },
});

export default JobDetailScreen;
