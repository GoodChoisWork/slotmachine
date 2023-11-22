import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const HowToPlay = () => {
  return (
    <SafeAreaView style={styles.container}>
    <ImageBackground
      source={require("../assets/background/bg-1.jpg")}
      resizeMode="cover"
      style={styles.backgroundImage}
    > 
      <ScrollView>
        <View style={styles.flexTitle}>
          <Text style={styles.title}>How To Play</Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Playing a slot machine for entertainment purposes without involving
            real money can be a fun and risk-free way to experience the
            excitement of these games. Here's a simple guide on how to play a
            virtual slot machine for entertainment:
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Opening the App:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
          Upon opening the app, users are greeted with the main screen displaying the menu and can choose to change the theme.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Theme Selection:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
          Once a theme is selected, the slot machine interface adapts to the chosen theme, displaying corresponding background images and symbols. Then Press Play Game!.
          </Text>
        </View>

        <View>
          <Image source={require('../assets/HowToPlay/themeselect.png')} style={styles.image}/>
        </View>

        <View>
          <Text style={styles.titleSemi}>Spin the Slots:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
          Users are presented with a 'Spin' button. Upon pressing this button, the reels start spinning.
          </Text>
        </View>
        <View>
          <Image source={require('../assets/HowToPlay/spintheslot.png')} style={styles.image}/>
        </View>
        <View>
          <Text style={styles.titleSemi}>Result Display:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
          The reels stop spinning, and the symbols on the slots align. If there's a winning combination, the app highlights the winning symbols and displays the WIN/LOSE display.
          </Text>
        </View>
        <View>
          <Image source={require('../assets/HowToPlay/result.png')} style={styles.image}/>
        </View>
        
        <View>
          <Text style={styles.titleSemi}>Options to Continue:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
          After each spin, users can choose to spin again or change the theme by going back to the main menu.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>No Real Money Involved:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Remember that you're playing for entertainment, and no real money is
            at stake. Enjoy the game without the pressure of financial risk.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Have Fun:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            The primary goal is to have fun and enjoy the entertainment value of
            the game. Celebrate any wins, but don't get discouraged by losses
            since no real money is involved.
          </Text>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color : 'white'
  },
  image :{
    alignSelf: 'center'
  },
  title: {
    padding: 20,
    fontSize: 40,
    color : 'white'
  },

  textIntro: {
    fontSize: 25,
    padding: 10,
    textAlign: "justify",
    color : 'white'
  },

  titleSemi: {
    fontSize: 30,
    paddingLeft: 10,
    color : 'white'
  },

  textHow: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "justify",
    color : 'white'
  },
});

export default HowToPlay;
