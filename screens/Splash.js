import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, TouchableOpacity } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const Splash = props => {
    return (
      <View style={styles.screen}>
        <TitleText style={styles.shadow}>Shaolin Yin Yoga</TitleText>
          <Image
            style={styles.image}
            source={require('../assets/dragon.png')}
            resizeMode='contain'
          />
        <View style={styles.cardsStyle}>
          <TouchableOpacity>
            <Card style={styles.cardContainer}>
              <TitleText>Custom</TitleText>
              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button title="Start" 
                    onPress={props.onStartCustomRoutine} 
                  color={Colors.accent2}
                  />
                </View>
              </View>
            </Card>
          </TouchableOpacity>
          <TouchableOpacity onPress=
            {props.onStartRandomFlow}>
          <Card style={styles.cardContainer}>
            <TitleText>Quick</TitleText>
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button title="Start"
                  onPress=
                  {props.onStartRandomFlow} 
                  color={Colors.accent2} />
              </View>
            </View>
          </Card>
          </TouchableOpacity>
        </View>        
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    paddingVertical: 40,
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
    opacity: 1
  },
  cardContainer: {
    width: 150,
    maxWidth: '80%',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'transparent',
    opacity: 1,
  },
  button: {
    width: 100,
    opacity:1
  },
  input: {
    width: 50,
    textAlign: 'center',
    opacity: 1

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
  },
  button: {
    opacity: 10
  },
  shadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontSize: 40,
    marginBottom: 25
  }
});

export default Splash;