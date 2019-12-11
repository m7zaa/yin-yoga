import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors.js';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Header = props => {

  return (
    <View style={styles.header}>
      <TitleText style={styles.headerTitle}>{props.title}</TitleText>
      <Button title="Home" onPress={props.onGoHomeHandler} />
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