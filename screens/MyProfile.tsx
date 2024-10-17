import React, { useState, useCallback,useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Button, ScrollView, Alert,ToastAndroid,Pressable,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DocumentPicker from 'react-native-document-picker';
import { GooglesigninContext } from '../context/GooglesigninContext';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';


const MyProfile = () => {
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('123-456-7890');
  const [skills, setSkills] = useState('React, Node, MongoDB');
  const [fileResponse, setFileResponse] = useState([]);


  const {setUser,user}:any = useContext(GooglesigninContext)

  console.log("jkashdkjahsjdh",user)

  const navigation:any = useNavigation()

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response: any = await DocumentPicker.pick({
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  const [isEditing, setIsEditing] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    skills: false,
  });

  const toggleEdit = (field: any) => {
    setIsEditing({ ...isEditing, [field]: !isEditing[field] });
  };

  const handleSave = () => {
    
    setIsEditing({
      firstName: false,
      lastName: false,
      email: false,
      phone: false,
      skills: false,
    });
    ToastAndroid.show('Profile Updated !', ToastAndroid.LONG),ToastAndroid.TOP;
  };

  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUser(null);
      navigation.navigate('Login');
       // Clear user on sign-out
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* First Name */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>First Name: </Text>
        {isEditing.firstName ? (
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="Enter First Name"
          />
        ) : (
          <Text style={styles.textValue}>{firstName}</Text>
        )}
        <TouchableOpacity onPress={() => toggleEdit('firstName')}>
          <Icon name="edit" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Last Name */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Last Name: </Text>
        {isEditing.lastName ? (
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Enter Last Name"
          />
        ) : (
          <Text style={styles.textValue}>{lastName}</Text>
        )}
        <TouchableOpacity onPress={() => toggleEdit('lastName')}>
          <Icon name="edit" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Email */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Email: </Text>
        {isEditing.email ? (
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            placeholder="Enter Email"
          />
        ) : (
          <Text style={styles.textValue}>{email}</Text>
        )}
        <TouchableOpacity onPress={() => toggleEdit('email')}>
          <Icon name="edit" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Phone */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Phone: </Text>
        {isEditing.phone ? (
          <TextInput
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
            keyboardType="phone-pad"
            placeholder="Enter Phone Number"
          />
        ) : (
          <Text style={styles.textValue}>{phone}</Text>
        )}
        <TouchableOpacity onPress={() => toggleEdit('phone')}>
          <Icon name="edit" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Skills */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Skills: </Text>
        {isEditing.skills ? (
          <TextInput
            style={styles.input}
            value={skills}
            onChangeText={setSkills}
            placeholder="Enter Skills"
          />
        ) : (
          <Text style={styles.textValue}>{skills}</Text>
        )}
        <TouchableOpacity onPress={() => toggleEdit('skills')}>
          <Icon name="edit" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      {/* Upload Resume */}
      <View style={styles.inputRow}>
        <Text style={styles.label}>Resume: </Text>
        <Button title="Upload Resume (PDF)" onPress={handleDocumentSelection} />
      </View>
      

       {user && (
        <>
          <View>
            <Text>{user.email}</Text>
          </View>
          <View>
            <Text>{user.name}</Text>
          </View>
        </>
      )}

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton}>
        <Button title="Save" onPress={handleSave} color="#6b1d5c"/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.saveButton}>
        <Button title="signout" onPress={signOut} color="#6b1d5c"/>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#333',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 6,
    fontSize: 16,
    backgroundColor: '#f4f4f4',
  },
  textValue: {
    flex: 2,
    fontSize: 16,
    color: '#333',
  },
  saveButton: {
    marginTop: 20,
    padding: 15,
  },
});

export default MyProfile;
