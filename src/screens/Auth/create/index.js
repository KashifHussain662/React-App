import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {Images} from '../../../theme';
import styles from './style';

const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={Images.icBgPicture} style={{height: '100%'}}>
        <View style={styles.container}>
          <Image
            source={Images.icWine}
            style={{width: 350, height: 100, marginBottom: 40}}
          />

          <View
            style={{
              marginTop: 30,
              alignItems: 'center',
              // backgroundColor: '#000000',
              padding: 25,
              borderRadius: 15,
            }}>
            <Text style={styles.txt}>CreateAccount</Text>

            {/* phone number field */}
            <View>
              <Text style={styles.txt1}>Phone Number</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Phone Number"
              />
            </View>
            {/* password field */}
            <View>
              <Text style={styles.txt1}>Password</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Password"
              />
            </View>
            {/* conform Password */}
            <View>
              <Text style={styles.txt1}>Confrom Password</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="ReEnter Your Password"
              />
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Password')}>
            <Text style={styles.txt2}>Next</Text>
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

export default CreateAccount;
