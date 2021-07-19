import React, {  useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput ,Image, ScrollView} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import SvgImg from '../svg/SvgImg';

  const CreateProduct = ({ navigation }) => {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
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
              <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
              <Text style={styles.text} >Product Image</Text>
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
                <Text style={styles.text1} >Product name</Text>
                <TextInput style={styles.input1} onChangeText={text => setProductName(text)} value={productName} />
                <Text style={styles.text2} >Product description</Text>
                <TextInput style={styles.input2} multiline={true} onChangeText={text => setDescription(text)} value={description} />
                <Text style={styles.text3} >Price</Text>
                <View style={styles.priceinput}>
                <Text style={styles.pricebox} >Ksh</Text>
                <TextInput style={styles.input3} onChangeText={text => setPrice(text)} value={price} />
                </View>
                <TouchableOpacity style={styles.buttonBox} onPress={() => navigation.navigate('CreateProduct2')}>
                    <Text style={styles.button} >Create</Text>
                   </TouchableOpacity>   
                   </ScrollView>  
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
  input2: {
    width:'100%',
    height:122,
    backgroundColor:'#f2f9ff',
    marginTop:8,
    borderWidth:1,
    borderColor:'#99ccfb',
    borderRadius:10,
    color:'#66B3FA',
    paddingLeft:10,
    fontFamily:'samsungsharpsans',
    fontWeight:'500',
    paddingTop:10,
  },
  input1: {
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
  input3: {
    width:102,
    height:44,
    backgroundColor:'#f2f9ff',
    marginTop:8,
    borderWidth:1,
    borderColor:'#99ccfb',
    borderTopRightRadius:10,
    borderBottomRightRadius:10,
    color:'#66B3FA',
    
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
  pricebox:{
    width:50,
    height:44,
    backgroundColor:'#f2f9ff',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    marginTop:8,
    borderWidth:1,
    borderColor:'#99ccfb',
    paddingTop:12,
    paddingLeft:12,
    color:'#66B3FA',
  },
  priceinput:{
    display:'flex',
    flexDirection:'row',
  },
  images:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
  }
    })

    export default CreateProduct