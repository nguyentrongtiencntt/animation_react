import { StyleSheet, Animated, Text, View, Button } from 'react-native'
import { React, useRef } from 'react'

const App = () => {
  const anim = useRef(new Animated.ValueXY(0)).current;

  const move = () => {
    Animated.timing(anim, {
      toValue: { x: 100, y: 200 },
      duration: 3000,
      useNativeDriver: true
    }).start(
      () => {
        Animated.timing(anim, {
          toValue: { x: 0, y: 0 },
          duration: 3000,
          useNativeDriver: true
        }).start();
      }
    );
  }
  const stop = () => {
    Animated.timing(anim, {

    }).stop();
  }

  return (
    <View style={styles.container}>
      <Button title='click' onPress={move}></Button>
      <Button title='stop' onPress={stop}></Button>

      <Animated.View style={{ ...styles.box, marginLeft: anim.x, marginTop: anim.y }}>
        <Text>App</Text>
      </Animated.View>

    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "begin",
    alignItem: "begin"
  },
  box: {
    height: 150,
    width: 150,
    backgroundColor: "tomato"

  }

})