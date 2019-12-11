
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
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
  const [startRoutine, setStartRoutine] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  const startFlowHandler = () => {
    setStartRoutine(true)
  }
  let content = <Splash onStartFlow={startFlowHandler}/>;

  if (startRoutine) {
    content = <Routine />
  }

  return (
    <View style={styles.container}>
      <Header title="Shaolin Yin" />
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
