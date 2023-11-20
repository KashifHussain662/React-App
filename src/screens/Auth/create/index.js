import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import {Images} from '../../../theme';

const CreateAccount = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image
          source={Images.icWine}
          style={{width: 350, height: 100, marginBottom: 40}}
        />

        <View style={{marginTop: 30}}>
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
        <TouchableOpacity style={styles.btn}>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  txt: {
    color: 'black',
    fontWeight: '900',
    fontSize: 30,
    marginBottom: 50,
  },
  txt1: {
    fontSize: 15,
    color: 'black',
  },
  TextInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    width: 350,
    color: 'black',
    fontSize: 15,
    backgroundColor: 'rgb(120, 120, 120)',
    borderRadius: 12,
    marginBottom: 20,
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
  txt3: {
    color: 'black',
  },
  txt4: {
    color: 'blue',
  },
});

export default CreateAccount;
