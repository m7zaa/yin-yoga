import React, { useState } from 'react';
import { View, StyleSheet, Button, Image } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Routine = props => {
  const [randomRoutine, setRandomRoutine] = useState([]);
  const [poseIndex, setPoseIndex] = useState(0);
  const [onStart, setOnStart] = useState(false);
  const [stretchTime, setStretchTime] = useState();
  const [practiceTime, setPracticeTime] = useState();
  const [confirmed, setConfirmed] = useState(false);

  
  console.log(randomRoutine)
  console.log(poseIndex)
  

  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
};
const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);

};
const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if(isNaN(chosenNumber) || chosenNumber<= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive',    onPress: resetInputHandler}]
      );
        return;
    }
    setConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
    Keyboard.dismiss();
};


  if(onStart) {
    <Card style={styles.inputContainer}>
    <Text>How long would you like to hold each pose?</Text>
    <Input 
        style={styles.input} 
        blurOnSubmit 
        autoCorrect={false} 
        keyboardType="number-pad" 
        maxLength={2} 
        onChangeText= {numberInputHandler}
        value={stretchTime}
    />
    <Text>How long do you want to practice?</Text>
    <Input 
        style={styles.input} 
        blurOnSubmit 
        autoCorrect={false} 
        keyboardType="number-pad" 
        maxLength={2} 
        onChangeText= {numberInputHandler}
        value={practiceTime}
    />

    <View style={styles.buttonContainer}>
        <View style={styles.button}>
            <Button title="Reset" onPress={resetInputHandler} color={Colors.accent}/>
        </View>
        <View style={styles.button}>
            <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
        </View>
    </View>
</Card>

  }






  const generateRandomPoseHandler = () => {
    setRandomRoutine([]);
    setPoseIndex(0);
    const poseArray = [];
    const numArray = [];
    for(let i = 0; i < 6; i++) {
        let randomNum = Math.floor(Math.random() * 10) + 0;
          if(numArray.includes(randomNum)) {
            return generateRandomPoseHandler();
          } else{
            poseArray.push(poses[randomNum])
            numArray.push(randomNum)
            setRandomRoutine(poseArray)
          }
      }
  };

  let startButtonOutput;
  if(randomRoutine.length < 5 ) {
    startButtonOutput = (
      <View>
        <Button title="Start Random Practice"
        onPress=
        {generateRandomPoseHandler}
        color={Colors.accent} />
      </View>
    );
  }





  let routineOutput;
  if (randomRoutine.length > 5 ) {
    routineOutput = (
      <View>
        <Card style={styles.poseContainer}>
          <TitleText style={styles.title}>{randomRoutine[poseIndex].english_name} Pose</TitleText>
          <Image
            style={styles.image}
            source={{ uri: randomRoutine[poseIndex].img_url }}
            resizeMode='contain'
            /> 
            <Button title="Next" 
            onPress={() => {
              let poseI= poseIndex;
              poseI++
              if (poseI > 5) {
                setRandomRoutine([])
                setPoseIndex(poseI)
              } else {
                setPoseIndex(poseI)

              }
            }
          } 
          />
        </Card>
      </View>
    );
  };

  let endPractice;
  if (poseIndex === 6)
  {
    endPractice = (
      <View>
        <Card>
          <TitleText>Good job! You have reached the end!</TitleText>
        </Card>

      </View>
    )
  }
  return (
    <View style={styles.screen}>
      {endPractice}
      {startButtonOutput}
      {routineOutput}
      {/* <Button title="Start"
        onPress=
        {generateRandomPoseHandler}
        color={Colors.accent} /> */}
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