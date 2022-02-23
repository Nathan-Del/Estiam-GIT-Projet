import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, StyleSheet, ImageBackground } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { auth, db } from '../Firebase/firebase';
import { TextInput, Button } from 'react-native-paper';
function RegisterScreen({ navigation }) {

    const [nom, setTextNom] = useState("")
    const [prenom, setTextPrenom] = useState("")
    const [email, setTextMail] = useState("")
    const [rpassword, setTextPassword] = useState("")


    const nav = () => {
        const data = {
            nom: nom,
            prenom: prenom,
            email: email,
            rpassword: rpassword
        }

       
        auth.createUserWithEmailAndPassword(email, rpassword)
            .then(() => {
                createElement(nom, prenom, email, rpassword)
            })

        navigation.replace("LoginPage")
    }

    const createElement = (nom, prenom, email, rpassword) => {
        db.collection("user").add({ nom: nom, prenom: prenom, email: email.toLowerCase(), password: rpassword, panier: [], panierValide: [] })
            .then(() => {
                console.log("user create")
            })
    }

    return (
        <View style={styles.container}>
            <View>
                <TextInput
                    style={styles.input}
                    mode="outlined" label="Nom" left={<TextInput.Icon name="account" />}
                    onChangeText={(text) => setTextNom(text)}
                    
                />

                <TextInput
                    style={styles.input}
                    mode="outlined" label="Prenom" left={<TextInput.Icon name="account" />}
                    onChangeText={(text) => setTextPrenom(text)}

                />

                <TextInput
                    style={styles.input}
                    mode="outlined" label="Mail" left={<TextInput.Icon name="email" />}
                    onChangeText={(text) => setTextMail(text)}

                />

                <TextInput
                    style={styles.input}
                    mode="outlined" label="Password" left={<TextInput.Icon name="lock" />}
                    onChangeText={(text) => setTextPassword(text)}

                />
                <Button style={styles.button} mode="contained" onPress={nav}>Register</Button>
            </View>
            <StatusBar style="light" />
            <View>

            </View>
            <ImageBackground style={styles.image} source={require('../background2.png')}>
            </ImageBackground>
            <StatusBar style="dark"/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 100,
        flex: 1,
        backgroundColor:'white'
    },
    input: {

        alignSelf: 'center',
        marginTop: 10,

        width: "60%",
        height: 40

    },
    image: {
        flex: 1
    },
    button: {
        width: "50%",
        marginLeft: 90,
        marginTop: 10


    },

});


export default RegisterScreen
