import React, { useEffect, useState } from 'react'
import { StyleSheet, ScrollView, Text } from 'react-native'
import { Firebase, db, auth } from '../Firebase/firebase'
import { Card, ListItem,  Icon } from 'react-native-elements'
import { Button } from 'react-native-paper';
import firebase from "firebase";

import { useNavigation } from '@react-navigation/native';
function ProduitsDuPanier({ prod, user}) {

    const i = (element) => element.id == prod.id;
    const index = user.panier.findIndex(i);
    const nombre = user.panier[index].nb
   const navigation = useNavigation()
    const deleteproduct = () => {

        db.collection("user").doc(user.id).update({ panier: firebase.firestore.FieldValue.arrayRemove(user.panier[index]) })
        console.log("produit deleted")
        navigation.replace("Home", {screen: "Panier"})
    }
   
    return (
        <ScrollView>

            <Card containerStyle={styles.card}>
                <Card.Title>{prod.nom}</Card.Title>
                <Card.Divider />
                <Card.Image style={styles.image} source={{ uri: prod.pathimage }} />
                <Text style={styles.text1}>
                    x {nombre}
                </Text>
                <Text style={styles.text}>
                     {prod.prix * nombre} €
                </Text>
                <Button onPress={() => deleteproduct()} >Supprimer</Button>
            </Card>
        </ScrollView>
    )
}


const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color:'green',
        fontWeight:'bold'
       },
       text1:{
        textAlign:'center',
        color:'red',
        fontWeight:'bold'
       },
   image:{
       resizeMode:'contain'
   },
   button: { 
       marginLeft: 13,
       marginTop: 10

   },
   card:{
       borderColor:'#583FC2'
   }
        

    
  

});

export default ProduitsDuPanier
