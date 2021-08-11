import React from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const Category = (props) => {
  return (
    <View style={{ marginTop: 10, backgroundColor: '#F4F6F8', borderRadius: 12, alignItems: props.center ? props.center : 'stretch' }}>
      <ScrollView
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ flexDirection: 'row' }}>
          {props.data.map(data => (
            <TouchableOpacity key={data.text} style={{ marginHorizontal: 5, marginVertical: 2, flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 18,
                  paddingVertical: 8,
                  paddingHorizontal: 15,
                  borderRadius: 12
                }}
              >{data.text}</Text>
              <Text style={{ fontSize: 30, color: '#DFDFDF' }}>|</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Category