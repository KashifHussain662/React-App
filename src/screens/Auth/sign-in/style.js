import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'yellow',
  },
  logo: {
    width: 200,
    height: 270,
  },
  form: {
    alignItems: 'center',
    marginTop: 100,
  },
  txt: {
    color: 'white',
    fontWeight: '900',
    fontSize: 30,
    marginBottom: 50,
  },
  inputView: {
    backgroundColor: 'rgb(120, 120, 120)',
    borderRadius: 10,
    width: '80%',
    height: 60,
    marginBottom: 25,
    alignItems: 'center',
  },
  TextInput: {
    height: 70,
    flex: 1,
    padding: 10,
    marginLeft: 0,
    width: 350,
    color: 'white',
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: 'white',
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
    color: 'white',
    marginBottom: 50,
  },
  txt2: {
    color: 'red',
  },
});
