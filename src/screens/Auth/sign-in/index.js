import React, {Component} from 'react';
import {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Images} from '../../../theme';
import CreateAccount from '../create';
import images from '../../../theme/images';
import styles from './style';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView>
      <ImageBackground
        source={images.icBgPicture}
        style={{height: '100%', width: '100%'}}>
        <View style={styles.container}>
          <View>
            <Image source={Images.icPepsiLogo} style={styles.logo} />
          </View>
          <View style={styles.form}>
            <Text style={styles.txt}>sign-in</Text>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={email => setEmail(email)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
              />
            </View>
            <TouchableOpacity>
              <Text
                style={styles.forgot_button}
                onPress={() => navigation.navigate('ForgotPassword')}>
                Forgot Password?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => navigation.navigate('Tabs')}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <Text style={styles.txt1}>
              don't have a account?
              <Text
                style={styles.txt2}
                onPress={() => navigation.navigate('CreateAccount')}>
                SignUp
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignIn;
