import React from 'react'
import { ScrollView, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { carCategory } from '../store/carCategory'
import CarCategory from './CarCategory'
import Category from './Category'

const ParametersScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', backgroundColor: '#fff' }}>
      <Header back logo navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Category data={[{ text: 'Все' }, { text: 'Новые' }, { text: 'С пробегом' }]} center={'center'}/>
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default ParametersScreen