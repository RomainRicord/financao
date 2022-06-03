import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {  StyleSheet,  Text,  View,  Image,  TouchableOpacity,} from "react-native";
 
function HomeScreen({navigation}) {

 
  return (


        <View style={styles.container}>
            
    {/* Comment here */}    
            <StatusBar style="auto" />
         
            <Image style={styles.image} source={require("./../../assets/euro.gif")} />

            <Text>Wntrez votre application financière préférée!!!</Text>
            <Text>Financao</Text>

        
            <TouchableOpacity style={styles.loginBtn}
              onPress={() => navigation.navigate('Login')}
            >
                <Text style={styles.loginText}>Entrez</Text>
            </TouchableOpacity>





        </View>

  );
}

export default HomeScreen
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
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