import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Firebase, db, auth } from '../Firebase/firebase'
import firebase from "firebase";
import { Card, ListItem,  Icon } from 'react-native-elements'
import { TextInput, Button } from 'react-native-paper';
import Panier from '../Panier/Panier';




export default function Prod({ prod }) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])


    useEffect(() => {
        
        const loadUser = () => Firebase.user().where("email", "==", auth.currentUser.email).onSnapshot(
            (query) => {
                const list = []
                query.forEach(doc => {
                    const { panier } = doc.data()
                    list.push({
                        id: doc.id,
                        panier,

                    })
                })
                setUser(list)
                setLoading(false)
            }
        )

        loadUser()
       
    }, [])
    // let iddoc = ""
    // user.map(item =>
    //     iddoc = item.id
    // )

    // const found = () => {
    //     if (user[0].panier[0] != undefined) {
    //         console.log(user[0].panier.find(element => element.id == prod.id))
    //         return user[0].panier.find(element => element.id == prod.id);
    //     }
    //     else {
    //         return undefined
    //     }
    // }


    // const addbasket = (id) => {

    //     if (found() != undefined) {

    //         const i = (element) => element.id == id;
    //         const index = user[0].panier.findIndex(i);
    //         const nombre = user[0].panier[index].nb
    //         const newpanier = {
    //             id: id,
    //             nom: prod.nom,
    //             description: prod.description,
    //             nb: nombre + 1,
    //             image: prod.pathimage,
    //             prix: prod.prix
    //         }
    //         user[0].panier[index] = newpanier;
    //         db.collection("user").doc(iddoc).update({ panier: user[0].panier })
    //     }
    //     else {
    //         const newpanier = {
    //             id: id,
    //             nom: prod.nom,
    //             description: prod.description,
    //             nb: 1,
    //             image: prod.pathimage,
    //             prix: prod.prix
    //         }
    //         db.collection("user").doc(iddoc).update({ panier: firebase.firestore.FieldValue.arrayUnion(newpanier)})
    //         if(user[0].panier[0] == undefined) {
    //             navigation.replace("Home")
    //         }          
            
    //     }
    // }

    const navigation = useNavigation();

    return (

        <View >  
            <Card containerStyle={styles.card}>
                <Card.Title>{prod.nom} </Card.Title>
                <Card.Divider />
                <Card.Image style={styles.image}source={{ uri: prod.pathimage }} />
                <Text style={styles.text}>
                {prod.prix}€
                </Text>
                {/* <Button buttonStyle={styles.button}  onPress={() => { navigation.replace("Detail", prod.id) }} >Detail</Button>
                <Button buttonStyle={styles.button}  onPress={() => addbasket(prod.id)} >Ajouter au panier</Button> */}
            </Card>     
        </View>

    )
}
const styles = StyleSheet.create({
     text:{
         textAlign:'center',
         color:'green',
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
