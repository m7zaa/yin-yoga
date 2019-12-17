import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';




const About = props => {
return (
  <View>
    <Text>Yin Yoga is a slow-paced style of yoga as exercise, incorporating principles of Traditional Chinese Medicine, with asanas (postures) that are held for longer periods of time. For beginners, asanas may be held from 45 seconds to two minutes; more advanced practitioners may stay in one asana for five minutes or more.</Text>
  </View>
)};

export default About;