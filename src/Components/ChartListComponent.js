
import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions} from 'react-native';
import { LineChart,  BarChart,  PieChart, ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit'
import ChartComponent from './ChartComponent';


const ChartListComponent = () => { 
  const [text, setText] = React.useState('');

  const list = require ('../../assets/test.json');
  const PieData= require ('../../assets/test.json');



    
  return (



          
          <ScrollView  style={{display:'flex', flexDirection:'row'}}>

            

              {
              
              list.map((item, index) => {
                  return (
                      <ChartComponent item={item} key={index} index={index}/>
              )
                  })}
          </ScrollView>
       






  );
};

export default ChartListComponent

const styles = StyleSheet.create({})