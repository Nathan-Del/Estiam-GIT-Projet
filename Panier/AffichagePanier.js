import React, { useEffect, useState } from 'react'
import { StyleSheet,ScrollView, Text } from 'react-native'
import { Firebase,db } from '../Firebase/firebase'
import ProduitsDuPanier from './ProduitsDuPanier'
import AffichagePaniervide from './AffichagePaniervide'
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function AffichagePanier({ user }) {
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([])
    const paniervide = []
    const newpanier = []
    const navigation = useNavigation()
    console.log('pouet',user.panier)
    
    // const ValiderPanier = () =>{
    //     if(user.panierValide[0] != undefined){
            
    //        db.collection("user").doc(user.id).update({panierValide: user.panier})
    //        db.collection("user").doc(user.id).update({ panier: paniervide})
    //        navigation.replace("Home", {screen: "Panier"})
    //     }
    //     else{
    //         db.collection("user").doc(user.id).update({ panierValide: user.panier })
    //         db.collection("user").doc(user.id).update({ panier: paniervide})
    //         navigation.replace("Home", {screen: "Panier"})
    //     }
        
    }


    const mapid = []

    if (user.panier.length != 0) {
        useEffect(() => {
            user.panier.map(item =>
                mapid.push(item.id)
            )
            const loadDetail = () => Firebase.product().where("__name__", "in", mapid).onSnapshot(
                (query) => {
                    const list = []
                    query.forEach(doc => {
                        const { nom, prix, pathimage } = doc.data()
                        list.push({
                            id: doc.id,
                            nom,
                            prix,
                            pathimage
                        })
                    })
                    setDetail(list)
                    setLoading(true)
                }
            )
            loadDetail()


        }, [user])



        const renderProduct = () => {
            return detail.map(item =>
                <ProduitsDuPanier prod={item} user={user} key={item.id} />

            )
        }



        return( 
        <ScrollView>
            {renderProduct()}
            {/* <Button mode="contained" style={{width:"70%", backgroundColor:"green", marginLeft:50, marginTop:20}} onPress={() => ValiderPanier() } >Valider ma commande</Button> */}
        </ScrollView>
        )
    }
    else {
        return <AffichagePaniervide />
    }
}


export default AffichagePanier