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
} from 'react-native';
import {Images} from '../../../theme';
import styles from './style';

// create a component
const Password = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={Images.icBgPicture} style={{height: '100%'}}>
        <View style={styles.container}>
          <Text style={{fontSize: 23, fontWeight: '900', color: 'white'}}>
            Enter OTP Code
          </Text>
          <View style={{flexDirection: 'row', padding: 20}}>
            <TextInput style={styles.Input} />
            <TextInput style={styles.Input} />
            <TextInput style={styles.Input} />
            <TextInput style={styles.Input} />
          </View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate('Varify')}>
            <Text style={styles.txt2}>Varify OTP</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Password;
