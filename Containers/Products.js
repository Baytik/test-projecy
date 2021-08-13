import React from 'react'
import { Text, View } from 'react-native'
import { carStore } from '../store/carStore'
import { Car } from './Product'

const Products = () => {
  return (
    <View style={{ marginVertical: 25, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {carStore.length > 0 ? carStore.map(c => (<Car item={c} key={c.id}/>)) : <Text style={{ fontSize: 30 }}>Нет машин</Text>}
    </View>
  )
}

export default Products