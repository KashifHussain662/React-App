import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {Images} from '../../../theme';

const AccountCreated = ({navigation}) => {
  return (
    <ImageBackground
      source={Images.icHomeBg}
      style={{width: '100%', height: '100%'}}>
      <View style={styles.container}>
        <Text style={styles.txt1}>Congratulation!</Text>
        <TouchableOpacity style={styles.btn}>
          <Text onPress={() => navigation.navigate('Home')} style={styles.txt}>
            Account Created
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    fontWeight: '900',
  },
  txt1: {
    color: 'white',
    marginBottom: 50,
    fontSize: 50,
    fontWeight: '900',
  },
  btn: {
    height: 40,
    paddingHorizontal: 80,
    backgroundColor: 'yellow',
    borderRadius: 15,
    justifyContent: 'center',
  },
});

export default AccountCreated;
