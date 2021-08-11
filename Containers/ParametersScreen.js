import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import Category from './Category'
import FilterButtons from './FilterButtons'
import FilterInputs from './FilterInputs'

const ParametersScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%' }}>
      <Header back logo navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Category data={[{ text: 'Все' }, { text: 'Новые' }, { text: 'С пробегом' }]} center={'center'}/>
        <FilterInputs/>
        <FilterButtons/>
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
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default ParametersScreen