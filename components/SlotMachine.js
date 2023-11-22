import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from "react-native";
import { themes , defaultSymbol } from "../data/data";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SlotMachine = () => {

  useEffect(()=> { getData() }, [])


  const getData = async () => {
    try {
      const thm = await AsyncStorage.getItem('themes');
      if(thm !== null){
        setSymbols(themes[thm]['symbols'])
        setSelectedSymbols1(themes[thm]['symbols'][0].image)
        setSelectedSymbols2(themes[thm]['symbols'][1].image)
        setSelectedSymbols3(themes[thm]['symbols'][2].image)
      }else{
        setSymbols(themes['cards']['symbols'])
        setSelectedSymbols1(themes['cards']['symbols'][0].image)
        setSelectedSymbols2(themes['cards']['symbols'][1].image)
        setSelectedSymbols3(themes['cards']['symbols'][2].image)
      }
    } catch (e) {
    }
  };

  const [symbols, setSymbols] = useState(null)
  const [selectedSymbols1, setSelectedSymbols1] = useState(null);
  const [selectedSymbols2, setSelectedSymbols2] = useState(null);
  const [selectedSymbols3, setSelectedSymbols3] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const doSlot = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let slot1Count = 0;
    let slot1Duration = 0;
    let slot2Count = 0;
    let slot2Duration = 0;
    let slot3Count = 0;
    let slot3Duration = 0;
    let numChanges = randomInt(1, 4) * 6;
    let numeberSlot1 = numChanges + randomInt(1, 6);
    let numeberSlot2 = numChanges + 2 * 7 + randomInt(1, 6);
    let numeberSlot3 = numChanges + 4 * 7 + randomInt(1, 6);
    let spinInterval = 100;
    let slot1 = setInterval(spin1, spinInterval);
    let slot2 = setInterval(spin2, spinInterval);
    let slot3 = setInterval(spin3, spinInterval);

    function spin1() {
      slot1Duration++;
      if (slot1Duration >= numeberSlot1) {
        clearInterval(slot1);
        return null;
      }
      if (slot1Count === 6) {
        slot1Count = 0;
      }
      setSelectedSymbols1(symbols[slot1Count++].image);
    }
    function spin2() {
      slot2Duration++;
      if (slot2Duration >= numeberSlot2) {
        clearInterval(slot2);
        return null;
      }
      if (slot2Count === 6) {
        slot2Count = 0;
      }
      setSelectedSymbols2(symbols[slot2Count++].image);
    }
    function spin3() {
      slot3Duration++;
      if (slot3Duration >= numeberSlot3) {
        clearInterval(slot3);
        testWin(slot1Count, slot2Count, slot3Count);
        return null;
      }
      if (slot3Count === 6) {
        slot3Count = 0;
      }
      setSelectedSymbols3(symbols[slot3Count++].image);
    }
  };

  const testWin = (slot1Count, slot2Count, slot3Count) => {
    if (slot1Count === slot2Count && slot2Count === slot3Count) {
      Alert.alert("","YOU WIN!");
    } else {
      Alert.alert("","YOU LOSE!");
    }
    setIsSpinning(false);
  };

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  return (
    <View style={styles.container}>
      <View style={styles.slotMachine}>
        <Image
          style={[styles.slot, {marginHorizontal: 10}, { backgroundColor: 'lightgray', }]}
          source={selectedSymbols1}
          resizeMode="contain"
        />
        <Image
          style={[styles.slot,{marginHorizontal: 10}, { backgroundColor: 'lightgray', }]}
          source={selectedSymbols2}
          resizeMode="contain"
        />
        <Image
          style={[styles.slot, {marginHorizontal: 10}, { backgroundColor: 'lightgray', }]}
          source={selectedSymbols3}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity style={styles.spinButton} onPress={doSlot}>
        <Text style={styles.spinButtonText}>SPIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  slotMachine: {
    flexDirection: "row",
    backgroundColor: 'white',
    borderRadius: 10
  },
  slot: {
    width: 100,
  },
  spinButton: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 10,
    width: 100,
  },
  spinButtonText: {
    color: "white",
    fontSize: 18,
    textAlign: 'center'
  },
});

export default SlotMachine;
