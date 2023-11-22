import {Image, View} from 'react-native';
import {Images} from '../../theme';

export let screenOptions = {
  headerShown: true,

  headerTitleStyle: {
    color: '#000',
    fontWeight: '800',
  },
  headerStyle: {
    backgroundColor: 'transparent',
  },
  headerLeft: () => {
    return <Image style={{marginLeft: 24}} source={Images.icSearch} />;
  },
  headerRight: () => {
    return <Image style={{marginRight: 24}} source={Images.icUser} />;
  },
};
