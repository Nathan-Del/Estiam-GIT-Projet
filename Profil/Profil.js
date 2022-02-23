import React, { useEffect, useState } from 'react'
import { Text, ScrollView, StyleSheet, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';

import User from "./User"
import  {Firebase} from './../Firebase/firebase'
import { auth } from '../Firebase/firebase';

function Profil({navigation}) {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([])

    
    
    useEffect(() => {
        const loadUser = () =>  Firebase.user().where("email","==",auth.currentUser.email).onSnapshot(
            (query) => {
                const list = []
                query.forEach(doc => {
                    const { nom, prenom,email, panierValide } = doc.data()
                    list.push({
                        id: doc.id,
                        nom,
                        prenom,
                        email,
                        panierValide
                    })
                })
                setUser(list)
                setLoading(false)
            }
        )

        loadUser()
    }, [])
    

    const renderUser = () => {
        return user.map(item =>
            <User user={item} key={item.id} />
            
        )
    }

    if (loading) {
        return null
    }

    return (
        
        <ScrollView>
            {renderUser()}
            <StatusBar style="dark"/>
        </ScrollView>
    )
}

export default Profil
