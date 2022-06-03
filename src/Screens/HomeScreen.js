import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {  StyleSheet,  Text,  View,  Image,  TouchableOpacity,Pressable} from "react-native";
import TransactionComponent from "../Components/TransactionComponent";


const HomeScreen = ({navigation}) => {
 
  return (
  <View style={styles.container}>
        <Text style={{fontSize:40}}>Welcome Mayer Franklin!</Text>
        <View style={{backgroundColor:'rgb(32,32,32)',height:200,width:600}}>

        </View>
        <View style={{display:'flex',justifyContent:'space-around',alignItems:'center',flexDirection:'row'}}>
          <Pressable style={[styles.button,{backgroundColor:'green'}]} onPress={() => {}}>
            <Text style={styles.textbutton}>Revenu</Text>
          </Pressable>
          <Pressable style={[styles.button,{backgroundColor:'red'}]} onPress={() => {}}>
            <Text style={styles.textbutton}>Dépense</Text>
          </Pressable>
        </View>
        <View style={{backgroundColor:'rgb(200,200,200)',height:300,width:600,flex:1}}>
          <TransactionComponent name="Nom de la transaction" category="Catégorie" date="Date" montant={-10} />
          <TransactionComponent name="Nom de la transaction" category="Catégorie" date="Date" montant={10} />
        </View>
  </View>
)}

export default HomeScreen
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button:{
    borderRadius:20,
    width:200,
    height:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    margin:20
  },
  textbutton:{
    fontSize:20,
    textAlign:'center',
    padding:10,
    color:'#fff'
  },
  image: {
    marginBottom: 40,
        width: 200,
        height: 200,
        borderRadius: 100,
  },
 
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    borderWidth:  3,
    borderStyle:  'solid',
    borderColor:"#000000",
    width: "99%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color:"#2564B6"
  },
 
  loginBtn: {
    width: "90%",
    borderRadius: 2,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#2564B6",
    
  },

  signinBtn: {
    width: "90%",
    borderWidth:  3,
    borderStyle:  'solid',
    borderColor:"#000000",
    borderRadius: 2,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFFFFF",
    
  },

  creer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 22,
  },

  loginText:{
    fontWeight: "bold",
    color:"white"
  },

  signinText:{
    fontWeight: "bold",
    color:"black"
  },

  message:{
    flexDirection: "column",
    alignItems:"center",
    fontSize:"74",
  }
});