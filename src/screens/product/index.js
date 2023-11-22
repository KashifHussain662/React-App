import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import {Images} from '../../theme';

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

const styles = StyleSheet.create({
  bg_img: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  txt: {
    fontSize: 25,
    color: 'white',
    fontWeight: '900',
    marginTop: 20,
  },
  banner: {
    width: 330,
    height: 320,
    margin: 20,
    borderRadius: 12,
  },
  Container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  banner1: {
    width: 120,
    height: 120,
    margin: 10,
    borderRadius: 10,
  },
});

export default Product;
