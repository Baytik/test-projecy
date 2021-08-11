import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

const Header = ({ burger, logo, search, back, navigation }) => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
      <View style={back ? { marginRight: '25%' } : { display: 'none' }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../Icons/back.png')} style={{ width: 24, height: 24 }}/>
        </TouchableOpacity>
      </View>
      <View style={burger ? { marginRight: '25%' } : { display: 'none' }}>
        <TouchableOpacity>
          <Image source={require('../Icons/burger-menu.png')} style={{ width: 24, height: 24 }}/>
        </TouchableOpacity>
      </View>
      <View style={logo ? { marginRight: '20%' } : { display: 'none' }}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image source={require('../Icons/logo.png')} style={{ width: 150, height: 25 }}/>
        </TouchableOpacity>
      </View>
      {search && (
        <View>
          <TouchableOpacity>
            <Image source={require('../Icons/search-icon.png')} style={{ width: 24, height: 24 }}/>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Header