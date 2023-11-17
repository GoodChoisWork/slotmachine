import { View, Text, StyleSheet, ScrollView,ImageBackground } from "react-native";
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
      <ScrollView >
        <View style={styles.flexTitle}>
          <Text style={styles.title}>About</Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            At our slot gaming, we're passionate about providing a space where
            the thrill of slot machines meets the joy of entertainment without
            any financial risk. Join us in a world where every spin is an
            adventure, and the excitement of play takes center stage.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Our mission is simple yet profound—to offer a sanctuary for those
            seeking pure, carefree enjoyment in the realm of slot machines. We
            envisioned a place where players could immerse themselves in the
            excitement of spinning reels without the pressure of real-money
            stakes.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            What sets our slot game apart is our commitment to delivering an
            experience that goes beyond the conventional boundaries of gaming.
            Here, your wins are virtual, but the enjoyment is very real. Our
            diverse collection of slot games reflects our dedication to
            providing quality entertainment.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Embark on a journey through our diverse selection of slot games.
            From timeless classics that evoke nostalgia to modern, feature-rich
            experiences, our haven has it all. Discover new favorites, explore
            captivating storylines, and enjoy the ever-evolving world of slot
            machine entertainment.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Our slot gaming isn't just a platform; it's a community of
            like-minded enthusiasts who share a love for gaming. Connect with
            fellow players, celebrate wins, and create lasting memories as you
            embark on a social gaming experience that adds an extra layer of joy
            to every spin.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            While the stakes are virtual, we prioritize responsible gaming. Our
            haven encourages players to set personal limits, ensuring that the
            focus remains on the sheer enjoyment of the game. Your well-being is
            our priority.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Our haven is designed to fit seamlessly into your lifestyle. Whether
            you're at home, commuting, or simply looking to unwind, our platform
            is accessible anytime, anywhere. Enjoy the freedom to play when it
            suits you best.
          </Text>
        </View>

        <View>
          <Text style={styles.textIntro}>
            Welcome to our gaming haven, where every spin is a celebration of
            entertainment without the risk. Join us in creating a community that
            thrives on the joy of play. Spin without hesitation, explore without
            restraint—our haven is your destination for endless, carefree fun.
            Let the games begin!
          </Text>
        </View>
      </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
    borderColor : 'red',
    height: '100%',
    color: 'white'
  },
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: 'white'
  },

  title: {
    padding: 20,
    fontSize: 40,
    color: 'white'
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
    color: 'white'
  },
});
export default About;
