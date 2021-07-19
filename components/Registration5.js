import React from 'react';
import { View , TouchableOpacity, Image, Text, StyleSheet } from 'react-native';
import SvgRegistration from '../svg/SvgRegistration.js.js';

const Registration5 = ({navigation}) => {

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            {/* <Image style={styles.img} source={require('./images/Home.png')}/> */}
            <SvgRegistration/>
        </View>
        <View style={styles.body}>
          <Text style={styles.text1}>Account created successfully!</Text>
          <Text style={styles.text2} >Let’s set up your store</Text>
          </View >
          <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonBox} onPress = { () => navigation.navigate('CreateStore')}>
              <Text style={styles.button}>Set up Store</Text>
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
      });
      export default Registration5;