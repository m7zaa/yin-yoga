import React from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import Card from '../components/Card';
import poses from '../assets/data/poses.json';
import TitleText from '../components/TitleText';

const EndPractice = props => {
  return (
    <View>
      <Card>
        <TitleText>Good job! You have reached the end!</TitleText>
      </Card>

    </View>
    )};

const styles = StyleSheet.create({
  // titleView: {
  //   maxWidth: '70%'
  // },
  // poseContainer: {
  //   width: 400,
  //   maxWidth: '80%',
  //   height: 800,
  //   maxHeight: '85%',
  //   alignItems: 'center',
  //   marginVertical: 40
  // },
  // image: {
  //   width: '100%',
  //   height: 300,
  //   marginVertical: 40
  // },
  // screen: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   marginBottom: 80
  // },
  // title: {
  //   marginVertical: 10,
  //   fontFamily: 'open-sans-bold',
  //   fontSize: 40
  // },
  // subTitle: {
  //   fontFamily: 'open-sans-bold',
  //   fontSize: 30
  // },
});
export default EndPractice;