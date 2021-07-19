import React from 'react'
import {View, Text,TouchableOpacity,StyleSheet, } from 'react-native'
import DashProduct from './DashProduct'

function Campaign2({navigation}) {
    return (
       <View style={styles.container}>
           <View style={styles.body}>

           </View>
            <View style={styles.foot}>
            <TouchableOpacity style={styles.buttonBox} >
              <Text style={styles.button} onPress={() => navigation.navigate('Offer')}>Create an offer</Text>
            </TouchableOpacity>
            </View>
       </View>
    )
}
const styles = StyleSheet.create({
    buttonBox: {
        height:44,
        width:152,
        backgroundColor:'#0080F6',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:300,
        marginBottom:30,
    },
    button: {
        color:'#fff',
        fontSize:12,
        fontFamily:'samsungsharpsans-medium',

    },
    container: {
        flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
          alignItems:'center',
          paddingRight:20,
    },
    body: {
        flex:4,
    },
    foot:{
      
        display:'flex',
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
    }
})

export default Campaign2
