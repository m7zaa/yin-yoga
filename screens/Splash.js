import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TouchableWithoutFeedback, Keyboard, Alert, FlatList, Modal } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';





const Splash = props => {
  // const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [routine, setRoutine] = useState();
  // const [selectedNumber, setSelectedNumber] = useState();


  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setConfirmed(false);
  };

     const generateRandomRoutineHandler = () => {

     }
  // const confirmInputHandler = () => {
  //   const chosenNumber = parseInt(enteredValue);
  //   if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
  //     Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.', [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
  //     );
  //     return;
  //   }
  //   setConfirmed(true);
  //   setSelectedNumber(chosenNumber);
  //   setEnteredValue('');
  //   Keyboard.dismiss();
  // };
  // let confirmedOutput;
  // if (confirmed) {
  //   confirmedOutput = (
  //     <Card style={styles.summaryContainer}>
  //       <Text>How long would like like to hold each pose?</Text>
  //       <Input
  //         style={styles.input}
  //         blurOnSubmit
  //         autoCorrect={false}
  //         keyboardType="number-pad"
  //         maxLength={2}
  //         onChangeText={numberInputHandler}
  //         value={enteredValue}
  //       /> 
  //       <Button title="START" onPress={() => props.onStartGame(selectedNumber)} />
  //     </Card>
  //   );
  // };
  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>

      <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <TitleText style={styles.title}>Start a flow!</TitleText>
        <Card style={styles.inputContainer}>
          <Text>What kind of flow do you want?</Text>
          {/* <Input
            style={styles.input}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            onChangeText={numberInputHandler}
            value={enteredValue}
          /> */}

          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Custom" 
              // onPress={resetInputHandler} 
              color={Colors.accent} />
            </View>
            <View style={styles.button}>
              <Button title="Random" 
              // onPress={confirmInputHandler} 
              color={Colors.primary} />
            </View>
          </View>
        </Card>
          <View>
            <FlatList
              data={poses}
              showsVerticalScrollIndicator={true}
              renderItem={({ item }) =>
                <View >
                  <Text>{item.english_name}</Text>
                </View>
              }
            />  
          </View>

        
        {/* {confirmedOutput} */}
      </View>
    </Modal>
    </TouchableWithoutFeedback>
  );
};




















const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  button: {
    width: 100
  },
  input: {
    width: 50,
    textAlign: 'center',

  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center'
  }
});
export default Splash;