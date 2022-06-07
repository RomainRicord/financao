import React from 'react';
import {StyleSheet, View,Dimensions,SafeAreaView,Text} from 'react-native';

import {  LineChart,   BarChart,  PieChart,  ProgressChart, ContributionGraph, StackedBarChart} from 'react-native-chart-kit'

import {chart} from '../json/chart'

const ChartComponent = () => {

    return (
        <View style={styles.container}>
        
        <BarChart
          data={chart().line}
          width={Dimensions.get('window').width} // from react-native
          height={220}
          yAxisLabel={'€'}
          chartConfig={{
            backgroundColor: '#07034e',
            backgroundGradientFrom: '#07034e',
            backgroundGradientTo: '#090979',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0
            }
          }}
          bezier
          style={{
            borderRadius: 0
          }}
        />
      </SafeAreaView>      
    )
}

export default ChartComponent

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:'center',
      alignItems:'center',
    }
    
});