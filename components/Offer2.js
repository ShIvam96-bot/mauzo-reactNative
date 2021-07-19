import React from 'react';
import { View , TouchableOpacity, Text, StyleSheet } from 'react-native';
import SvgCampaign from '../svg/SvgCampaign.js';

const Offer2 = ({navigation}) => {

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            <SvgCampaign style={styles.img}/>
        </View>
        <View style={styles.body}>
          <Text style={styles.text1}>Campaign created successfully!</Text>
          </View >
          <View style={styles.footer}>
          <TouchableOpacity style={styles.buttonBox} onPress = { () => 
            navigation.navigate('Dashboard')}>
              <Text style={styles.button}>Go back to campaigns</Text>
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
      });
      export default Offer2;