import React, {useState} from 'react';
import { StyleSheet} from 'react-native';

import Navigation from './src/Navigation/Navigation';
import UserComponent from './src/Components/UserComponent';
import UserListComponent from './src/Components/UserListComponent';

import TransactionComponent from './src/Components/TransactionComponent';
import HomeScreen from './src/Screens/HomeScreen';
import ChartComponent from './src/Components/ChartComponent';
import AppBarBottom from './src/Navigation/AppBarBottom';
import IncomesFScreens from './src/Screens/IncomesFScreens'
import ExpensesFScreen from './src/Screens/ExpensesFScreen';

>>>>>>> Stashed changes

{/* ____________function App_____________ */}   
function App() {
  return (
    <ExpensesFScreen/>
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
