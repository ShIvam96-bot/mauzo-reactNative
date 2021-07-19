import React from 'react';
import { View , TouchableOpacity, Text, StyleSheet } from 'react-native';
import SvgProduct from '../svg/SvgProduct.js';

const DashProduct2 = ({navigation}) => {

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <SvgProduct style={styles.img}/>
        </View>
        <View style={styles.body}>
          <Text style={styles.text1}>Product created successfully!</Text>
          <Text style={styles.text2} >Create an offer to get more sales for your product</Text>
          </View >
          <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonBox} onPress = { () => navigation.navigate('CreateOffer')}>
              <Text style={styles.button}>Create an offer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.link} onPress = { () => navigation.navigate('Dashboard')}>
              <Text style={styles.linktext}>Go back</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
    }
    const styles = StyleSheet.create({
        img: {
            height:210,
            width:210,
            
            marginTop:50,
        },
        buttonBox: {
            height:44,
            width:320,
            backgroundColor:'#0080F6',
            borderRadius:10,
            alignItems:'center',
            justifyContent:'center',
        },
        container: {
          flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
          alignItems:'center',
        },
        header: {
          flex:2,
        },
        body: {
          flex:1,
        },
        footer: {
            flex:1,
            flexDirection:'column',
            alignItems:'center',
        },
        text1: {
         alignItems:'center',
         justifyContent:'center',
         fontSize:15,
         fontWeight:"700",
         textAlign:'center',
         fontFamily:'samsungsharpsans-medium',
        },
        text2: {
            alignItems:'center',
            justifyContent:'center',
            fontSize:10,
            fontWeight:"500",
            textAlign:'center',
            marginTop:20,
            fontFamily:'samsungsharpsans',
        },  
        button: {
            color:'#fff',
            fontSize:12,
            fontFamily:'samsungsharpsans-medium',
            },
            img: {
                height:200,
                width:200,
                marginTop:80,
            },
            linktext:{
              color:'#0080F6',
              marginTop:30,
            }
      });
      export default DashProduct2;