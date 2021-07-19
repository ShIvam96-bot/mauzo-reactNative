import React, {  useState,  useEffect } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, TextInput, ScrollView, FlatList} from 'react-native';
import SvgGroup from '../svg/SvgGroup';
import selectContacts from './selectContacts';


  const CreateOffer = ({ navigation }) => {
    const [productName, setProductName] = useState('');
    const [promotionalPrice, setPromotionalPrice] = useState('');
    const [regularPrice, setRegularPrice] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    


    
 
        return (
            <View style={styles.container}>
              <ScrollView style={styles.scroll} showsVerticalScrollIndicator={false}>
                <View >
                <Text style={styles.text1} >Select product</Text>
                <TextInput style={styles.input1}   onChangeText={text => 
                  setProductName(text)} value={productName} > 
                  </TextInput>
                </View>
                <View style={styles.pricegroup}>
                    <View>
                        <Text style={styles.text3} >Promotional Price</Text>
                        <View style={styles.priceinput}>
                            <Text style={styles.pricebox} >Ksh</Text>
                            <TextInput style={styles.input3} onChangeText={text => 
                                        setPromotionalPrice(text)} value={promotionalPrice} />
                        </View>
                    </View>
                    <View>
                      <Text style={styles.text3} >Regular Price</Text>
                     
                      <View style={styles.priceinput}>
                            <Text style={styles.pricebox} >Ksh</Text>
                            <TextInput style={styles.input3} onChangeText={text => 
                                        setRegularPrice(text)} value={regularPrice} />
                      </View>
                    </View>
                    <View>
                      <Text style={styles.text3} >Discounted Price</Text>
                      <Text style={styles.discount}>899</Text>
                    </View>
                </View>
                <View >
                      <Text style={styles.text1} >Promotion expiry date</Text>
                      <TextInput style={styles.input1} onChangeText={text => 
                              setExpiryDate(text)} value={expiryDate} />
                </View>

                 <View >
                      <Text style={styles.text1} >Select contacts</Text>
                      <TextInput style={styles.input1} onFocus={() => navigation.navigate(selectContacts)} />
                      </View>
                <View style={styles.navigat}>
                  <Text style={styles.text2}>Preview</Text>
                  <TouchableOpacity>
                  <Text style={styles.text} onPress={() => 
                            navigation.navigate('CreateOffer2')}>Edit template</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.prevbox}>
                   
                        {/* <Text></Text> */}
                </View>

                    <TouchableOpacity style={styles.buttonBox} onPress={() => 
                            navigation.navigate('Campaign')}>
                        <Text style={styles.button} >Send to contacts (Ksh)</Text>
                    </TouchableOpacity>  
                    </ScrollView>   
                </View>
        )
    }

    const styles= StyleSheet.create({
      prevbox:{
        width:240,
        height:240,
        backgroundColor:'#f2f9ff',
        borderWidth:1,
        borderColor:'#0080F6',
        borderRadius:10,
        alignSelf:'center',
        marginTop:20,
        display:'flex',
        flexDirection:'column',
        alignItems:'flex-start',
      },
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
        marginBottom:20,
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
  },
  input1: {
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
  input3: {
    width:70,
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
  text:{
    fontFamily:'samsungsharpsans-medium',
    fontWeight:'700',
    fontSize:13,
    color:'#0080F6',
  },
  text1:{
    marginTop:20,
    marginBottom:7,
    fontFamily:'samsungsharpsans',
    fontWeight:'500',
    fontSize:10,
  },
  text2:{
    fontFamily:'samsungsharpsans-medium',
    fontWeight:'700',
    fontSize:13,
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
    width:35,
    height:44,
    backgroundColor:'#f2f9ff',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    marginTop:8,
    borderWidth:1,
    borderColor:'#99ccfb',
    paddingTop:12,
    paddingLeft:5,
    color:'#66B3FA',
  },
  priceinput:{
    display:'flex',
    flexDirection:'row',
  },
  pricegroup:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
  },
  navigat:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    paddingTop:40,
  },
  discount:{
    fontFamily:'samsungsharpsans-medium',
    fontWeight:'700',
    fontSize:13,
    marginLeft:20,
  }
    })

    export default CreateOffer