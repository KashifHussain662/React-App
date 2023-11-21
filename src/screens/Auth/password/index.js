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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  Input: {
    width: 60,
    height: 60,
    borderWidth: 2,
    borderColor: 'black',
    margin: 15,
    borderRadius: 15,
    backgroundColor: 'white',
    fontSize: 25,
    color: 'black',
    fontWeight: '900',
    textAlign: 'center',
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

export default Password;
