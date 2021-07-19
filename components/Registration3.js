import React, {useState} from 'react';
import { View ,TouchableOpacity , Text,TextInput, StyleSheet } from 'react-native';
import SvgLowerbar from '../svg/SvgLowerbar';
import SvgVector from '../svg/SvgVector';

const Registration3 = ({navigation}) => {

    const [number, setNumber] = useState('');

  const submit = () => {
    navigation.navigate('Registration4');
  }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
        </View>
        <View style={styles.body}>
          <Text style={styles.text1}>Hi,</Text>
          <Text style={styles.text2}>We need your number to alert you about orders </Text>
          <View style={styles.inputBox}>
          <Text style={styles.text3} >Phone Number</Text>
          <TextInput style={styles.input} onChangeText= {text => setNumber(text)} value={number} />
          </View>
          <View style={styles.touchable}>
          <TouchableOpacity onPress = {submit} >
            <Text style={styles.text4} ><SvgVector />     Continue</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.contain}>
            <Text style={styles.text5}>Already have an account?</Text>
            <Text style={styles.text6}>Log in</Text>
          </View>
        </View>
        <View style={styles.lowerbar}>
          <SvgLowerbar/><SvgLowerbar/><SvgLowerbar/>
        </View>
      </View>
    );
    }
    const styles = StyleSheet.create({
        container: {
          flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
         paddingLeft:20,
         paddingRight:20,
        },
        lowerbar:{
          display:'flex',
          flexDirection:'row',
          alignItems:'flex-start',
        },
        header: {
          flex:1,
        },
        body: {
          flex:1,
        },
        text1: {
          fontSize:10,
          fontWeight:'700',
          color:'#666666',
          fontFamily:'samsungsharpsans-medium',
        },
        text2: {
          fontWeight:'700',
          paddingTop:10,
          fontSize:13,
          fontFamily:'samsungsharpsans-medium',
        },
        text3: {
          
          fontSize:10,
          paddingTop:35,
          fontSize:10,
          fontWeight:'500',
          fontFamily:'samsungsharpsans',
        },
        input: {
          width:'100%',
          height:44,
          backgroundColor:'#f2f9ff',
          marginTop:8,
          borderWidth:1,
          borderColor:'#99ccfb',
          borderRadius:10,
          color:'#66B3FA',
          
          paddingLeft:10,
          fontFamily:'samsungsharpsans',
          fontWeight:'500',
        },
        text4: {
          color:'#0080F6',
          marginTop:50,
          fontFamily:'samsungsharpsans-medium',
        },
        text5: {
          alignItems:'center',
          marginTop:50,
          fontFamily:'samsungsharpsans-medium',
        },
        text6: {
          color:'#0080F6',
          alignItems:'center',
          marginTop:50,
          paddingLeft:10,
          fontFamily:'samsungsharpsans-medium',
        },
        contain : {
          flexDirection:'row',
        },
        touchable:{
          display:'flex',
          flexDirection:'row',
          alignItems:'flex-end',
          justifyContent:'flex-end',
        },
      });
      export default Registration3;