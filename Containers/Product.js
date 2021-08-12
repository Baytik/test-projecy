import React, { useEffect, useState } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Product = ({item}) => {
  const country = item.country + (item.city ? ', ' + item.city: '')
  return (
    <TouchableOpacity style={{ width: '50%', marginBottom: 32 }}>
      <Image source={item.image}/>
      <Text style={{ fontSize: 12, marginVertical: 15 }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Text style={{ marginRight: 10, fontSize: 18 }}>{item.price}$</Text>
        <Text style={{ fontSize: 12, color: '#818181' }}>254400 сом</Text>
      </View>
      <Text style={{ fontSize: 12, marginBottom: 7 }}>{country}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../Images/ava.png')} style={{ marginRight: 7 }}/>
        <Text style={{ color: '#636363', fontSize: 10 }}>2 часа назад</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Product
