import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';




const About = props => {
return (
  <View style={styles.screen}>
    <Card style={styles.card}>
      <TitleText>Yin Yoga</TitleText>
      <BodyText>Yin Yoga is a slow-paced style of yoga as exercise, incorporating principles of Traditional Chinese Medicine, with asanas (postures) that are held for longer periods of time. For beginners, asanas may be held from 45 seconds to two minutes; more advanced practitioners may stay in one asana for five minutes or more.</BodyText>
      <Button title="Home" onPress={props.onGoHomeHandler} color={Colors.accent3} />
    </Card>
  </View>
)};

const styles = StyleSheet.create({
  titleView: {
    maxWidth: '70%'
  },
  card: {
    width: 400,
    maxWidth: '80%',
    height: 300,
    maxHeight: '85%',
    alignItems: 'center',
    marginVertical: 40
  },
  screen: {
    flex: 1,
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80
  },
});


export default About;