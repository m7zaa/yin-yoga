import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';

const Splash = props => {

  const [confirmed, setConfirmed] = useState(false);
  const [routine, setRoutine] = useState();

    
    return (
      <View style={styles.screen}>
      {/* <Modal visible={props.visible} animationType="slide"> */}
          <Image
            style={styles.image}
            source={require('../assets/dragon.png')}
            resizeMode='contain'
          />

        <View style={styles.cardsStyle}>
          <Card style={styles.cardContainer}>
            <Text>Custom Flow</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Start" 
                // onPress={} 
                color={Colors.accent} />
              </View>
            </View>
          </Card>
          <Card style={styles.cardContainer}>
            <Text>Quick Start</Text>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Start"
                  onPress={props.onStartRandomFlow} 
                  color={Colors.accent} />
              </View>
            </View>
          </Card>
        </View>        
      {/* </Modal> */}
    </View>
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
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  cardContainer: {
    width: 150,
    maxWidth: '80%',
    alignItems: 'center',
    margin: 10
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
  },
  cardsStyle: {
    flexDirection: 'row',
  },
  image: {
    width: '80%',
    height: 300,
    marginVertical: 40
  }

});
export default Splash;