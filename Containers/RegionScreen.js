import React, { useState } from 'react'
import { CheckBox, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../Components/Header'
import { regionStore } from '../store/regionStore'

const RegionScreen = ({ navigation }) => {

  const [isSelected, setSelection] = useState(false)
  const [id, setId] = useState('')

  const changeSelection = (e, id) => {
    setSelection(e)
    setId(id)
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: '4%' }}>
      <Header back navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {regionStore.map(region => (
          <View
            key={region.id}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 14,
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 30 }}>{region.text}</Text>
            <CheckBox
              boxStyle={{ borderRadius: 200 }}
              tintColors={{ true: 'red', false: 'black' }}
              value={id === region.id && isSelected}
              onValueChange={(e) => changeSelection(e, region.id)}
            />
          </View>
        ))}
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#F2F2F2',
            paddingVertical: 14,
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ fontSize: 16, marginTop: 5, marginLeft: 70 }}>Чолпон Ата</Text>
          <CheckBox
            boxStyle={{ borderRadius: 200 }}
            tintColors={{ true: 'red', false: 'black' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 1,
            borderBottomColor: '#F2F2F2',
            paddingVertical: 14,
            justifyContent: 'space-between'
          }}
        >
          <Text style={{ fontSize: 16, marginTop: 5, marginLeft: 70 }}>Рыбачи</Text>
          <CheckBox
            boxStyle={{ borderRadius: 200 }}
            tintColors={{ true: 'red', false: 'black' }}
          />
        </View>
        <View style={{ marginVertical: 20 }}>
          <TouchableOpacity
            style={{
              backgroundColor: '#EA4F3D',
              paddingVertical: 15,
              marginHorizontal: '10%',
              borderRadius: 10
            }}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Показать 401 321 предложений</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default RegionScreen