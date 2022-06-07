import * as React from 'react';
import { View, Text, StyleSheet, screenWidth } from 'react-native';
import { PieChart, chartConfig} from 'react-native-chart-kit'
import ChartListComponent from './ChartListComponent';


const ChartComponent = (props) => {

const {item, index} = props


const PieData = require ('../../assets/test.json');



return ( 

    <View style={styles.card}>
        
      <Text style={styles.prenom}>{item.date}</Text>
      <Text style={styles.amount}>{item.amount}</Text>
      <Text style={styles.category}>{item.category}</Text>
      <Text style={styles.comment}>{item.comment}</Text>
      <Text style={styles._id_income}>{item._id_income}</Text>


      
    </View>,

<View>

<PieChart
      data={PieData}
      width={screenWidth}
      height={220}
  
      accessor="amount"
      backgroundColor="transparent"
      paddingLeft="15"
      absolute
    />
</View>
    
                   
)


}

export default ChartComponent

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e6f1ff',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    height: 100,
  },
  solde: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
  },
  prenom: {
    fontSize: 20,
    color: '#000',
  },
  nom : {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  }

})

