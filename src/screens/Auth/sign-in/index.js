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
} from 'react-native';
import {Images} from '../../../theme';
import CreateAccount from '../create';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
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
          <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  logo: {
    width: 200,
    height: 300,
  },
  form: {
    alignItems: 'center',
  },
  txt: {
    color: 'black',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: '900',
  },
  inputView: {
    backgroundColor: 'rgb(120, 120, 120)',
    borderRadius: 10,
    width: '70%',
    height: 55,
    marginBottom: 20,
    alignItems: 'center',
  },
  TextInput: {
    height: 70,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    width: 300,
    color: 'white',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'black',
  },
  loginBtn: {
    width: 80,
    borderRadius: 10,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    backgroundColor: '#FF1493',
  },
  txt1: {
    color: 'black',
    marginBottom: 50,
  },
  txt2: {
    color: 'red',
  },
});

export default SignIn;
