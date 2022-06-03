import React, {useState} from 'react';
import { StyleSheet} from 'react-native';

import Navigation from './src/Navigation/Navigation';
import UserComponent from './src/Components/UserComponent';
import UserListComponent from './src/Components/UserListComponent';



{/* ____________function App_____________ */}   
function App() {
  return (
    <UserListComponent/>    
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
