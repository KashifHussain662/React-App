import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const OTPInput = ({length = 4}) => {
  const [otp, setOtp] = useState(Array(length).fill(''));

  const handleChange = (value, index) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // You can perform additional actions here, such as moving focus to the next input
  };

  return (
    <View style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          maxLength={1}
          keyboardType="numeric"
          value={digit}
          onChangeText={value => handleChange(value, index)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    width: 50,
    height: 50,
    borderColor: 'black',
    margin: 15,
    borderRadius: 12,
    backgroundColor: 'white',
    fontSize: 25,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
  },
});

export default OTPInput;
