import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Card, ListItem,  Icon } from 'react-native-elements'
import { Button } from 'react-native-paper';

export default function Infoproduct({ info }) {
    const navigation = useNavigation();
   
    return (
        <View>
            <Card containerStyle={styles.card}>
                <Card.Title>{info.nom}</Card.Title>
                <Card.Divider />
                <Card.Image style={styles.image}source={{ uri: info.pathimage }} />
                <Text style={styles.text1}>
                {info.prix}€
                </Text>
                <Text style={styles.text}>
                {info.description}
                </Text>
                <Button  onPress={() => {  navigation.replace("Home") }} >Revenir aux produits</Button>
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
