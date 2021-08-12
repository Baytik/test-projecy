import React from 'react'
import { ScrollView, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { carCategory } from '../store/carCategory'
import CarCategory from './CarCategory'
import Category from './Category'
import Parameters from './Parameters'
import Products from './Products'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '4%', backgroundColor: '#fff' }}>
      <Header burger logo search navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Category data={[{ text: 'Легковые' }, { text: 'Комтранс' }, { text: 'Мото' }, { text: 'Автозапчасти' }, { text: 'С пробегом' }, { text: 'Новые' }]}/>
        <CarCategory data={carCategory}/>
        <Parameters navigation={navigation}/>
        <Products/>
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default Home