import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const UserComponent = (props) => {

const {item, index,revenu} = props

return ( 

    <View style={styles.card}>
      <Text style={styles.prenom}>{item.user.split(' ')[0]}</Text>
      <Text style={styles.nom}>{item.user.split(' ')[1]}</Text>
      <Text style={Number(revenu) < 0 ? styles.soldenegative : styles.solde}>{(Number(revenu)).toLocaleString('en-US', {style: 'currency',
  currency: 'USD',
})}</Text>
      <Text>Solde</Text>
     
    </View>
                   
)


}

export default UserComponent

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
    width:150
  },
  solde: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'blue',
  },
  soldenegative: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'red',
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

