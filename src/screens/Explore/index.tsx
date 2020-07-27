import React from 'react';
import { View, Text, Image } from 'react-native';
import { content } from '../../utils/data';

const Explore: React.FC = () => {

  return (
      <View style={{ flex: 1, flexDirection: 'row', backgroundColor: '#FFF'}}>
          <Text>Hello</Text>
          {content.map((item) => {
              return (
                <View style={{ marginTop: 300,}}>
                <Text>Hello</Text>
                <Text>{item.about}</Text>
                <Image style={{ 
                    height: item.backgroundHeight,
                    width: item.backgroundWidth,
                }} source={{ uri: item.background }}/>
               </View>
              )     
          })}
      </View>
  )
}

export default Explore;