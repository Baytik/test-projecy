import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const Home = () => {
  return (
    <View style={{ flex: 1, marginHorizontal: '5%' }}>
      <Header/>
      <ScrollView>
        <View>
          <Text>Home screen</Text>
        </View>
      </ScrollView>
      <Footer/>
    </View>
  )
}

export default Home