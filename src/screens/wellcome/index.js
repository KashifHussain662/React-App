//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {Images} from '../../theme';

// create a component
const Wellcome = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={Images.icBg1Picture}
        style={{width: '100%', height: '100%'}}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-evenly',
            height: '100%',
          }}>
          <View>
            <Image source={Images.icLogo} />
          </View>
          <View style={styles.Container}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 30,
                color: 'white',
              }}>
              Wellcome
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccount')}
              style={styles.btn}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 19,
                  color: 'red',
                  margin: 10,
                  fontStyle: 'italic',
                }}>
                Let's Start
              </Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '900',
                textDecorationLine: 'underline',
              }}
              onPress={() => navigation.navigate('SignIn')}>
              SignIn
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    paddingHorizontal: 70,
    backgroundColor: 'yellow',
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
  },
});

//make this component available to the app
export default Wellcome;
