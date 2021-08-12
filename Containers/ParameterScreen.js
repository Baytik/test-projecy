import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input/index'
import Header from '../Components/Header'

const ParameterScreen = ({ navigation }) => {

  const [year, setYear] = useState('')
  const [price, setPrice] = useState('')
  const [box, setBox] = useState('')
  const [kuz, setKuz] = useState('')
  const [power, setPower] = useState('')
  const [volume, setVolume] = useState('')
  const [unit, setUnit] = useState('')
  const [color, setColor] = useState('')
  const [wheel, setWheel] = useState('')

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', paddingHorizontal: '4%' }}>
      <Header back navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View>
          <Text style={{ fontSize: 22, fontWeight: '700', marginBottom: 20 }}>Параметры</Text>
        </View>
        <View>
          <FloatingLabelInput
            label={'Год выпуска'}
            value={year}
            onChangeText={(value) => setYear(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setYear('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Цена, сом'}
            value={price}
            onChangeText={(value) => setPrice(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setPrice('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Коробка'}
            value={box}
            onChangeText={(value) => setBox(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setBox('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Кузов'}
            value={kuz}
            onChangeText={(value) => setKuz(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setKuz('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Двигатель'}
            value={power}
            onChangeText={(value) => setPower(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setPower('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Объём двигателя, л'}
            value={volume}
            onChangeText={(value) => setVolume(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setVolume('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Привод'}
            value={unit}
            onChangeText={(value) => setUnit(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setUnit('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Цвет'}
            value={color}
            onChangeText={(value) => setColor(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setColor('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
          />
          <FloatingLabelInput
            label={'Расположение руля'}
            value={wheel}
            onChangeText={(value) => setWheel(value)}
            rightComponent={(
              <TouchableOpacity
                style={{ alignContent: 'center', justifyContent: 'center', paddingHorizontal: 5 }}
                onPress={() => setWheel('')}
              >
                <Text>X</Text>
              </TouchableOpacity>
            )}
            containerStyles={{
              borderBottomWidth: 1,
              borderBottomColor: '#F2F2F2',
              paddingVertical: 20,
            }}
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

export default ParameterScreen