import React from 'react';
import { View, Text, Image, Dimensions, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getCompanys } from '../../utils/data';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
    id: string;
    like: boolean;
    title: string;
    address: string;
    about: string;
    background: string;
    backgroundWidth: number;
    backgroundHeight: number;
    image1: string;
    image2: string;
    image3: string;
}

const { height, width } = Dimensions.get('window');

const Explore: React.FC = () => {
const navigation = useNavigation();
const content = getCompanys()

function onCompanyClicked(item: Props) {
    navigation.navigate('Work', { item })
}

  return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#010101', alignItems: 'center' }}>
          <ScrollView style={{ marginTop: 70, }}>
            {content.map((item) => {
                return (
                <View style={{ marginTop: 30, }} key={item.id} >
                    <TouchableOpacity onPress={() => onCompanyClicked(item)} activeOpacity={0.7}>
                        <Image style={{ 
                            height: height / 5,
                            width: width  - 20 ,
                            borderRadius: 12,
                            marginBottom: item.id === '8' ? 20 : 0
                        }} source={{ uri: item.background }}/>
                        <Image style={{ 
                            position: 'absolute',
                            marginTop: 120,
                            marginLeft: 32,
                         }} source={item.like === true ? require('../../icons/heartBlue.png') : require('../../icons/heart.png') }/>
                    </TouchableOpacity>  
                </View>
                )     
            })}
          </ScrollView>
         
      </View>
  )
}

export default Explore;