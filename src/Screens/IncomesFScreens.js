import React, { useState } from 'react'
import { Button, TextInput, View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Formik, useFormik } from 'formik';
import dayjs from 'dayjs';
import { Picker } from 'react-native-web';
import * as Yup from 'yup';

const IncomesFScreen = () => {
    // const [user, setUser] = useState('')
    // const [amount, setAmount] = useState('')
    // const [date, setDate] = useState(new Date())
    // const [category, setCategory] = useState('')
    // const [comments, setComments] = useState('')

    const UserList = [
        "Mayer Franklin",
        "Ross Hess",
        "Ingram Witt",
        "Mccormick Harrison",
        "Garcia Brown",
        "Ramsey Le",
        "Witt Tyler",
        "Diana Leon",
        "Millie Mcknight",
        "Daugherty Middleton"
    ]

    const CategoryList = [
        "Salaire et assimilé",
        "Revenu financier",
        "Rente",
        "Pension alimentaire",
        "Allocation chômage",
        "Prestations sociales",
        "Revenu foncier",
        "Revenu exceptionnel",
        "Autre revenu"
    ]

    const validationIncomes = Yup.object({
        user: Yup.string().required("Selectionner un bénéficiaire").oneOf(UserList),
        amount: Yup.number().required(),
        date: Yup.date().default(() => new Date()),
        category: Yup.string().required("Selectionner une catégorie").oneOf(CategoryList),
        comments: Yup.string().required()
    })

    const initialValues = {
        user: '',
        amount: '',
        date:dayjs(new Date()).format('DD/MM/YYYY'),
        category: '',
        comments: ''
    }
    const {values, handleBlur, handleChange, handleSubmit} = useFormik ({
        initialValues: { initialValues },
        validationSchema: validationIncomes,
    //onSubmit: values => alert(values)
    onSubmit:{handleSubmit}
    });



    return (


        <Formik
            initialValues={initialValues}
            validationSchema={validationIncomes}
            onSubmit={values => console.log(values)}
        >
           

            <View style={styles.container}>
                <Text style={styles.title}>Ajout Revenus</Text>

                <View style={styles.groupInput}>
                    <ScrollView>
                        <Text style={styles.label}>Bénéficiaire</Text>
                        <Picker
                            style={styles.input}
                        >
                            {UserList.map((item, index) => {
                                return (<Picker.Item label={item} value={index} key={index} />)
                            })}
                        </Picker>
                        <Text style={styles.label}>Montant</Text>
                        <TextInput
                            style={styles.input}
                            onChangeText={handleChange('amount')}
                        />
                        <Text style={styles.label}>Date</Text>
                        <TextInput
                            style={styles.input}
                            // value={dayjs(date).format('DD/MM/YYYY')}
                            onChangeText={handleChange('date')}
                            onBlur={handleBlur('date')}
                        />
                        <Text style={styles.label}>Catégorie</Text>
                        <Picker
                            style={styles.input}
                        // selectedValue={category}
                        >
                            {CategoryList.map((item, index) => {
                                return (<Picker.Item label={item} value={index} key={index} />)
                            })}
                        </Picker>
                        <Text style={styles.label}>Commentaires</Text>
                        <TextInput
                            style={styles.comments}                           
                            onChangeText={handleChange('comments')}
                            onBlur={handleBlur('comments')}
                        />
                        {/* <Button label='Enregistrer' onPress={handleSubmit} /> */}
                        <Pressable style={[styles.button,{backgroundColor:'blue'}]} onPress={handleSubmit}>
            <Text style={styles.textbutton}>Enregistrer</Text>
          </Pressable>
                    </ScrollView>
                </View>


            </View >
            
        </Formik>
    )
}
export default IncomesFScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'

    },
    groupInput: {
        flex: 1,

    },
    input: {
        height: 40,
        width: 300,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center'
    },
    comments: {
        height: 100,
        width: 300,
        marginTop: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        alignContent: 'center'
    },

    label: {
        fontSize: 20,
        marginTop: 20,
    },
    button:{
        borderRadius:20,
        height:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        margin:20,
        flex:1
      },
      textbutton:{
        fontSize:20,
        textAlign:'center',
        padding:10,
        color:'#fff'
      },
})
