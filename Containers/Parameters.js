import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Parameters = () => {
  return (
    <TouchableOpacity style={{ borderRadius: 15, borderColor: '#DFDFDF', borderWidth: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
        <Text style={{ fontSize: 18, marginLeft: 10 }}>Параметры</Text>
        <Image source={require('../Icons/parameters.png')} style={{ width: 25, height: 25, marginRight: 10 }}/>
      </View>
    </TouchableOpacity>
  )
}

export default Parameters