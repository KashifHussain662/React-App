//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Images} from '../../../theme';
import styles from './style';
import {OTPInput} from '../../../components';

// create a component
const Verify = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={Images.icBgPicture} style={{height: '100%'}}>
        <View style={styles.container}>
          <View style={{flexDirection: 'row', padding: 20}}>
            <OTPInput />
          </View>
          <Image source={Images.icVerify} />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Personal-Details')}>
            <Text style={styles.txt2}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Verify;
