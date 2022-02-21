import React from 'react';
import AffichageProduits from './Produits/AffichageProduits';
import LoginScreen from './Login/LoginScreen';
// import RegisterScreen from './Login/RegisterScreen';
import Profil from './Profil/Profil';
// import Panier from './Panier/Panier';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import DetailProduct from './DetailProduct/DetailProduct';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Home = () =>{
  return(
    
      <Tab.Navigator >
        <Tab.Screen name="Produits" component={AffichageProduits} options={{ tabBarLabelStyle: {fontSize: 12},tabBarActiveTintColor: "#f5610a",headerTintColor:'#583FC2',tabBarIcon:()=>( <Icon name="shopping-bag"  />)}}/> 
        <Tab.Screen name="Profil" component={Profil} options={{tabBarLabelStyle: {fontSize: 12},tabBarActiveTintColor: "#f5610a",headerTintColor:'#583FC2',tabBarIcon:()=>( <Icon name="account-circle"  />)}}/>
        {/* <Tab.Screen name="Panier" component={Panier} options={{tabBarLabelStyle: {fontSize: 12},tabBarActiveTintColor: "#f5610a",headerTintColor:'#583FC2',tabBarIcon:()=>( <Icon name="shopping-cart"  />)}}/> */}
      </Tab.Navigator>
  )
}

export default function App() {
 
  return (
    <NavigationContainer   >
          <Stack.Navigator>
            <Stack.Screen name="LoginPage" component={LoginScreen} options={{headerShown:false}}/>
            {/* <Stack.Screen name="Register" component={RegisterScreen} options={{ headerTintColor:'#583FC2', headerShadowVisible:true}}/> */}
            {/* <Stack.Screen name="Detail" component={DetailProduct} options={{ headerTintColor:'#583FC2'}}/> */}
            <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
          </Stack.Navigator>
    </NavigationContainer>
      
    
  );
}



