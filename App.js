import React, {useState} from 'react';
import { StyleSheet} from 'react-native';

//import Navigation from './src/Navigation/Navigation';
import HomeScreen from './src/Screens/HomeScreen';


{/* ____________function App_____________ */}   
function App() {
  return (
    <HomeScreen/>    
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
