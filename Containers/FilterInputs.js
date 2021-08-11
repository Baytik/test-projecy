import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input/index'

const FilterInputs = () => {

  const [cont, setCont] = useState('')
  const [model, setModel] = useState('')

  return (
    <View style={{ marginVertical: 20, backgroundColor: '#fff', borderRadius: 15 }}>
      <View style={{ marginVertical: 10, marginHorizontal: 20 }}>
        <FloatingLabelInput
          label={'марка'}
          value={cont}
          onChangeText={(value) => setCont(value)}
          rightComponent={(
            <TouchableOpacity
              style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
              onPress={() => setCont('')}
            >
              <Text>X</Text>
            </TouchableOpacity>
          )}
          containerStyles={{
            borderBottomWidth: 1,
            borderColor: '#F2F2F2',
            paddingVertical: 10
          }}
        />
        <FloatingLabelInput
          label={'модель'}
          value={model}
          onChangeText={(value) => setModel(value)}
          rightComponent={(
            <TouchableOpacity
              style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
              onPress={() => setModel('')}
            >
              <Text>X</Text>
            </TouchableOpacity>
          )}
          containerStyles={{
            borderBottomWidth: 0,
            paddingVertical: 10
          }}
        />
      </View>
    </View>
  )
}

export default FilterInputs