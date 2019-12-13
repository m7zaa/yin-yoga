import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';


const Routine = props => {
  const [randomRoutine, setRandomRoutine] = useState([]);
  const [poseIndex, setPoseIndex] = useState(0);
  const [onStart, setOnStart] = useState(false);
  const [stretchTime, setStretchTime] = useState();
  const [practiceTime, setPracticeTime] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [practiceFinished, setPracticeFinished] = useState(false);

  
  console.log(randomRoutine)
  console.log(poseIndex)
  

  const stretchInputHandler = inputText => {
    setStretchTime(inputText.replace(/[^0-9]/g, ''));
    // setStretchTime(inputText.replace(/[^0-9]/g, ''));

  };  
  const practiceInputHandler = inputText => {
    setPracticeTime(inputText.replace(/[^0-9]/g, ''));
    // setStretchTime(inputText.replace(/[^0-9]/g, ''));

  };
  const resetInputHandler = () => {
      setPracticeTime('');
      setConfirmed(false);

  };
  const confirmInputHandler = () => {
    const chosenStretchTime = parseInt(stretchTime);
    const chosenPracticeTime = parseInt(practiceTime);
      if(isNaN(chosenStretchTime || chosenPracticeTime) || (chosenStretchTime || chosenPracticeTime)<= 0 || (chosenStretchTime || chosenPracticeTime) > 99) {
        Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive',    onPress: resetInputHandler}]
        );
          return;
      }
      setPracticeTime(chosenPracticeTime);
      setStretchTime(chosenStretchTime);
      setConfirmed(true);
      // setEnteredValue('');
      Keyboard.dismiss();
      generateRandomPoseHandler();
  };

  const generateRandomPoseHandler = () => {
    setOnStart(true);
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

  const onStartButton = () => {
    setOnStart(true);
    setPracticeFinished(false)

  }

  
  let startButtonOutput;
  if(!onStart) {
    startButtonOutput = (
      <View>
        <Button title="Start Random Practice"
        onPress=
        {onStartButton}
        color={Colors.accent} />
      </View>
    );
  }

  let timeInputs;
  if(onStart && !confirmed) {
    timeInputs = (
    <View>
      <Card style={styles.inputContainer}>
        <Text>How long would you like to hold each pose?</Text>
        <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2} 
            onChangeText= {stretchInputHandler}
            value={stretchTime}
        />
        <Text>How long do you want to practice?</Text>
        <Input 
            style={styles.input} 
            blurOnSubmit 
            autoCorrect={false} 
            keyboardType="number-pad" 
            maxLength={2} 
            onChangeText= {practiceInputHandler}
            value={practiceTime}
        />

        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Reset" onPress={resetInputHandler} color={Colors.accent1}/>
            </View>
            <View style={styles.button}>
                <Button title="Confirm" onPress={confirmInputHandler} color={Colors.primary}/>
            </View>
        </View>
      </Card>
    </View>
  );
  }






  






  let routineOutput;
  if (confirmed && onStart && randomRoutine.length > 5) {
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
                setPracticeFinished(true);
                setRandomRoutine([]);
                setConfirmed(false);
                setOnStart(false)
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
  if (practiceFinished)
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
      {timeInputs}
      {endPractice}
      {startButtonOutput}
      {routineOutput}
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
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',

  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100 
 },
});


export default Routine;