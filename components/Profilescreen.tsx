import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const ProfilePage = () => {
  const navigation: any = useNavigation();

  // State to handle the edit mode for each section
  const [isEditingSummary, setIsEditingSummary] = useState(false);
  const [isEditingSkills, setIsEditingSkills] = useState(false);
  const [isEditingExperience, setIsEditingExperience] = useState(false);
  const [isEditingEducation, setIsEditingEducation] = useState(false);
  const [isEditingProfile, setIsEditingProfile] = useState(false); // New state for profile editing

  // State to store profile data
  const [profileSummary, setProfileSummary] = useState(
    'Passionate software developer with 3 years of experience in full-stack development. Expertise in React, Node.js, and building scalable web and mobile applications.'
  );
  const [name, setName] = useState('John Doe'); // New state for name
  const [jobTitle, setJobTitle] = useState('Software Developer'); // New state for job title
  const [location, setLocation] = useState('Bangalore, India'); // New state for location
  const [skills, setSkills] = useState(['React', 'Node.js', 'JavaScript', 'MongoDB', 'AWS']);
  const [experience, setExperience] = useState([
    {
      company: 'Tech Solutions',
      role: 'Software Developer',
      duration: 'Jan 2021 - Present',
      description: 'Developed and maintained applications using React and Node.js. Worked closely with the product team to deliver features.'
    },
    {
      company: 'WebDev Studio',
      role: 'Junior Developer',
      duration: 'Jul 2018 - Dec 2020',
      description: 'Assisted in building responsive websites and improving frontend performance using JavaScript and HTML/CSS.'
    }
  ]);
  const [education, setEducation] = useState({
    degree: 'B.Tech in Computer Science',
    institution: 'XYZ University',
    duration: '2014 - 2018'
  });

  // Handler to toggle edit mode
  const toggleEdit = (section: string) => {
    switch (section) {
      case 'summary':
        setIsEditingSummary(!isEditingSummary);
        break;
      case 'skills':
        setIsEditingSkills(!isEditingSkills);
        break;
      case 'experience':
        setIsEditingExperience(!isEditingExperience);
        break;
      case 'education':
        setIsEditingEducation(!isEditingEducation);
        break;
      case 'profile':
        setIsEditingProfile(!isEditingProfile); // Toggle profile editing
        break;
    }
  };

  // Save Handler
  const handleSave = () => {
    // Implement your save logic here (e.g., send to the server)
    console.log('Saved changes:', {
      profileSummary,
      name,
      jobTitle,
      location,
      skills,
      experience,
      education
    });

    // Reset all edit modes after saving
    setIsEditingSummary(false);
    setIsEditingSkills(false);
    setIsEditingExperience(false);
    setIsEditingEducation(false);
    setIsEditingProfile(false);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header Section */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM='
          }} // Replace with actual profile image URL
          style={styles.profileImage}
        />
        <View style={styles.profileDetails}>
          {isEditingProfile ? (
            <>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Name"
              />
              <TextInput
                style={styles.input}
                value={jobTitle}
                onChangeText={setJobTitle}
                placeholder="Job Title"
              />
              <TextInput
                style={styles.input}
                value={location}
                onChangeText={setLocation}
                placeholder="Location"
              />
            </>
          ) : (
            <>
              <Text style={styles.name}>{name}</Text>
              <Text style={styles.jobTitle}>{jobTitle}</Text>
              <Text style={styles.location}>{location}</Text>
            </>
          )}
        </View>
        <TouchableOpacity style={styles.editIcon} onPress={() => toggleEdit('profile')}>
          <Ionicons name="pencil-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>

      {/* Section: Profile Summary */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Profile Summary</Text>
          <TouchableOpacity onPress={() => toggleEdit('summary')}>
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {isEditingSummary ? (
          <TextInput
            style={styles.input}
            value={profileSummary}
            onChangeText={setProfileSummary}
            multiline
          />
        ) : (
          <Text style={styles.sectionContent}>{profileSummary}</Text>
        )}
      </View>

      {/* Section: Key Skills */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Key Skills</Text>
          <TouchableOpacity onPress={() => toggleEdit('skills')}>
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {isEditingSkills ? (
          <TextInput
            style={styles.input}
            value={skills.join(', ')}
            onChangeText={text => setSkills(text.split(', '))}
          />
        ) : (
          <View style={styles.skillsContainer}>
            {skills.map(skill => (
              <SkillChip key={skill} skill={skill} />
            ))}
          </View>
        )}
      </View>

      {/* Section: Work Experience */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Work Experience</Text>
          <TouchableOpacity onPress={() => toggleEdit('experience')}>
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {experience.map((exp, index) => (
          <WorkExperience
            key={index}
            company={exp.company}
            role={exp.role}
            duration={exp.duration}
            description={exp.description}
          />
        ))}
      </View>

      {/* Section: Education */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Education</Text>
          <TouchableOpacity onPress={() => toggleEdit('education')}>
            <Ionicons name="pencil-outline" size={20} color="black" />
          </TouchableOpacity>
        </View>
        {isEditingEducation ? (
          <TextInput
            style={styles.input}
            value={education.degree}
            onChangeText={degree => setEducation({ ...education, degree })}
          />
        ) : (
          <EducationItem
            degree={education.degree}
            institution={education.institution}
            duration={education.duration}
          />
        )}
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Skill Chip Component
const SkillChip = ({ skill }: any) => (
  <View style={styles.skillChip}>
    <Text style={styles.skillText}>{skill}</Text>
  </View>
);

// Work Experience Component
const WorkExperience = ({ company, role, duration, description }: any) => (
  <View style={styles.experienceItem}>
    <Text style={styles.companyName}>{company}</Text>
    <Text style={styles.role}>{role}</Text>
    <Text style={styles.duration}>{duration}</Text>
    <Text style={styles.description}>{description}</Text>
  </View>
);

// Education Component
const EducationItem = ({ degree, institution, duration }: any) => (
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
    padding: 10,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  profileDetails: {
    flex: 1,
  },
  name: {
    fontSize: 18,
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
  editIcon: {
    marginLeft: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  sectionContent: {
    fontSize: 14,
    color: '#333',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillChip: {
    backgroundColor: '#e0e0e0',
    padding: 8,
    borderRadius: 20,
    marginRight: 10,
    marginBottom: 10,
  },
  skillText: {
    fontSize: 14,
    color: '#333',
  },
  experienceItem: {
    marginBottom: 15,
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
    color: '#333',
  },
  educationItem: {
    marginBottom: 15,
  },
  degree: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  institution: {
    fontSize: 14,
    color: '#666',
  },
  saveButton: {
    backgroundColor: '#3498db',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    margin: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default ProfilePage;
