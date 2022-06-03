import React from 'react'
import {Button, TextInput,View, Text} from 'react-native';
import {Formik} from 'formik';

const IncomesScreen = () => {

    return (
        <View style={styles.container}>
            <Text>Formulaire Revenus</Text>
        </View>
    )
}
export default IncomesScreen

const styles=StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
