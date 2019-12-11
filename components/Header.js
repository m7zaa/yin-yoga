import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Colors from '../constants/colors.js';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Header = props => {

  return (
    <View style={styles.header}>
      <View style={styles.headerTitle}>
        <TitleText>{props.title}</TitleText>

        <Button style={styles.homeButton} title="Home" onPress={props.onGoHomeHandler} />
      </View>

    </View>
  );
};










const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  headerTitle: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Colors.accent3,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'open-sans',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20

  },
  homeButton: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }

});



export default Header;