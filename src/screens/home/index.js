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
const Wellcome = ({navigation}) => {
  return (
    <SafeAreaView>
      <ImageBackground
        source={Images.icHomeBg}
        style={{
          width: '100%',
          height: '100%',
          alignItems: 'center',
        }}>
        <View style={{width: '80%'}}>
          <TextInput placeholder="search here" style={styles.TextInput} />
        </View>

        <AutoScroll>
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
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  TextInput: {
    // width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 100,
    padding: 13,
    backgroundColor: 'silver',
    color: 'black',
  },
});

//make this component available to the app
export default Wellcome;
