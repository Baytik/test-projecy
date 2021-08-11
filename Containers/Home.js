import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import CarCategory from './CarCategory'
import Category from './Category'

const Home = () => {
  return (
    <View style={{ flex: 1, paddingHorizontal: '5%', backgroundColor: '#fff' }}>
      <Header/>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Category data={[{ text: 'Легковые' }, { text: 'Комтранс' }, { text: 'Мото' }, { text: 'Автозапчасти' }, { text: 'С пробегом' }, { text: 'Новые' }]}/>
        <CarCategory
          data={[{ id: 1, text: 'Кабриолет', image: require('../Images/image-23.jpg') }, {
            id: 2,
            text: 'Кабриолет',
            image: require('../Images/image-16.jpg')
          }, { id: 3, text: 'Кабриолет', image: require('../Images/image-23.jpg') }, {
            id: 4,
            text: 'Кабриолет',
            image: require('../Images/image-16.jpg')
          }]}
        />
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default Home