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
      <ImageBackground source={Images.icHomeBg} style={styles.bg_img}>
        <View style={styles.TextInput}>
          <TextInput placeholder="Search here" style={styles.InputView} />
          <Image source={Images.icSearch} />
        </View>
        <Text style={styles.add}>New Addition</Text>
        <AutoScroll style={{flexDirection: 'row'}}>
          <View style={styles.banner}>
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
        <ScrollView>
          <View>
            <View style={styles.container}>
              <Text style={styles.ttl}>Nitro Pepsi</Text>
              <Text style={styles.p}>
                Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
                nitrogen-infused version of Pepsi. The addition of nitrogen gas,
                instead of the usual carbon dioxide, creates a smooth texture.
              </Text>
            </View>
            <View style={styles.container}>
              <Text style={styles.ttl}>Nitro Pepsi</Text>
              <Text style={styles.p}>
                Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
                nitrogen-infused version of Pepsi. The addition of nitrogen gas,
                instead of the usual carbon dioxide, creates a smooth texture.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <Text style={styles.ttl}>Nitro Pepsi</Text>
            <Text style={styles.p}>
              Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
              nitrogen-infused version of Pepsi. The addition of nitrogen gas,
              instead of the usual carbon dioxide, creates a smooth texture.
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.ttl}>Nitro Pepsi</Text>
            <Text style={styles.p}>
              Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
              nitrogen-infused version of Pepsi. The addition of nitrogen gas,
              instead of the usual carbon dioxide, creates a smooth texture.
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.ttl}>Nitro Pepsi</Text>
            <Text style={styles.p}>
              Nitro Pepsi is a cola soft drink produced by PepsiCo. It is a
              nitrogen-infused version of Pepsi. The addition of nitrogen gas,
              instead of the usual carbon dioxide, creates a smooth texture.
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  bg_img: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
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
    backgroundColor: '#5d5369',
    fontSize: 15,
    color: 'balck',
  },
  add: {
    fontWeight: '900',
    marginTop: 30,
    fontSize: 25,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: 30,
  },
  container: {
    marginHorizontal: 20,
    backgroundColor: '#3b394f',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  ttl: {
    color: 'white',
    fontSize: 20,
    fontWeight: '900',
  },
  p: {
    color: 'white',
    fontSize: 15,
    fontWeight: '700',
    marginTop: 7,
  },
});

//make this component available to the app
export default Home;
