import React, { useState } from 'react'
import { StyleSheet, View, } from 'react-native'
import { auth, db } from '../Firebase/firebase'
import { useNavigation } from '@react-navigation/native'
import { TextInput, Button } from 'react-native-paper';
import { Divider, ListItem, Avatar } from 'react-native-elements';
export default function User({ user }) {
    const [nom, setTextNom] = useState(user.nom)
    const [prenom, setTextPrenom] = useState(user.prenom)
    const [email, setTextMail] = useState(user.email)
    const [rpassword, setTextPassword] = useState(user.rpassword)
    const [expanded, setExpanded] = useState(false)
   
    const navigation = useNavigation()
   
   
   
    const updateUser = () => {
        const data = {
            nom: nom,
            prenom: prenom,
            email: email,
            rpassword: rpassword
        }

        auth.currentUser.updateEmail(email).then(() => {
            console.log("email updated")
            auth.currentUser.updatePassword(rpassword)
                .then(() => {
                    console.log("email and password updated")
                    auth.signOut()
                    auth.onAuthStateChanged(user => {
                        if (!user) {
                            console.log("deco")
                            navigation.replace("LoginPage")
                        }
                    })

                })

        })


        UpdateElement(nom, prenom, email, rpassword)

    }
    const UpdateElement = (nom, prenom, email, rpassword) => {
        db.collection("user").doc(user.id).update({ nom: nom, prenom: prenom, email: email, password: rpassword })
            .then(() => {
                console.log("user update")
            })
    }
    const logout = () => {
        auth.signOut()
        auth.onAuthStateChanged(user => {
            if (!user) {
                console.log("deco")
                navigation.replace("LoginPage")
            }
        })
    }
    return (
        <View>
            <TextInput
                mode="outlined"
                style={styles.input}
                value={nom}
                onChangeText={(text) => setTextNom(text)}

            />

            <TextInput
                mode="outlined"
                style={styles.input}

                onChangeText={(text) => setTextPrenom(text)}
                value={prenom}
            />

            <TextInput
                mode="outlined"
                style={styles.input}
                onChangeText={(text) => setTextMail(text)}
                value={email}
            />
            <TextInput
                mode="outlined"
                style={styles.input}
                onChangeText={(text) => setTextPassword(text)}
                placeholder="Password"
            />


            <Button mode="contained" style={styles.button} onPress={() => { updateUser() }}>Modifier</Button>
            <Button mode="contained" style={styles.button} onPress={() => { logout() }}> logout </Button>
            <Divider />
            <ListItem.Accordion
                content={
                    <>
                        
                        <ListItem.Content>
                            <ListItem.Title>Historique de ma derniere commande</ListItem.Title>
                        </ListItem.Content>
                    </>
                }
                isExpanded={expanded}
                onPress={() => {
                    setExpanded(!expanded);
                }}
            >
                {user.panierValide.map((l, i) => (
                    <ListItem key={i}  bottomDivider>
                        <Avatar title={l.nom} source={{ uri: l.image }} />
                        <ListItem.Content>
                            <ListItem.Title style={{ color: 'green',fontWeight:'bold' }}>{l.prix*l.nb}€ </ListItem.Title>
                            <ListItem.Title style={{ color: 'red',fontWeight:'bold' }}>x{l.nb} </ListItem.Title>
                            <ListItem.Subtitle  style={{ color: 'black', }}>{l.description}</ListItem.Subtitle>
                        </ListItem.Content>
                    </ListItem>
                ))}
            </ListItem.Accordion>
        </View>

    )
}
const styles = StyleSheet.create({

    input: {
        alignSelf: 'center',
        marginTop: 10,
        width: "60%",
        height: 40

    },

    button: {
        width: "70%",
        marginLeft: 55,
        marginTop: 10,
        marginBottom: 10


    },

});