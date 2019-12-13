import React, { useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';



const Routine = props => {
  const [randomRoutine, setRandomRoutine] = useState([]);

  console.log(randomRoutine)

//   const generateRandomPoseHandler = () => {
//         const poseArray = [];
//         for(let i = 0; i < 6; i++) {
//           let randomNumber = Math.floor(Math.random() * 10) + 0;
//           poseArray.push(poses[randomNumber])
//           numArray.push(randomNumber)
//           setRandomRoutine(poseArray)
//         };
//       }



    const generateRandomPoseHandler = () => {
          const poseArray = [];
          const numArray = [];
          for(let i = 0; i < 6; i++) {
            let randomNumber = Math.floor(Math.random() * 10) + 0;
              for(let j = 0; j < 6; j++ ) {
                if(randomNumber===numArray[j]) {
                return generateRandomPoseHandler();
              } else {
                poseArray.push(poses[randomNumber])
                numArray.push(randomNumber)

                setRandomRoutine(poseArray)
              }   
            }
          };
        }
      













    

  let routineOutput;
  if (randomRoutine.length > 5) {
    routineOutput = (
      <View>
        <Card style={styles.poseContainer}>
          <TitleText style={styles.title}>{randomRoutine[0].english_name} Pose</TitleText>
          <Image
            style={styles.image}
            source={{ uri: randomRoutine[0].img_url }}
            resizeMode='contain'
          /> 
          <Button title="Next" 
          // onPress={} 
          />
        </Card>
      </View>
    );
  };






  
  return (
    <View style={styles.screen}>
      {routineOutput}
      <Button title="Start"
        onPress=
        {generateRandomPoseHandler}
        color={Colors.accent} />
    </View >    
  )
};


const styles = StyleSheet.create({
  poseContainer : {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    marginVertical: 40

  },
  image: {
    width: '100%',
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