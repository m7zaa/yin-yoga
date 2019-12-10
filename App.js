
import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Splash from './screens/Splash';
import Routine from './screens/Routine';
import CreateFlow from './screens/CreateFlow';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false);


  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Header title="Welcome" />
      <Text>Yin-Yoga Flows</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
