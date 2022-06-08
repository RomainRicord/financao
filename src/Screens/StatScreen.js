import React from 'react';
import {StyleSheet, View,Dimensions,Platfrom,Text} from 'react-native';

import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from 'react-native-chart-kit'

import {pieIncomesChart} from '../json/pieIncomesChart'

const StatScreen = (props) => {

    const {userselected,setUserSelected} = props


    return (
        <View style={{display:'flex',justifyContent:'center',alignItems:'center',flex:1}}>
        <Text>Statistique des revenus</Text>
        <PieChart
          data={pieIncomesChart(Number(userselected)).line}
          width={200} // from react-native
          height={240}
          chartConfig={{
            backgroundColor: '#07034e',
            backgroundGradientFrom: '#07034e',
            backgroundGradientTo: '#090979',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          }}
        accessor={"amount"}
        backgroundColor={"transparent"}
        paddingLeft={"0"}
        hasLegend={false}
        center={[50 , 0]}
        style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            textAlign:'center'
        }}
        />

        
          {pieIncomesChart(Number(userselected)).line.map((item,index) => {
            return(
              <View key={index} style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                <View style={{backgroundColor:item.color,width:20,height:20,borderRadius:40,marginRight:10}}></View><Text style={{fontSize:20}}>{item.name} -> {item.amount}€</Text>
              </View>
            )
          })}
        
      </View>      
    )
}

export default StatScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    }
});