import { StyleSheet, Animated, Text, View, Button } from 'react-native'
import {React, useRef} from 'react'

const App = () => {
  const anim = useRef(new Animated.Value(0)).current;

  const move = ()=>{
    Animated.timing(anim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver:true
    } ).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.box, opacity:anim}}>
        <Text>App</Text>
      </Animated.View>
      <Button title='click' onPress={move}></Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  box:{
    height: 150,
    width: 150,
    backgroundColor:"tomato"
    
  }

})