import React, { useState } from 'react';
import { 
  View, StyleSheet, Button, Image } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';



const Routine = props => {
  const [randomRoutine, setRandomRoutine] = useState([]);

  const onePose = poses[0];
  const oneImg = onePose.img_url;
  console.log()

  const poseArray = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * 40) + 1;
    poseArray.push(poses[randomNumber])
    setRandomRoutine(poseArray)
  }
  // console.log(randomRoutine)
  // const generateRandomPoseHandler = () => {
  //   const poseArray = [];
  //   for(let i = 0; i < 6; i++ ) {
  //     let randomNumber = Math.floor(Math.random() * 40) + 1;
  //     poseArray.push(poses[randomNumber])
  //     setRandomRoutine(poseArray)
  //   }
  // };

  
  return (
    <View style={styles.screen}>
      <Button title="Start"
        // onPress=
        // {generateRandomPoseHandler}
        color={Colors.accent} />
      {/* <TitleText style={styles.title}>{randomRoutine[0].english_name}</TitleText> */}

      <TitleText style={styles.title}>{onePose.english_name}</TitleText>
      <Image
        style={styles.image}
        source={{ uri: onePose.img_url }}
        resizeMode='contain'
      /> 
      {/* <Button title="Next Pose" onPress={} /> */}

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