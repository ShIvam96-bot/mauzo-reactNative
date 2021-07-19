import React, {useState} from 'react';
import { View ,  Text, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
import SvgVector from '../svg/SvgVector';



const Home = ({navigation}) => {

  const [email, setEmail] = useState('');

  

  const submit = () => {
    navigation.navigate('Registration1');
  }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
            </View>
        <View style={styles.body}>
            <Text style={styles.text1}>Hi,</Text>
            <Text style={styles.text2}>Let's get you started with an account</Text>
            <Text style={styles.text3}>Email</Text>
            <TextInput style={styles.input}  onChangeText= {text => 
              setEmail(text)} value={email}>
            </TextInput>
            <View style={styles.touchable}>
              <TouchableOpacity onPress = {submit} >
              <Text style={styles.text4} > <SvgVector />     Continue</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.contain}>
              <Text style={styles.text5}>Already have an account?</Text>
              <Text style={styles.text6}>Log in</Text>
            </View>
        </View>
      </View>
    );
    }
    const styles = StyleSheet.create({
      touchable:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end',
      },
        container: {
          flex:1,
          backgroundColor: '#fff',
          flexDirection:'column',
          paddingLeft:20,
          paddingRight:20,
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
        input: {
          borderWidth:1,
          borderColor:'#99ccfb',
          borderRadius:10,
          height:44,
          width:'100%',
          backgroundColor:'#f2f9ff',
          marginTop:8,
          color:'#66B3FA',
          paddingLeft:10,
          fontFamily:'samsungsharpsans',
          fontWeight:'500',
        },
        text4: {
          color:'#0080F6',
          marginTop:50,
          paddingLeft:10,
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
        }
      });
      


export default Home;