import 'react-native-gesture-handler';
  import React, {useEffect,useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/Home';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'
import Registration1 from './components/Registration1';
import Registration2 from './components/Registration2';
import Registration3 from './components/Registration3';
import Registration4 from './components/Registration4';
import Registration5 from './components/Registration5';
import CreateStore from './components/CreateStore';
import CreateStore2 from './components/CreateStore2'
import CreateProduct from './components/CreateProduct';
import CreateProduct2 from './components/CreateProduct2';
import CreateOffer from './components/CreateOffer';
import Campaign from './components/Campaign';
import CreateOffer2 from './components/CreateOffer2';
import Dashboard from './components/Dashboard';
import SvgSearch from './svg/SvgSearch';
import Offer from './components/Offer';
import DashProduct from './components/DashProduct';
import Offer2 from './components/Offer2';
import DashProduct2 from './components/DashProduct2';
import selectContacts from './components/selectContacts';

const Stack = createStackNavigator();

const MyStack = () => {
  const [loading, setLoading] = useState(false)
  
useEffect(() => {
  const font = async() => {
  await Font.loadAsync({'samsungsharpsans':require('./assets/fonts/samsungsharpsans.otf'),
  'samsungsharpsans-medium':require('./assets/fonts/samsungsharpsans-medium.otf')
})}
font()
setLoading(true) 
}, [])
if(!loading)
{
  return <AppLoading />
}
else{
  return (
    <NavigationContainer>
      <Stack.Navigator  
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f2f9ff",
        },
        headerTintColor: "#0080F6",
        headerBackTitle: "Back",
      }}>
        <Stack.Screen
        name="home"
          component={HomeScreen}
        />
        <Stack.Screen name="Registration1" component={Registration1} />
        <Stack.Screen name="Registration2" component={Registration2} />
        <Stack.Screen name="Registration3" component={Registration3} />
        <Stack.Screen name="Registration4" component={Registration4} />
        <Stack.Screen name="Registration5" component={Registration5} />
        <Stack.Screen name="CreateStore" component={CreateStore}/>
        <Stack.Screen name="CreateStore2" component={CreateStore2}/>
        <Stack.Screen name="CreateProduct" component={CreateProduct}/>
        <Stack.Screen name="CreateProduct2" component={CreateProduct2}/>
        <Stack.Screen name="CreateOffer" component={CreateOffer}/>
        <Stack.Screen name="CreateOffer2" component={CreateOffer2}/>
        <Stack.Screen name="Campaign" component={Campaign}/>
        <Stack.Screen name="Offer" component={Offer}/>
        <Stack.Screen name="Dashboard" component={Dashboard}  options={{headerRight: () => 
        (<SvgSearch/>) } }/>
       <Stack.Screen name="DashProduct" component={DashProduct}/>
       <Stack.Screen name="DashProduct2" component={DashProduct2}/>
       <Stack.Screen name="Offer2" component={Offer2}/>
       <Stack.Screen name="selectContacts" component={selectContacts}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};}

export default MyStack