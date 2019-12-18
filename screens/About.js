import React, { useState } from 'react';
import { View, StyleSheet, Button, Image, Text, TouchableWithoutFeedback, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import poses from '../assets/data/poses.json';
import Colors from '../constants/colors';
import Card from '../components/Card';
import TitleText from '../components/TitleText';
import BodyText from '../components/BodyText';




const About = props => {
return (
  <View style={styles.screen}>
    <Card style={styles.card}>
      <SafeAreaView style={styles.container}>
        <ScrollView >
          <View style={styles.title}>
            <TitleText style={styles.title}>Yin Yoga</TitleText>
          </View>
          <BodyText style={styles.body}>Yin Yoga, a less popular style of yoga in the west is an approach that some may have never even heard of. One that in my experience, takes many a few times to really warm up to and even understand. Initially called “Daoist” yoga this style of yoga targets the deep connective tissues of the body (vs. the superficial tissues) and the fascia that covers the body; this Daoist yoga is to help regulate the flow of energy in the body. Paul Grilley, who brought this concept to the forefront, accredits three main teachers for this concept, one of which is Paulie Zink, who taught him Daoist Yoga. Many teach Yin Yoga today, one of which is Sarah Powers, a student of Paul’s; although she teaches very different than Paul, while taking a Yin Yoga training from him in Chicago, he noted her credit for aligning the name “Yin Yoga” with this style.</BodyText>

          <BodyText style={styles.body}>Yin Yoga postures are more passive postures, mainly on the floor and the majority of postures equal only about three dozen or so, much less than the more popular yang like practices. Yin Yoga is unique in that you are asked to relax in the posture, soften the muscle and move closer to the bone. While yang-like yoga practices are more superficial, Yin offers a much deeper access to the body. It is not uncommon to see postures held for three to five minutes, even 20 minutes at a time. The time spent in these postures is much like time spent in meditation, and I often talk students through the postures as if they were trying to meditate. While in a Yin class you might notice similar postures to a yang class except they are called something else, on a basic level this is to help the students mind shift form yang to yin, active to passive.</BodyText>

          <BodyText style={styles.body}>This concept of Yin yoga has been around for thousands of years and some of the older text, such as the Hatha Yoga Pradipika notes only sixteen postures in its text, which is far less than the millions of postures practiced in today’s yoga. In addition, having read much of these text and also cliff notes from various teachers it would appear that these “postures” were more yin like to help promote meditation and long periods of pranayama and sitting. Now I am not claiming to be an ancient text yoga guru, but this is just an observation I have made.</BodyText>

          <BodyText style={styles.body}>So what exactly is Yin yoga? It is a more meditative approach with a physical focus much deeper than Yang like practices. Here the practitioner is trying to access the deeper tissues such as the connective tissue and fascia and many of the postures focus on areas that encompass a joint (hips, sacrum, spine). As one ages flexibility in the joints decreases and Yin yoga is a wonderful way to maintain that flexibility, something that for many don’t seem to be too concerned about until they notice it is gone.</BodyText>

          <BodyText style={styles.body}>This intimate practice of yoga requires students to be ready to get intimate with the self, with feelings, sensations, and emotions, something of which I have noticed can be easy to avoid in a fast paced yoga practice. Yin yoga is often used in programs that deal with addictions, eating disorders, anxiety and deep pain or trauma. For me my first experience with yoga was when I was knee deep in an eating disorder. Not familiar with the difference in practices I did notice that yoga helped me, and I often equate my practice to saving my life. Now that being said, several years later I stumbled across Yin yoga and found that the recovery process I had been going through apparently needed some more work and WOW did Yin point that out to me. I often struggled with being alone, sitting with feelings and sensations (something addicts struggle with) and found it challenging to face myself and the rawness of what I was doing and who I was in that moment. This concept in practice, allowed me a greater mental stability something much of which is a benefit of meditation, basically “learning to sit still.”</BodyText>

          <BodyText style={styles.body}>Now if you’ve never practiced Yin yoga you might not quite understand how this is so different, but for me Yin has dug deeper than I could have ever gotten otherwise. For my students I often tell them when they are about to try a Yin class that they need to try it three or four times to really make a decision about the practice. Many find immediate benefits like more open hips, a more relaxed body and centered mind. To me, I don’t think one practice is better than the other, but what I would see as beneficial is for the practitioner to see the benefit in each and that there is a need for both. Possibly one benefiting more than the other at times in your life, but a need none-the-less.</BodyText>
          <View style={ styles.bulletText }>

            <BodyText style={styles.body}>Some of the benefits of Yin yoga are:</BodyText>

            <Text style={ styles.body }>•Calming and balancing to the mind and body</Text>
            <Text style={ styles.body }>•Regulates energy in the body</Text>
            <Text style={ styles.body }>•Increases mobility in the body, especially the joints and hips</Text>
            <Text style={ styles.body }>•Lowering of stress levels (no one needs that)</Text>
            <Text style={ styles.body }>•Greater stamina</Text>
            <Text style={ styles.body }>•Better lubrication and protection of joints</Text>
            <Text style={ styles.body }>•More flexibility in joints & connective tissue</Text>
            <Text style={ styles.body }>•Release of fascia throughout the body</Text>
            <Text style={ styles.body }>•Help with TMJ and migraines</Text>
            <Text style={ styles.body }>•Deeper Relaxation</Text>
            <Text style={ styles.body }>•A great coping for anxiety and stress</Text>
            <Text style={ styles.body }>•Better ability to sit for meditation</Text>
            <BodyText>Ultimately you will have a better Yang practice</BodyText>
            <BodyText style={styles.body}>I really do believe that if you incorporate a little of both will create a more well-rounded practice as well as a better-rounded version of the awesome you!</BodyText>
        </View>
        <BodyText style={styles.body}>If you take a peek at a Yin-Yang symbol, it is suggesting that no matter what, we should take a “tiny bit” and put it in the heart of its opposite. Knowing both practices, and having struggled with a wide variety of eating disorders, addiction, depression and anxiety, I get that too much of something is simply too much. Yin yoga as taught me to truly be still, to really come face to face with myself, even more than my past practice has; and because of this I am now able to bring what Yin has taught me into my more Yang like practices and ultimately my life as a whole.</BodyText>

        <BodyText style={styles.body}>Yin yoga teaches you how to really listen, you don’t get the opportunity to go in and out, jump around and find a distracted version of stillness within your practice. Yin is such a great compliment to other styles and your own personal life, because it brings long periods of time in an uncomfortable position, which then asks you to learn to “be” to “accept what is” in that given moment. Something we can all benefit from daily.</BodyText>
        <View style={styles.homeButton}>
          <Button title="Home" onPress={props.onGoHomeHandler} color={Colors.accent3} />
        </View>
      </ScrollView>
    </SafeAreaView>
  </Card>
</View>
)};

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
    alignItems: 'center'
  },
  body: {
    marginVertical: 5
  },
  card: {
    width: 400,
    maxWidth: '85%',
    height: 600,
    maxHeight: '80%',
    alignItems: 'center',
    marginVertical: 40
  },
  screen: {
    flex: 1,
    // padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80
  },
  homeButton : {
    marginTop: 20  
  },
  container: {
    flex: 1,
  },
  bulletText: {
    flex: 1
}
});


export default About;