import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
const HowToPlay = () => {
  return (
    <SafeAreaView>
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
          <Text style={styles.titleSemi}>Find a Free Slot Machine Game:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Look for online platforms or mobile apps that offer free-to-play
            slot machine games. Many online casinos and gaming websites provide
            free versions of their slot games.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Choose Your Game:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Pick a slot machine game that appeals to you. These games often come
            in various themes and styles, so choose one that you find
            interesting or entertaining.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Understand the Game Interface:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Familiarize yourself with the layout of the game. Most slot machines
            have reels, paylines, and buttons for spinning the reels and
            adjusting your bet.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Adjust Your Bet:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Some free slot games allow you to adjust your bet per spin. This
            might involve selecting the coin value or the number of coins to bet
            per line. Adjust your bet according to your preferences.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Spin the Reels:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Once you've set your bet, initiate a spin. In most cases, there will
            be a "Spin" button. Watch the reels spin, and wait for the symbols
            to align.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Enjoy the Features:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            Many slot games have additional features like bonus rounds, free
            spins, or special symbols. Explore these features for added
            entertainment.
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
          <Text style={styles.titleSemi}>Set Limits:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            If you're playing for an extended period, consider setting time
            limits to avoid spending too much time on the game.
          </Text>
        </View>

        <View>
          <Text style={styles.titleSemi}>Explore Different Games:</Text>
        </View>

        <View>
          <Text style={styles.textHow}>
            There are countless slot machine games with varying themes and
            features. Experiment with different games to discover your
            favorites.
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

        <View>
          <Text style={styles.textHow}>
            Remember, free slot machine games are designed for entertainment,
            and they do not offer real payouts. Always play responsibly and
            within your means, even when no real money is at risk.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flexTitle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    padding: 20,
    fontSize: 40,
  },

  textIntro: {
    fontSize: 25,
    padding: 10,
    textAlign: "justify",
  },

  titleSemi: {
    fontSize: 30,
    paddingLeft: 10,
  },

  textHow: {
    fontSize: 25,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingTop: 10,
    textAlign: "justify",
  },
});

export default HowToPlay;
