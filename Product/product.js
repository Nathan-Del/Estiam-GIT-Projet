import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { firebaseHOC } from '../Firebase'
import Prod from './prod'
import  {Firebase} from '../Firebase/firebase'


function Product({}) {
   
    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    useEffect(() => {
        
        const loadProduct = () => Firebase.product().onSnapshot(
            (query) => {
                const list = []
                query.forEach(doc => {
                    const { nom, description,pathimage,prix } = doc.data()
                    list.push({
                        id: doc.id,
                        nom,
                        description,
                        pathimage,
                        prix
                    })
                })
               setProduct(list)
                setLoading(false)
            }
        )
        loadProduct()
        
        
    }, [])

    const renderProduct = () => {
        return product.map(item =>

            <Prod prod={item} key={item.id}  />
           
        )
    }

    if (loading) {
        return null
    }

    return (
        <View>
            {renderProduct()}

            
        </View>
    )
}

export default firebaseHOC(Product)