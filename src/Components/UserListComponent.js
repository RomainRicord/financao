
import React from 'react'
import { View, Text, ScrollView, StyleSheet} from 'react-native';
import UserComponent from './UserComponent';
import ChartComponent from './ChartComponent';


const UserListComponent = () => { 
  const [text, setText] = React.useState('');

  const list = require ('../../assets/data.json');

    
  return (

        <View style={{flex:1}}>
          
          <ScrollView horizontal={true} style={{display:'flex', flexDirection:'row'}}>

        {list.map((item, index) => {
            return (
                <UserComponent item={item} key={index} index={index}/>
        )
    })}
    </ScrollView>
        </View>
  );
};

export default UserListComponent

const styles = StyleSheet.create({})