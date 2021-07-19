import React from 'react';
import {View,Text, TextInput, StyleSheet,TouchableOpacity} from 'react-native';

function Registration4 ({navigation}) {

    return (
       <View style={styles.container}>
           <View style={styles.header}>

               <Text style={styles.text1} >Enter your authentication code to proceed.</Text>
               <Text style={styles.text2} >Type the code sent to     in the field below.</Text>
           </View>
           <View style={styles.boxes}>
               <TextInput style={styles.box} maxLength={1} textContentType={'oneTimeCode'} />
               <TextInput style={styles.box} maxLength={1} textContentType={'oneTimeCode'}/>
               <TextInput style={styles.box} maxLength={1} textContentType={'oneTimeCode'}/>
               <TextInput style={styles.box} maxLength={1} textContentType={'oneTimeCode'}/>
               <TextInput style={styles.box} maxLength={1} textContentType={'oneTimeCode'}/>
               <TextInput style={styles.box} maxLength={1} textContentType={'oneTimeCode'}/>
           </View>
           <View style={styles.footer}>
               <Text style={styles.text3}>It may take a minute to receive your code.
                Haven’t received it? Resend a new code</Text>
                <TouchableOpacity style={styles.buttonBox} onPress = { () => 
                    navigation.navigate('Registration5')}>
                    <Text style={styles.button}>Verify</Text>
                </TouchableOpacity>
           </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        flex:1,
        backgroundColor:'#fff',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingRight:20,
        paddingLeft:20,
    },
    header:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        marginTop:100,
    },
    text1:{
        fontFamily:'samsungsharpsans',
        fontSize:13,
        fontWeight:'700',

    },
    text2:{
        fontFamily:'samsungsharpsans',
        fontWeight:'500',
        fontSize:10,
        marginTop:10,
    },
    boxes:{
        display:'flex',
        flexDirection:'row',
        alignItems:'flex-start',
        justifyContent:'space-between',
        marginTop:40,
    },
    box:{
        height:44,
        width:44,
        borderWidth:1,
        backgroundColor:'#f2f9ff',
        borderRadius:10,
        marginRight:15,
        borderColor:'#99ccfb',
        color:'#66B3FA',
        fontFamily:'samsungsharpsans',
        fontWeight:'500',
        textAlign:'center',
    },
    buttonBox: {
        height:44,
        width:320,
        backgroundColor:'#0080F6',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        marginTop:40,
    },
    button: {
        color:'#fff',
        fontSize:12,
        fontFamily:'samsungsharpsans-medium',

    },
   text3: {
       display:'flex',
       alignSelf:'center',
       marginTop:20,
       fontFamily:'samsungsharpsans',
       fontWeight:'500',
       fontSize:10,
       paddingLeft:40,
       paddingRight:30,
   }
})

export default Registration4;
