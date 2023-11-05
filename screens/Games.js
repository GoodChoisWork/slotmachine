import { View, Text } from 'react-native'
import React from 'react'
import SlotMachine from '../components/SlotMachine'
import { SafeAreaView } from 'react-native-safe-area-context';
const Games = () => {
  return (
    <SafeAreaView>
      <SlotMachine/>
    </SafeAreaView>
  )
}

export default Games