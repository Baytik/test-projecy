import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const FilterButtons = ({ navigation }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' }}>
      <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 15 }}>
        <View style={{ flexDirection: 'row', margin: 12 }}>
          <Image source={require('../Icons/parameters.png')} style={{ width: 20, height: 20 }}/>
          <Text style={{ fontSize: 14, marginLeft: 5 }}>Параметры</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 15 }} onPress={() => navigation.push('Brands')}>
        <View style={{ flexDirection: 'row', margin: 12 }}>
          <Text style={{ fontSize: 14 }}>Марка модель</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#fff', borderRadius: 15 }}>
        <View style={{ flexDirection: 'row', margin: 12 }}>
          <Text style={{ fontSize: 14 }}>Регион</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FilterButtons