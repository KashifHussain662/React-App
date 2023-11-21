//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

import {Images} from '../../../theme';

// create a component
const ForgotPassword = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={Images.icBgPicture} style={{height: '100%'}}>
        <View style={styles.container}>
          <View
            style={{
              marginTop: 30,
              alignItems: 'center',
              // backgroundColor: '#000000',
              padding: 25,
              borderRadius: 15,
            }}>
            <Text style={styles.txt}>Forgot Password</Text>

            {/* phone number field */}
            <View>
              <Text style={styles.txt1}>current password</Text>
              <TextInput
                style={styles.TextInput}
                // placeholder="Enter Your Current Password"
              />
            </View>
            {/* password field */}
            <View>
              <Text style={styles.txt1}>new password</Text>
              <TextInput
                style={styles.TextInput}
                // placeholder="Enter Your New Password"
              />
            </View>
            {/* conform Password */}
            <View>
              <Text style={styles.txt1}>Re -type new password</Text>
              <TextInput
                style={styles.TextInput}
                // placeholder="Enter Re-type New Password"
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('')}>
            <Text style={styles.txt2}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'white',
    fontWeight: '900',
    fontSize: 30,
    marginBottom: 50,
  },
  txt1: {
    fontSize: 15,
    color: 'white',
  },
  TextInput: {
    borderColor: 'silver',
    borderWidth: 2,
    padding: 15,
    marginTop: 15,
    width: 350,
    color: 'white',
    fontSize: 15,
    backgroundColor: 'rgb(120, 120, 120)',
    borderRadius: 12,
    marginBottom: 20,
  },
  btn: {
    width: 200,
    backgroundColor: 'red',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
    marginBottom: 10,
  },
  txt2: {
    color: 'white',
    fontWeight: '900',
    padding: 15,
  },
});

//make this component available to the app
export default ForgotPassword;
