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
import styles from './style';

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
            onPress={() => navigation.navigate('Tabs')}>
            <Text style={styles.txt2}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles

//make this component available to the app
export default ForgotPassword;
