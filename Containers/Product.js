import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

function country (item) {
  return item.country + (item.city ? ', ' + item.city : '')
}

export const Car = ({ item }) => {
  return (
    <TouchableOpacity style={{ width: '50%', marginBottom: 32 }}>
      <Image source={item.preview}/>
      <Text style={{ fontSize: 12, marginVertical: 15 }}>{item.name}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Text style={{ marginRight: 10, fontSize: 18 }}>{item.price}$</Text>
        <Text style={{ fontSize: 12, color: '#818181' }}>254400 сом</Text>
      </View>
      <Text style={{ fontSize: 12, marginBottom: 7 }}>{country(item)}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image source={require('../Images/ava.png')} style={{ marginRight: 7 }}/>
        <Text style={{ color: '#636363', fontSize: 10 }}>2 часа назад</Text>
      </View>
    </TouchableOpacity>
  )
}

export const CarParameters = ({ item }) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <Text style={{ fontSize: 16, marginVertical: 5 }}>{item.name}, {item.year} г</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5 }}>
        <Text style={{ marginRight: 10, fontSize: 18 }}>{item.price}$</Text>
        <Text style={{ fontSize: 12, color: '#818181' }}>254400 сом</Text>
      </View>
      <Text style={{ fontSize: 12, marginBottom: 7 }}>{country(item)}</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 10 }}>
        <Image source={require('../Images/ava.png')} style={{ marginRight: 7 }}/>
        <Text style={{ color: '#636363', fontSize: 10 }}>2 часа назад</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ marginBottom: 10 }}>
        {item.images.length > 0 ? (item.images.map(image => (
          <Image source={image} style={{ marginRight: 5 }}/>
        ))) : <Image source={item.preview}/>}
      </ScrollView>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ marginRight: 50 }}>
          <Text>{item.distance} км</Text>
          <Text>{item.volume}</Text>
          <Text>Роботизированная</Text>
        </View>
        <View>
          <Text>{item.dunit}</Text>
          <Text>{item.model}</Text>
          <Text>{item.color}</Text>
        </View>
      </View>

    </View>
  )
}
