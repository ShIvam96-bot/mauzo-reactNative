import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image, Text, StyleSheet, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import SvgImg from '../svg/SvgImg';

  const CreateStore = ({ navigation }) => {
    const [storeName, setStoreName] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);


    {/*useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);*/}
  
    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
    };

    

        return (
            <View style={styles.container}>
              <Text style={styles.text} >Store Photo</Text>
              <View style={styles.images}>
              <View style={styles.imgcontainer}>
              <TouchableOpacity onPress={pickImage}>
                <SvgImg style={styles.img} /> 
                </TouchableOpacity>
                </View>
                <View>
                {image && <Image source={{ uri: image }}
               style={{ width: 70, height: 70, marginLeft:20, }} />}
                </View>
                </View>
                <Text style={styles.text1} >Store Name</Text>
                <TextInput style={styles.input} onChangeText={text => setStoreName(text)} value={storeName} />
                <Text style={styles.text2} >Shop Address</Text>
                <TextInput style={styles.input} onChangeText={text => setAddress(text)} value={address} />
                <Text style={styles.text3}>By proceeding, you agree to the Terms and Conditions and Privacy Policy.</Text>
                <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('CreateStore2')}>
                    <Text style={styles.button} >Set up Store</Text>
                   </TouchableOpacity>     
            </View>
        )
    }

    const styles= StyleSheet.create({
      container: {
         flex: 1,  
         paddingLeft:20,
         paddingRight:20,
         backgroundColor:'#fff'
      },
      buttonBox: {
        height:44,
        width:'100%',
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
  input: {
    width:'100%',
    height:44,
    backgroundColor:'#f2f9ff',
    color:'#66B3FA',
    marginTop:8,
    borderWidth:1,
    borderColor:'#99ccfb',
    borderRadius:10,
    paddingLeft:10,
          fontFamily:'samsungsharpsans',
          fontWeight:'500',
  },
  img:{
    height:22,
    width:25,
    marginLeft:20,
    marginTop:20,
  },
  text:{
    marginTop:28,
    marginBottom:7,
    fontFamily:'samsungsharpsans',
    fontWeight:'500',
    fontSize:10,
  },
  text1:{
    marginTop:20,
    marginBottom:7,
    fontFamily:'samsungsharpsans',
    fontWeight:'500',
    fontSize:10,
  },
  text2:{
    marginTop:20,
    marginBottom:7,
    fontFamily:'samsungsharpsans',
    fontWeight:'500',
    fontSize:10,
  },
  text3:{
    marginTop:20,
    marginBottom:7,
    fontFamily:'samsungsharpsans-medium',
    fontWeight:'500',
    fontSize:10,
    marginRight:40,
  },
  imgcontainer:{
    height:64,
    width:64,
    borderWidth:2,
    borderStyle:'dashed',
    borderColor:'#99CCFB',
    backgroundColor:'#f2f9ff',
    borderRadius:10,
  },
  images:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
  }
    })

    export default CreateStore