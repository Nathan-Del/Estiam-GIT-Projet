import React, { useEffect, useState } from 'react'
import { ScrollView,StyleSheet, Text, TextInput, View } from 'react-native';
import  {db, Firebase} from './../Firebase/firebase'
import { auth } from '../Firebase/firebase';
import AffichagePanier from './AffichagePanier';
import { StatusBar } from 'expo-status-bar';


function Panier() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])

   

    
    
    useEffect(() => {
        
        const loadUser = () =>  Firebase.user().where("email","==",auth.currentUser.email).onSnapshot(
            
            (query) => {
                const list = []
                query.forEach(doc => {
                    
                    const { panier,panierValide } = doc.data()
                    list.push({
                        id: doc.id,
                        panier,
                        panierValide
                    })
                })
                setUser(list)
                setLoading(false)
            }
   
        )
        
        loadUser()
        
    }, [])
    

    const renderAffichagePanier = () => {
        return user.map(item =>
            
            <AffichagePanier user={item} key={item.id} />)
    
        
    }

    if (loading) {
        return null
    }

    
        
    return (
            <ScrollView>
            {renderAffichagePanier()}
           
            <StatusBar style="dark"/>
             </ScrollView>
      )
    
}

export default Panier
