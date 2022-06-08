import React, {useState} from 'react';
import { StyleSheet} from 'react-native';

import Navigation from './src/Navigation/Navigation';
import UserComponent from './src/Components/UserComponent';
import UserListComponent from './src/Components/UserListComponent';

import TransactionComponent from './src/Components/TransactionComponent';
import HomeScreen from './src/Screens/HomeScreen';
import ChartComponent from './src/Components/ChartComponent';
<<<<<<< Updated upstream
import IncomesFScreens from './src/Screens/IncomesFScreens';
=======
import ContScreen from './src/Screens/ContScreen';
import IncomesFScreen from './src/Screens/IncomesFScreens';

>>>>>>> Stashed changes

{/* ____________function App_____________ */}   
function App() {
  return (
<<<<<<< Updated upstream
    <IncomesFScreens/>    
=======
    <IncomesFScreen/>    
>>>>>>> Stashed changes
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
