import { StyleSheet, Animated, Text, View, Button } from 'react-native'
import { React, useRef } from 'react'

const App = () => {
  const anim = useRef(new Animated.Value(0)).current;

  const move = () => {
    Animated.timing(anim, {
      toValue: 100,
      duration: 3000,
      useNativeDriver: false
    }).start();
  }

  const obj = {position:"relative", top: anim, left: 0}

  return (
    <View style={styles.container}>
      <Animated.View style={{...styles.box, ...obj }}>
        <Text>App</Text>
      </Animated.View>
      <Button title='click' onPress={move}></Button>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  box: {
    
    height: 150,
    width: 150,
    backgroundColor: "tomato"

  }

})