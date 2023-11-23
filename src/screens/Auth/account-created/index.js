import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../../../theme';
import Tabs from '../../../routes/tabs';
import styles from './style';

const AccountCreated = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.icHomeBg}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.txt1}>Congratulation!</Text>
        <TouchableOpacity style={styles.btn}>
          <Text onPress={() => navigation.navigate('Tabs')} style={styles.txt}>
            Account Created
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default AccountCreated;
