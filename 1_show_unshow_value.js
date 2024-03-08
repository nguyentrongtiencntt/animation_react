import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import {Animated,Button, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const anim = useRef(new Animated.Value(0)).current;

  const show=()=>{
    Animated.timing(anim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    } ).start();

  }
  const unshow = ()=>{
    Animated.timing(anim, {
      toValue: 0,
      useNativeDriver: true,
      duration: 1000
    }).start();
  }
  
  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: anim}}>
        <Text>js to start working on your app!</Text>
      </Animated.View>
      <View>
        <Button title="click to show" onPress={show}></Button>
        <Button title="click to unshow" onPress={unshow}></Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
