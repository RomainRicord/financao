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

import {chart} from '../json/chart'

const ChartComponent = () => {

    return (
        <View style={styles.container}>
        
        <BarChart
          data={chart().line}
          width={Dimensions.get('window').width} // from react-native
          height={600}
          yAxisSuffix={' €'}
          chartConfig={{
            backgroundColor: '#07034e',
            backgroundGradientFrom: '#07034e',
            backgroundGradientTo: '#090979',
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 0,
            }
          }}
          fromZero={true}
          style={{
            borderRadius: 0
          }}
          showValuesOnTopOfBars={true}
          yAxisInterval={1}
        />
      </View>      
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