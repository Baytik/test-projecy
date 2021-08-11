import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

const CarCategory = (props) => {
  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row' }}>
          {props.data.map(data => (
            <TouchableOpacity key={data.id} style={{ marginHorizontal: 5 }}>
              <Image source={data.image} style={{ width: 130, height: 80 }}/>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 12
                }}
              >{data.text}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default CarCategory