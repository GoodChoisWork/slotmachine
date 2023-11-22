import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Logo from "../components/Logo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { themes } from "../data/data";
const Home = ({ navigation }) => {
  const [themesSelection, setThemesSelection] = useState(null);
  const [isVisible, setVisible] = useState(false);

  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChange = (themes) => {
    storeData(themes);
    setThemesSelection(themes);
    setVisible(false);
    Alert.alert("","Theme change to " + themes.toUpperCase());
  };

  const getData = async () => {
    try {
      const themes = await AsyncStorage.getItem("themes");
      if (lan !== null) {
        setThemesSelection(themes);
        handleChange(themes);
      }
    } catch (e) {}
  };

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem("themes", value);
    } catch (e) {}
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      >
        <Logo />
        <View style={styles.centeredContainer}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigateToScreen("Game")}>
                <Text style={styles.buttonText}>Play</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigateToScreen("HowToPlay")}>
                <Text style={styles.buttonText}>How To Play</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity onPress={() => setVisible(true)}>
                <Text style={styles.buttonText}>Change Theme</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.button}>
              <TouchableOpacity onPress={() => navigateToScreen("About")}>
                <Text style={styles.buttonText}>About</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Modal
          visible={isVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setVisible(false)}
        >
          <TouchableWithoutFeedback onPress={() => setVisible(false)}>
            <View style={styles.modalContainer}>
              <TouchableWithoutFeedback onPress={() => null}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalTitle}>Choose a Theme</Text>
                  <FlatList
                    data={Object.keys(themes)}
                    renderItem={({ item }) => (
                      <TouchableOpacity onPress={() => handleChange(item)}>
                        <Text style={styles.languageText}>
                          {themes[item].name}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                  <TouchableOpacity onPress={() => setVisible(false)}>
                    <Text style={styles.closeButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#3f08a6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 30,
    width: 170,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  modalContent: {
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  modalTitle: {
    fontSize: 24,
    marginBottom: 10,
    textAlign: "center",
  },
  languageText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
    padding: 5,
  },
  closeButtonText: {
    fontSize: 18,
    color: "blue",
    textAlign: "center",
    padding: 10,
  },
});

export default Home;
