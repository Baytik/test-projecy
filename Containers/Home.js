import React from 'react'
import { ScrollView, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import { carCategory } from '../store/carCategory'
import CarCategory from './CarCategory'
import Category from './Category'
import Parameters from './Parameters'

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', backgroundColor: '#fff' }}>
      <Header burger logo search navigation={navigation}/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Category data={[{ text: 'Легковые' }, { text: 'Комтранс' }, { text: 'Мото' }, { text: 'Автозапчасти' }, { text: 'С пробегом' }, { text: 'Новые' }]}/>
        <CarCategory data={carCategory}/>
        <Parameters navigation={navigation}/>
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default Home