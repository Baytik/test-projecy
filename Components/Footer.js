import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const Footer = () => {
  return (
    <View style={{ marginBottom: 10, paddingTop: 10, flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 1, borderTopColor: '#ccc' }}>
      <View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Image source={require('../Icons/home.png')} style={{ width: 20, height: 20 }}/>
          <Text style={{ marginTop: 15, color: 'red', fontSize: 12 }}>Главная</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Image source={require('../Icons/notification.png')} style={{ width: 20, height: 20 }}/>
          <Text style={{ marginTop: 15, color: 'black', fontSize: 12 }}>Уведомления</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Image source={require('../Icons/add.png')} style={{ width: 20, height: 20 }}/>
          <Text style={{ marginTop: 15, color: 'red', fontSize: 12 }}>Добавить</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Image source={require('../Icons/health.png')} style={{ width: 23, height: 20 }}/>
          <Text style={{ marginTop: 15, color: 'black', fontSize: 12 }}>Избранные</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Image source={require('../Icons/user.png')} style={{ width: 20, height: 25 }}/>
          <Text style={{ marginTop: 12, color: 'black', fontSize: 12 }}>Профиль</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Footer