import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {Images} from '../../theme';
import styles from './style';

const Product = () => {
  return (
    <ImageBackground source={Images.icBgPicture} style={styles.bg_img}>
      <Text style={styles.txt}> Our Product</Text>
      <View>
        <Image source={Images.icP} style={styles.banner} />
      </View>
      <View>
        <View style={styles.Container}>
          <Image source={Images.icF} style={styles.banner1} />
          <Image source={Images.icE} style={styles.banner1} />
          <Image source={Images.icA} style={styles.banner1} />
        </View>
        <View style={styles.Container}>
          <Image source={Images.icD} style={styles.banner1} />
          <Image source={Images.icB} style={styles.banner1} />
          <Image source={Images.icC} style={styles.banner1} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Product;
