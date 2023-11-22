import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const About = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <ScrollView>
          <View style={styles.flexTitle}>
            <Text style={styles.title}>About</Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              Welcome to Slot Machine Gaming Oasis - the ultimate slot machine
              experience!
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
              our mission is to provide an entertaining and immersive slot
              machine experience for users of all ages. We aim to deliver a
              diverse range of themes and an easy-to-use interface for endless
              fun and excitement.
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
            Features:
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
            Theme Switching: Explore a variety of visually captivating themes to suit your mood.
            </Text>
          </View>

          <View>
            <Text style={styles.textIntro}>
            Simple Gameplay: Spin the slots and enjoy the thrill of winning combinations.
            </Text>
          </View>
          <View>
            <Text style={styles.textIntro}>
              Welcome to our gaming oasis, where every spin is a celebration of
              entertainment without the risk. Join us in creating a community
              that thrives on the joy of play. Spin without hesitation, explore
              without restraint—our haven is your destination for endless,
              carefree fun. Let the games begin!
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: "red",
    height: "100%",
    color: "white",
  },
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },

  title: {
    padding: 20,
    fontSize: 40,
    color: "white",
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  textIntro: {
    fontSize: 25,
    padding: 10,
    textAlign: "justify",
    color: "white",
  },
});
export default About;
