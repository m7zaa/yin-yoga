import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors.js';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Header = props => {

  return (
      <View style={styles.header}>
        <View style={styles.title}>
          <TouchableOpacity onPress={props.onGoHomeHandler}>  
            <Image
              style={styles.image}
              source={require('../assets/home.png')}
              resizeMode='contain'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onAboutPageHandler}>
            <BodyText style={styles.about}>About</BodyText>
          </TouchableOpacity>
        </View>
      </View>
  );
};










const styles = StyleSheet.create({

  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.accent2,
    fontFamily: 'open-sans',
    paddingHorizontal: 30

  },
  title: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-end',

  },
  image: {
   
    height: 20,

  },
  about: {
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'center',

  },
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 30,
    // marginBottom: 25
  }
});
export default Header;