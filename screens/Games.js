import { StyleSheet } from 'react-native'
import React from 'react'
import SlotMachine from '../components/SlotMachine'
import { SafeAreaView } from 'react-native-safe-area-context';
const Games = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SlotMachine/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Games