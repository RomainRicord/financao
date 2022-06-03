import {View,Text} from 'react-native'

const TransactionComponent = (props) => {

    const {name,category,date,montant} = props

    return(
    <View style={{display:'flex',justifyContent:'space-between',height:100,alignItems:'center',flexDirection:'row'}}>
        <View style={{display:'flex',flexDirection:'column',margin:20}}>
            <Text style={{fontWeight:'bold'}}>{name}</Text>
            <Text>{category}</Text>
            <Text>{date}</Text>
        </View>
        <Text style={{margin:20,fontWeight:'bold',color:montant < 0 ? "red" : "green"}}>{montant < 0 && "-" }{montant > 0 && "+" } {Math.abs(montant)} €</Text>
    </View>)
}

export default TransactionComponent