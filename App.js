import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';

import React, { useState } from 'react';

const App = () => {

  const [Boolean, setBoolean] = useState(true);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Pressable style={{backgroundColor:"red",width:100,height:50}} onPress={() => setBoolean(!Boolean)} />
      {Boolean &&
        <Text>First Component</Text>
      }
      {!Boolean &&
        <Text>Second COmponent</Text>
      }
    </View>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
