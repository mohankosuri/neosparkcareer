import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation:any = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=' }} // Replace with actual profile image URL
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.jobTitle}>Software Developer</Text>
          <Text style={styles.location}>Bangalore, India</Text>
        </View>
      </View>

      {/* Section: Profile Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Profile Summary</Text>
        <Text style={styles.sectionContent}>
          Passionate software developer with 3 years of experience in full-stack development. Expertise in React, Node.js, and building scalable web and mobile applications.
        </Text>
      </View>

      {/* Section: Key Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Key Skills</Text>
        <View style={styles.skillsContainer}>
          <SkillChip skill="React" />
          <SkillChip skill="Node.js" />
          <SkillChip skill="JavaScript" />
          <SkillChip skill="MongoDB" />
          <SkillChip skill="AWS" />
        </View>
      </View>

      {/* Section: Work Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Work Experience</Text>
        <WorkExperience
          company="Tech Solutions"
          role="Software Developer"
          duration="Jan 2021 - Present"
          description="Developed and maintained applications using React and Node.js. Worked closely with the product team to deliver features."
        />
        <WorkExperience
          company="WebDev Studio"
          role="Junior Developer"
          duration="Jul 2018 - Dec 2020"
          description="Assisted in building responsive websites and improving frontend performance using JavaScript and HTML/CSS."
        />
      </View>

      {/* Section: Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <EducationItem
          degree="B.Tech in Computer Science"
          institution="XYZ University"
          duration="2014 - 2018"
        />
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        style={styles.editProfileButton}
        onPress={() => navigation.navigate('EditProfile')}
      >
        <Ionicons name="pencil-outline" size={20} color="white" />
        <Text style={styles.editProfileText}>Edit Profile</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Skill Chip Component
const SkillChip = ({ skill }:any) => (
  <View style={styles.skillChip}>
    <Text style={styles.skillText}>{skill}</Text>
  </View>
);

// Work Experience Component
const WorkExperience = ({ company, role, duration, description }:any) => (
  <View style={styles.experienceItem}>
    <Text style={styles.companyName}>{company}</Text>
    <Text style={styles.role}>{role}</Text>
    <Text style={styles.duration}>{duration}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

// Education Component
const EducationItem = ({ degree, institution, duration }:any) => (
  <View style={styles.educationItem}>
    <Text style={styles.degree}>{degree}</Text>
    <Text style={styles.institution}>{institution}</Text>
    <Text style={styles.duration}>{duration}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 20,
    alignItems: 'center',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileDetails: {
    marginLeft: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  jobTitle: {
    fontSize: 16,
    color: '#666',
  },
  location: {
    fontSize: 14,
    color: '#999',
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 14,
    color: '#666',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    backgroundColor: '#d1e7ff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    color: '#007bff',
  },
  experienceItem: {
    marginBottom: 20,
  },
  companyName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  role: {
    fontSize: 14,
    color: '#666',
  },
  duration: {
    fontSize: 12,
    color: '#999',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  educationItem: {
    marginBottom: 20,
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  institution: {
    fontSize: 14,
    color: '#666',
  },
  
  editProfileButton: {
    backgroundColor: '#007bff',
    padding: 15,
    margin: 20,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editProfileText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default ProfilePage;
