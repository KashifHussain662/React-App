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
  TextInput,
  ScrollView,
} from 'react-native';
import {Images} from '../../theme';
import AutoScroll from '@homielab/react-native-auto-scroll';

// create a component
const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={Images.icHomeBg}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        <View style={styles.TextInput}>
          <TextInput placeholder="search here" style={styles.InputView} />
          <Image source={Images.icSearch} />
        </View>
        <Text
          style={{
            fontWeight: '900',
            marginTop: 30,
            fontSize: 25,
          }}>
          New Addition
        </Text>
        <AutoScroll style={{flexDirection: 'row'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              margin: 30,
            }}>
            <View>
              <Image
                // delay={0}
                duration={10}
                source={Images.icBanner3}
                style={{margin: 12}}
              />
            </View>
            <View>
              <Image
                // delay={0}
                duration={10}
                source={Images.icBanner2}
                style={{margin: 12}}
              />
            </View>
            <View>
              <Image
                // delay={1000}
                duration={10}
                source={Images.icBanner1}
                style={{margin: 12}}
              />
            </View>
            <View>
              <Image
                // delay={0}
                duration={10}
                source={Images.icBanner}
                style={{margin: 12}}
              />
            </View>
          </View>
        </AutoScroll>
        <View style={{height: 250, justifyContent: 'space-evenly'}}>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: 'black',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '900',
              }}>
              Nitro Pepsi
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 7,
              }}>
              Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
              nitrogen-infused version of Pepsi. The addition of nitrogen gas,
              instead of the usual carbon dioxide, creates a smooth texture.
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: 'black',
              padding: 10,
              borderRadius: 10,
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                fontWeight: '900',
              }}>
              Nitro Pepsi
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontWeight: '700',
                marginTop: 7,
              }}>
              Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
              nitrogen-infused version of Pepsi. The addition of nitrogen gas,
              instead of the usual carbon dioxide, creates a smooth texture.
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  TextInput: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '90%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    marginTop: 50,
    padding: 5,
    backgroundColor: 'silver',
    fontSize: 15,
    color: 'balck',
  },
});

//make this component available to the app
export default Home;
