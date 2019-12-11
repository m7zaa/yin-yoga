
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import Header from './components/Header';
import Splash from './screens/Splash';
import Routine from './screens/Routine';
import CreateFlow from './screens/CreateFlow';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import TitleText from './components/TitleText';
import BodyText from './components/BodyText';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);
  const [splash, setSplash] = useState(true);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  const startRandomFlowHandler = () => {
    setSplash(false)
  }

  const goHomeHandler = () => {
    setSplash(true)
  }

  let content = <Splash onStartRandomFlow={startRandomFlowHandler}/>;

  if (!splash) {
    content = <Routine onGoHomeHandler={goHomeHandler}/>
  }

  const generateRandomRoutineHandler = () => {
    
  }

  return (
    <View style={styles.container}>
      <Header title="Shaolin Yin" 
      onGoHomeHandler={goHomeHandler}
      />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
