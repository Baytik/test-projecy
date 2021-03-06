import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { carStore } from '../store/carStore'
import { CarParameters } from './Product'
import Category from './Category'
import FilterButtons from './FilterButtons'
import FilterInputs from './FilterInputs'

const ParametersScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '4%' }}>
      <Header back logo navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Category data={[{ text: 'Все' }, { text: 'Новые' }, { text: 'С пробегом' }]} center={'center'}/>
        <FilterInputs/>
        <FilterButtons navigation={navigation}/>
        <View style={{ marginVertical: 25, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <Text style={{ color: '#9C9C9C' }}>3 547 предложений</Text>
          </View>
          <View>
            <TouchableOpacity style={{ flexDirection: 'row' }}>
              <Text style={{ color: 'black', marginRight :5 }}>По актуальности</Text>
              <Image source={require('../Icons/parameters.png')} style={{ width: 12, height: 12, marginTop: 4 }}/>
            </TouchableOpacity>
          </View>
        </View>
        {carStore.length > 0 ? carStore.map(c => (<CarParameters key={c.id} item={c}/>)) : <Text style={{ fontSize: 30 }}>Нет машин</Text>}
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default ParametersScreen