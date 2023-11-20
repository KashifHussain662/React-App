//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import Home from '../home';
import {Images} from '../../theme';

// create a component
const Wellcome = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={Images.icBgPicture}
        style={{width: '100%', height: '100%'}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={Images.icLogo}
            style={{width: '80%', height: '40%', marginTop: 50}}
          />
          <Text
            style={{
              fontWeight: '900',
              fontSize: 30,
              color: 'white',
              marginTop: 50,
            }}>
            Wellcome
          </Text>
          {/* </View> */}
          <View style={{justifyContent: 'space-between', alignItems: 'center'}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                color: 'white',
                marginTop: 50,
                fontStyle: 'italic',
              }}>
              {`Please first you Registeration \nPlease first you Registeration \nPlease first you Registeration \nPlease first you Registeration \n`}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.btn}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 19,
                  color: 'red',
                  margin: 10,
                  fontStyle: 'italic',
                }}>
                Register
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    paddingHorizontal: 60,
    backgroundColor: 'yellow',
    width: '80%',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 50,
  },
});

//make this component available to the app
export default Wellcome;
