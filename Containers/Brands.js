import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input/index'
import Header from '../Components/Header'
import { brandStore } from '../store/brandStore'

const Brands = ({ navigation }) => {

  const [cont, setCont] = useState('')

  return (
    <View style={{ flex: 1, paddingHorizontal: '4%', backgroundColor: '#fff' }}>
      <Header back navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Text style={{ fontSize: 26, fontWeight: '700', marginBottom: 20 }}>Марки</Text>
          <FloatingLabelInput
            label={'поиск марки'}
            value={cont}
            onChangeText={(value) => setCont(value)}
            leftComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingLeft: 10 }}
                onPress={() => setCont('')}
              >
                <Image source={require('../Icons/search-icon.png')} style={{ width: 18, height: 18 }}/>
              </TouchableOpacity>
            )}
            containerStyles={{
              backgroundColor: '#F2F2F2',
              paddingVertical: 10,
              borderRadius: 15
            }}
          />
        </View>
        <View>
          <Text style={{ fontSize: 23, fontWeight: '700', marginVertical: 20 }}>Популярные</Text>
        </View>
        <View style={{ marginLeft: 10 }}>
          {brandStore.map(brand => (
            <TouchableOpacity
              key={brand.id}
              style={{
                flexDirection: 'row',
                borderBottomWidth: 1,
                borderBottomColor: '#F2F2F2',
                paddingVertical: 14
              }}
              onPress={() => navigation.push('Models')}
            >
              <Image source={brand.image} style={{ width: 45, height: 35 }}/>
              <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 30 }}>{brand.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Brands