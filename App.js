
import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, ImageBackground } from 'react-native';
import Header from './components/Header';
import Splash from './screens/Splash';
import Routine from './screens/Routine';
import About from './screens/About';
import CreatePractice from './screens/CreatePractice';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { LinearGradient } from 'expo';
// import LinearGradient from "react-native-linear-gradient";




const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);
  const [splash, setSplash] = useState(true);
  const [randomRoutine, setRandomRoutine] = useState([]);
  const [aboutPage, setAboutPage] = useState(false);

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
  const aboutPageHandler = () => {
    setAboutPage(true)
  }
  const goHomeHandler = () => {
    setSplash(true)
    setAboutPage(false)
  }

  let content = <Splash onStartRandomFlow={startRandomFlowHandler} onAboutPageHandler={aboutPageHandler}/>;
  if (!splash) {
    content = <Routine onGoHomeHandler={goHomeHandler} onAboutPageHandler={aboutPageHandler}/>
  }
  if (aboutPage) {
    content = <About onGoHomeHandler={goHomeHandler}/>
  }


  return (

    <View style={styles.container}>
      <Header title="Shaolin Yin"
        onGoHomeHandler={goHomeHandler}
        onAboutPageHandler={aboutPageHandler}
      />
      <ImageBackground 
      source={require('./assets/background.jpg')} 
      style={{width: '100%', height: '100%'}}>
        {content}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
