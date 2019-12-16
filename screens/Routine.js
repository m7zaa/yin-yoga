import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableWithoutFeedback, Keyboard, Alert, StatusBar, TouchableOpacity, Dimensions } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import { Assets } from 'react-navigation-stack';
import { Audio } from 'expo-av';




const Routine = props => {
  const [randomRoutine, setRandomRoutine] = useState([]);
  const [poseIndex, setPoseIndex] = useState(0);
  const [onStart, setOnStart] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [practiceFinished, setPracticeFinished] = useState(false);
  const [secondInput, setSecondInput] = useState(false);
  const [firstInput, setFirstInput] = useState(true);
  const [stretchTime, setStretchTime] = useState();
  const [practiceTime, setPracticeTime] = useState();
  const [remainingSecs, setRemainingSecs] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [endPose, setEndPose] = useState(false);

  
  
  
  
  const handlePlaySound = async note => {
    const soundObject = new Audio.Sound()
  
    try {
      let source = require('../assets/bell.wav')
      await soundObject.loadAsync(source)
      await soundObject
        .playAsync()
        .then(async playbackStatus => {
          setTimeout(() => {
            soundObject.unloadAsync()
          }, playbackStatus.playableDurationMillis)
        })
        .catch(error => {
          console.log(error)
        })
    } catch (error) {
      console.log(error)
    }
  }
  ///////////////
  //Countdown timer  const time = ({ stretchTime }.stretchTime);
  const formatNumber = number => `0${number}`.slice(-2);
  const toggle = () => {
    const time = { stretchTime }.stretchTime * 60;
    setRemainingSecs(time);
    setIsActive(!isActive);
  }
  const getRemaining = (time) => {
    const mins = Math.floor(time / 60);
    const secs = time - mins * 60;
    return { mins: formatNumber(mins), secs: formatNumber(secs) };
  }
  const { mins, secs } = getRemaining(remainingSecs);
  const reset = () => {
    const time = {stretchTime}.stretchTime * 60;
    setRemainingSecs(time);
    setIsActive(false);
  }
  useEffect(() => {
    let interval = null;
    if (isActive && remainingSecs> 0) {
      interval = setInterval(() => {
        setRemainingSecs(remainingSecs => remainingSecs - 1);
      }, 1000);
    } else if (!isActive && remainingSecs !== 0) {
      clearInterval(interval);
    } 
    return () => clearInterval(interval);
  }, [isActive, remainingSecs]);
////////////////////////////////////////




  if ((isActive && remainingSecs === 0)) {
    handlePlaySound();
    setEndPose(true);
    setConfirmed(false);
    setIsActive(false);


  }
  let restScreen;
  if (endPose) {
    restScreen = (
      <View>
        <Card style={styles.poseContainer}>
          <TitleText style={styles.title}>{poses[33].english_name} Pose</TitleText>
          <Image
            style={styles.image}
            source={{ uri: poses[33].img_url }}
            resizeMode='contain'
          />
          <Button title="Next" 
              onPress={() => {
                setRemainingSecs({ stretchTime }.stretchTime * 60);
                setIsActive(false);
                setConfirmed(true);
                setEndPose(false);
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
    )
  }




















  console.log(randomRoutine);
  console.log(({ practiceTime }.practiceTime) / ({ stretchTime }.stretchTime));

  const stretchInputHandler = inputText => {
    setStretchTime(inputText.replace(/[^0-9]/g, ''));
  };  
  const practiceInputHandler = inputText => {
    setPracticeTime(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
      setPracticeTime('');
      setStretchTime('');
      setConfirmed(false);
  };
  const confirmFirstInputHandler = () => {
    const chosenPracticeTime = parseInt(practiceTime);
      if(isNaN(chosenPracticeTime) || (chosenPracticeTime)<= 0 || (chosenPracticeTime) > 99) {
        Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{text: 'Okay', style: 'destructive',    onPress: resetInputHandler}]
        );
          return;
      }
      setPracticeTime(chosenPracticeTime);
      // setEnteredValue('');
      Keyboard.dismiss();
      setSecondInput(true);
      setFirstInput(false);
  };
  const confirmSecondInputHandler = () => {
    const chosenStretchTime = parseInt(stretchTime);
    const chosenPracticeTime = parseInt(practiceTime);
    if (isNaN(chosenStretchTime) || (chosenStretchTime) <= 0 || (chosenStretchTime) > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      );
      return;
    }
    setStretchTime(chosenStretchTime);
    // setEnteredValue('');
    Keyboard.dismiss();
    setSecondInput(false);
    setFirstInput(false);
    setConfirmed(true);
    generateRandomPoseHandler();
  };

  const generateRandomPoseHandler = () => {
    setRandomRoutine([]);
    setPoseIndex(0);
    const poseArray = [];
    const numArray = [];
    const poseQuant = ({ practiceTime }.practiceTime) / ({ stretchTime }.stretchTime)
    for(let i = 0; i < poseQuant; i++) {
        let randomNum = Math.floor(Math.random() * 33) + 0;
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
    setIsActive(false);
  }
  let startButtonOutput;
  if(onStart) {
    startButtonOutput = (
      <View>
        <Button title="Start Random Practice"
        onPress=
        {onStartButton}
        color={Colors.accent} />
      </View>
    );
  };
  let firstTimeInput;
  if(firstInput) {
    firstTimeInput = (
      <View style={styles.screen}>
      <Card style={styles.inputContainer}>
        <BodyText>How long do you want to practice?</BodyText>
        <View style={styles.inputLine}>
          <Input 
              placeholder={'minutes'}
              style={styles.input} 
              blurOnSubmit 
              autoCorrect={false} 
              keyboardType="number-pad" 
              maxLength={2} 
              onChangeText= {practiceInputHandler}
              value={practiceTime}
              />
        </View>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
                <Button title="Reset" onPress={resetInputHandler} color={Colors.primary}/>
            </View>
            <View style={styles.button}>
                <Button title="Confirm" onPress={confirmFirstInputHandler} color={Colors.accent3}/>
            </View>
        </View>
      </Card>
    </View>
  );
  };
  let secondTimeInput;
  if (secondInput) {
    secondTimeInput = (
      <View style={styles.screen}>
        <Card style={styles.inputContainer}>
          <BodyText>How long would you like to hold each pose?</BodyText>
          <View style={styles.inputLine}>
            <Input
              placeholder={'minutes'}
              style={styles.input}
              blurOnSubmit
              autoCorrect={false}
              keyboardType="number-pad"
              maxLength={2}
              onChangeText={stretchInputHandler}
              value={stretchTime}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Reset" onPress={resetInputHandler} color={Colors.primary} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" onPress={confirmSecondInputHandler} color={Colors.accent3} />
            </View>
          </View>
        </Card>
      </View>
    );
  };

  let routineOutput;
  if (confirmed && !endPose) {
    routineOutput = (
      <View>
        <Card style={styles.poseContainer}>
          <View style={styles.titleView}>
            <Text style={styles.title} 
            adjustsFontSizeToFit numberOfLines={1} 
            >
            {randomRoutine[poseIndex].english_name} Pose</Text>

          </View>
          <Image
            style={styles.image}
            source={{ uri: randomRoutine[poseIndex].img_url }}
            resizeMode='contain'
            /> 

          <BodyText style={styles.timerText}>{(isActive && remainingSecs===0) ? 'Times Up!' :`${mins}:${secs}`}</BodyText>
          <View style={styles.timer}>
            <TouchableOpacity 
            onPress={toggle} 
            style={styles.button}>
            <TitleText >{isActive ? 'Pause' : 'Start'}</TitleText>
            </TouchableOpacity>
            <TouchableOpacity onPress={reset} >
              <BodyText>Reset</BodyText>
            </TouchableOpacity>
            
          </View>
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
  };


  return (
    <TouchableWithoutFeedback onPress={()=> {
      Keyboard.dismiss();
      // setOnStart(false);
    }}>

    <View style={styles.screen}>
      {firstTimeInput}
      {secondTimeInput}
      {endPractice}
      {startButtonOutput}
      {restScreen}
      {routineOutput}
    </View >    
    </TouchableWithoutFeedback>
    
  )
};

const styles = StyleSheet.create({
  titleView: {
    maxWidth: '70%'
  },
  poseContainer : {
    width: 400,
    maxWidth: '80%',
    height: 800,
    maxHeight: '85%',
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
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80
  },
  title: {
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
    fontSize: 40
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
 inputLine: {
    flexDirection: 'row',
    textAlign: 'center',

 },
 minutes: {
   marginTop: 10
 },



 timer: {
   justifyContent: 'space-between',
   alignItems: 'center',
   flexDirection: 'row',
   textAlign: 'center'
 },

  buttonText: {
    fontSize: 10,
    color: '#B9AAFF'
  },
  timerText: {
    fontSize: 40,
    marginBottom: 20
  },
});


export default Routine;