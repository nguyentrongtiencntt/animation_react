import { StyleSheet, Animated, Text, View, Button } from 'react-native'
import { React, useRef } from 'react'

const App = () => {
  const anim = useRef(new Animated.Value(0)).current;

  const inter = anim.interpolate({
    inputRange: [0,0.5,1],
    outputRange:["rgb(255, 99, 71)","rgb(99, 255, 71)", "rgb(99, 71, 255)"]
  })
  const move = () => {
    Animated.timing(anim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false
    }).start();
  }

  const obj = { backgroundColor: inter}

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
    width: 150

  }

})