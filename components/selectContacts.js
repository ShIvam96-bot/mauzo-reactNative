import React, {useState, useEffect, } from 'react';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity ee} from "react-native";
import * as Contacts from 'expo-contacts';

function selectContacts() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
          const { status } = await Contacts.requestPermissionsAsync();
          if (status === 'granted') {
            const { data } = await Contacts.getContactsAsync({
              // fields: [Contacts.Fields.FirstName ],
            });
    
            if (data.length > 0) {
               setContacts(data)
            }
          }
        })();
      }, []);

    return (
    <View style={styles.container}>
       
        <TouchableOpacity>
        <Text style={styles.text1}>Unselect all</Text>
       </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
        {contacts.map((item)=>  (<Text style={styles.text2}>{item.firstName} {item.lastName}</Text> ))}
    </ScrollView>
    </View>
    )
}

const styles = StyleSheet.create({
    text1:{
        marginTop:24,
        marginBottom:24,
        color:'#0080F6',
        fontFamily:'samsungsharpsans',
        fontSize:12,
        fontWeight:'700',
    },
    container:{
        backgroundColor:'#fff',
        paddingLeft:20,
        paddingRight:20,
    },
    text2:{
        fontFamily:'samsungsharpsans',
        fontSize:10,
        fontWeight:'500',
        marginBottom:43,
    }
})

export default selectContacts
