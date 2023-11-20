//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Image,
} from 'react-native';
import {Images} from '../../../theme';

// create a component
const PersonalDetails = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground source={Images.icBgPicture} style={{height: '100%'}}>
        <View style={styles.container}>
          <Image
            source={Images.icWine}
            style={{width: 350, height: 100, marginBottom: 40}}
          />
          <View style={styles.form}>
            <Text style={styles.txt}>Add Your Personal Detail</Text>

            <View>
              <Text>Full Name</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Full Name"
              />
            </View>
            <View>
              <Text>Age</Text>
              <TextInput
                style={styles.TextInput}
                placeholder="Enter Your Age"
              />
            </View>
            <View>
              <Text>Token Number</Text>
              <TextInput style={styles.TextInput} placeholder="Enter Number" />
            </View>
          </View>
          <TouchableOpacity
            style={styles.btn}
            // onPress={() => navigation.navigate('Personal-Details')}
          >
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
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  txt: {
    color: 'white',
    fontWeight: '900',
    fontSize: 30,
    marginBottom: 50,
  },
  form: {
    marginTop: 30,
    alignItems: 'center',
  },

  TextInput: {
    borderColor: 'white',
    borderWidth: 1,
    padding: 15,
    marginTop: 15,
    width: 350,
    color: 'white',
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
    // color: 'black',
    color: 'white',
  },
  txt4: {
    color: 'blue',
  },
});

//make this component available to the app
export default PersonalDetails;
