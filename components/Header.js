import React from 'react';
import { View, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import Colors from '../constants/colors.js';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Header = props => {

  return (
      <View style={styles.header}>
          <TouchableOpacity  onPress={props.onGoHomeHandler}>
            <View style={styles.title}>
              <TitleText>
                {props.title}
              </TitleText>
            </View>
          </TouchableOpacity>
      <TouchableOpacity onPress={props.onAboutPageHandler}>

        <BodyText style={styles.about}>About</BodyText>
      </TouchableOpacity>

      </View>
  );
};










const styles = StyleSheet.create({

  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.accent2,
    alignItems: 'center',
    fontFamily: 'open-sans',
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingHorizontal: 20

  },
  title: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    

  },
  image: {
    flex: 1,

    // width: '100%',
    height: 30,
    // marginTop: 20,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',

  },
  about: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',

  }
});
export default Header;