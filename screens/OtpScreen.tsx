import React, { useRef, useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const OtpScreen: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const navigation:any = useNavigation()

  const handleChange = (text: string, index: number) => {
    if (isNaN(Number(text))) return; // Ensure only numbers are entered

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Move to next input if a digit is entered
    if (text && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text: string, index: number) => {
    if (text === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    // OTP submission logic
    console.log('OTP entered: ', otp.join(''));
    navigation.navigate('Loginsucessful')
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Enter OTP</Text>
      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={({ nativeEvent }) =>
              nativeEvent.key === 'Backspace' ? handleBackspace(digit, index) : null
            }
            ref={(el) => (inputRefs.current[index] = el)}
            style={styles.otpInput}
            keyboardType="number-pad"
            maxLength={1}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: '600',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    textAlign: 'center',
    fontSize: 24,
    borderRadius: 10,
    marginHorizontal: 5,
    backgroundColor: '#fff',
  },
  submitButton: {
    marginTop: 30,
    backgroundColor: '#6b1d5c',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default OtpScreen;
