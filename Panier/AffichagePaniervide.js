import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
function AffichagePaniervide() {
    return (
        <View style={styles.container} >
            <Image style={styles.image} source={require('../empty-cart.png')}/>
            <Text style={styles.text}>Ton panier est vide ! </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        paddingTop:60,
    },
    text:{
        textAlign:'center',
        color:'grey',
        fontWeight:'bold',
        fontStyle: 'italic',
        fontSize: 20
       },
      
   image:{
       
       alignSelf:'center',
       resizeMode:'contain'
   },

});
export default AffichagePaniervide
