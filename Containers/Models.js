import React, { useState } from 'react'
import { CheckBox, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Header from '../Components/Header'
import { modelStore } from '../store/modelStore'

const Models = ({ navigation }) => {
  const [isSelected, setSelection] = useState(false)
  const [id, setId] = useState('')

  const changeSelection = (e, id) => {
    setSelection(e)
    setId(id)
  }

  return (
    <View style={{ flex: 1, paddingHorizontal: '4%', backgroundColor: '#fff' }}>
      <Header back navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 20 }}>Модели Mazda</Text>
        </View>
        {modelStore.map(model => (
          <View
            key={model.id}
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 14,
              justifyContent: 'space-between'
            }}
          >
            <Text style={{ fontSize: 18, marginTop: 5, marginLeft: 30 }}>{model.text}</Text>
            <CheckBox
              boxStyle={{ borderRadius: 200 }}
              tintColors={{ true: 'red', false: 'black' }}
              value={id === model.id && isSelected}
              onValueChange={(e) => changeSelection(e, model.id)}
            />
          </View>
        ))}
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

export default Models