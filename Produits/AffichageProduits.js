
import React, { useEffect, useState } from 'react'
import {ScrollView,Text, View, StyleSheet, Button } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import Firebase, { FirebaseProvider } from '../Firebase'
import Product from '../Product/product'


function AffichageProduits({}) {


    return (
      
            <ScrollView>   
            <FirebaseProvider value={Firebase}>
                
                    <Product/>          
           
            </FirebaseProvider>
            <StatusBar style="dark"/>
            </ScrollView>
        
    )
}

const styles = StyleSheet.create({

  
    
});

export default AffichageProduits
