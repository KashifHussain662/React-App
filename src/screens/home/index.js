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
import styles from './style';
import {Images} from '../../theme';
import AutoScroll from '@homielab/react-native-auto-scroll';

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
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
