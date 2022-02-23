import React, { useEffect, useState } from 'react'
import { ImageBackground, View, Text, StyleSheet, Alert, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { auth } from '../Firebase/firebase';
import { TextInput, Button } from 'react-native-paper';



function LoginScreen({ navigation }) {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
   


    const check = (mail, password) => {

        auth.signInWithEmailAndPassword(mail, password)
        auth.onAuthStateChanged(user => {
            if (user) {
                navigation.replace("Home")
            }
        })
    }

    return (
        <View style={styles.safeareaview}>
            <ImageBackground  style={styles.image} source={require('../background3.png')}>
         </ImageBackground>
         
            <View style={styles.container}>
                <View >
                    <TextInput style={styles.input} mode="outlined" label="Mail" left={<TextInput.Icon name="email" />} value={mail} onChangeText={(text) => setMail(text)} />
                    <TextInput style={styles.input} mode="outlined" label="Password" left={<TextInput.Icon name="lock" />} value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} />


                    <Button style={styles.button} mode="contained" onPress={() => { check(mail, password) }} > Connexion</Button>
                    {/* <Button style={styles.button} mode="contained"  onPress={() => { navigation.navigate("Register") }} >Register</Button> */}
                    <StatusBar style="inverted"/>
                </View>
            </View>
            <ImageBackground  style={styles.image} source={require('../background2.png')}>
         </ImageBackground>
        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        backgroundColor:'white'
        
    },
    safeareaview:{
        flex:1,
    },
    tinyLogo:{
        marginTop:"50%"
    },

    input: {
        alignSelf: 'center',
        marginTop: 10,

        width: "60%",
        height: 40

    },
    text: {
        textAlign: 'center'
    },
    button: {
        width: "50%",
        marginLeft: 90,
        marginTop: 10


    },
    image:{
        flex: 1,
        
    }
});

export default LoginScreen
