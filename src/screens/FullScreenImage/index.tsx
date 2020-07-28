import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Image, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const { height, width } = Dimensions.get('window');

const FullScreenImage: React.FC = () => {
 const navigation = useNavigation()
 const route = useRoute();

 const { image } = route.params

 function handleNavigateBack() {
     navigation.goBack();
 }

  return (
    <View style={{ flex: 1, backgroundColor: '#010101' }}>
         <AntDesign onPress={handleNavigateBack} style={{ alignSelf: 'flex-start', marginTop: 70, marginLeft: 40,  position: 'absolute', zIndex: 1 }}  name="close" size={35} color="#FFFF" />
        <View style={{  alignItems: 'center', justifyContent: 'center', marginTop: height / 3 + 50, }}>
            <Image style={{ width: width, height: height / 4 }} source={{ uri: image }}/>
        </View>
    </View>
  );
}

export default FullScreenImage;