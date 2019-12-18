// import React from 'react';
// import { View, StyleSheet, Button, Image } from 'react-native';
// import Card from '../components/Card';
// import poses from '../assets/data/poses.json';
// import TitleText from '../components/TitleText';

// const RestScreen = props => {
//   return (
//   <View>
//     <Card style={styles.poseContainer}>
//       <TitleText style={styles.subTitle} adjustsFontSizeToFit numberOfLines={1}>Rest In</TitleText>
//       <TitleText style={styles.title} adjustsFontSizeToFit numberOfLines={1}>{poses[33].english_name} Pose</TitleText>
//       <TitleText>When ready, press 'Next'</TitleText>
//       <Image
//         style={styles.image}
//         source={require('../assets/corpse.jpg')}
//         resizeMode='contain'
//       />
//       <Button title="Next"
//         onPress={() => {
//           setRemainingSecs({ stretchTime }.stretchTime * 60);
//           setIsActive(false);
//           setConfirmed(true);
//           setEndPose(false);
//           const poseQuant = ({ practiceTime }.practiceTime) / ({ stretchTime }.stretchTime)

//           let poseI = poseIndex;
//           poseI++
//           if (poseI > (poseQuant - 1)) {
//             setPracticeFinished(true);
//             setRandomRoutine([]);
//             setConfirmed(false);
//             setOnStart(false)
//           } else {
//             setPoseIndex(poseI)
//           }
//         }
//         }
//       />
//     </Card>
//   </View>
//   )};

// const styles = StyleSheet.create({
//   titleView: {
//     maxWidth: '70%'
//   },
//   poseContainer: {
//     width: 400,
//     maxWidth: '80%',
//     height: 800,
//     maxHeight: '85%',
//     alignItems: 'center',
//     marginVertical: 40
//   },
//   image: {
//     width: '100%',
//     height: 300,
//     marginVertical: 40
//   },
//   screen: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 80
//   },
//   title: {
//     marginVertical: 10,
//     fontFamily: 'open-sans-bold',
//     fontSize: 40
//   },
//   subTitle: {
//     fontFamily: 'open-sans-bold',
//     fontSize: 30
//   },
// });
// export default RestScreen;