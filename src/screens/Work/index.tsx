import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    icon: {
        marginTop: height / 20,
        marginLeft: 23,
        alignSelf: 'flex-start',
        width: 37,
        height: 37,
    },
})

const Work: React.FC = () => {
 const navigation = useNavigation();
 const route = useRoute();

 const { item } = route.params;

 function handleNavigateBack() {
     navigation.goBack();
 }

  return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>

        <TouchableOpacity onPress={handleNavigateBack} style={{ alignSelf: 'flex-start' }} activeOpacity={0.8}>
            <Image style={styles.icon} source={require('../../icons/back.png')}/>
        </TouchableOpacity>

          <Text style={{ fontSize: 35 }}>
              {item.title}
          </Text>
      </View>
  );
}

export default Work;