import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  Button, 
  Image 
} from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Routine = props => {
  const onePose = poses[0];
  const oneImg = onePose.img_url;
  console.log(oneImg);
  return (
    <View style={styles.screen}>
      <TitleText style={styles.title}>{onePose.english_name}</TitleText>
      <Image
        style={styles.image}
        source={{ uri: onePose.img_url }}
        resizeMode='contain'
      /> 
    </View >    
  )
};


const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: 300,
    marginVertical: 40
  }, 
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
});


export default Routine;