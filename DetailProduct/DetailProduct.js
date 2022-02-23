import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native';
import  {Firebase} from './../Firebase/firebase'
import Infoproduct from './Infoproduct';
import { auth } from '../Firebase/firebase';

function DetailProduct({route}) {
    
    const [loading, setLoading] = useState(true)
    const [detail, setDetail] = useState([])

    
    useEffect(() => {
        
        const loadDetail = () =>  Firebase.product().where("__name__","==",route.params).onSnapshot(
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
                setDetail(list)
                setLoading(false)
            }
        )
        
        loadDetail()
    }, [])
    const renderDetail = () => {
        return detail.map(item =>
            <Infoproduct info={item} key={item.id} />
        )
    }

    if (loading) {
        return null
    }

    return (
        
        <View>
            {renderDetail()}
        </View>
    )
}

export default DetailProduct
