import { StyleSheet , ImageBackground} from 'react-native'
import React from 'react'
import SlotMachine from '../components/SlotMachine'
import { SafeAreaView } from 'react-native-safe-area-context';
const Games = () => {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground
        source={require("../assets/background/bg-1.jpg")}
        resizeMode="cover"
        style={styles.backgroundImage}
      > 
      <SlotMachine/>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },
  backgroundImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Games