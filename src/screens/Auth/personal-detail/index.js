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
  Image,
} from 'react-native';
import {Images} from '../../../theme';
import styles from './style';

// create a component
const PersonalDetails = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={Images.icBgPicture} style={{height: '100%'}}>
        <View style={styles.container}>
          <Image
            source={Images.icWine}
            style={{width: 350, height: 100, marginBottom: 40}}
          />
          <View style={styles.form}>
            <Text style={styles.txt}>Add Your Personal Detail</Text>

            <View>
              <Text>Full Name</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Full Name"
              />
            </View>
            <View>
              <Text>Age</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Age"
              />
            </View>
            <View>
              <Text>Token Number</Text>
              <TextInput style={styles.TextInput} placeholder="Enter Number" />
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            // onPress={() => navigation.navigate('Personal-Details')}
          >
            <Text
              style={styles.txt2}
              onPress={() => navigation.navigate('AcoountCreated')}>
              Create Account
            </Text>
          </TouchableOpacity>
          <Text style={styles.txt3}>
            you have a already account?
            <Text
              onPress={() => navigation.navigate('SignIn')}
              style={styles.txt4}>
              SignIn
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default PersonalDetails;
