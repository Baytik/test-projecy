import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'

const Header = () => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>
      <View>
        <TouchableOpacity>
          <Image source={require('../Icons/burger-menu.png')} style={{ width: 24, height: 24 }}/>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require('../Icons/logo.png')} style={{ width: 150, height: 25 }}/>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Image source={require('../Icons/search-icon.png')} style={{ width: 24, height: 24 }}/>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Header