import React, {useState} from 'react';
import { View ,TouchableOpacity , Text,TextInput, StyleSheet } from 'react-native';
import SvgLowerbar from '../svg/SvgLowerbar';
import SvgVector from '../svg/SvgVector';

const Registration2 = ({navigation}) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

  const submit = () => {
    navigation.navigate('Registration3');
  }

    return (
        <View style={styles.container}>
        <View style={styles.header}>
            
        </View>
        <View style={styles.body}>
          <Text style={styles.text1}>We Will like to know a bit about you</Text>
          <Text style={styles.text2}>What do we call you?</Text>
          <View style={styles.inputBox}>
            <View>
          <Text style={styles.text31} >First Name</Text>
          <TextInput style={styles.input} onChangeText= {text => setFirstName(text)} value={firstName} />
          </View>
          <View>
          <Text style={styles.text3} >Last Name</Text>
          <TextInput style={styles.input2} onChangeText= {text => setLastName(text)} value={lastName}/>
          </View>
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
          <SvgLowerbar/><SvgLowerbar/>
        </View>
      </View>
    );
    }
    const styles = StyleSheet.create({
      lowerbar:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
      },
        container: {
          flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
          paddingLeft:20,
          paddingRight:20,
        },
        inputBox: {
            flexDirection:'row',
            justifyContent:'space-between',
        },
        header: {
          flex:1,
        },
        body: {
          flex:1,
        },
        text1: {
          fontSize:13,
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
          fontWeight:'500',
          fontFamily:'samsungsharpsans',
        },
        text31: {
            fontSize:10,
            paddingTop:35,
            fontWeight:'500',
            fontFamily:'samsungsharpsans',
          },
        input: {
          width:152,
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
        input2: {
            width:152,
            height:44,
            backgroundColor:'#f2f9ff',
            marginRight:20,
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
          alignItems:'flex-end',
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
      export default Registration2;