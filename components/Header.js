import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/colors.js';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Header = props => {

  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
    </View>
  );
};










const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.accent3,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-sans'
  }

});



export default Header;