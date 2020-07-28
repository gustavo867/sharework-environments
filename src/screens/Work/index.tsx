import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Modalize } from 'react-native-modalize';

const { height, width } = Dimensions.get('window');

const Work: React.FC = () => {
 const navigation = useNavigation();
 const route = useRoute();

 const modalizeRef = useRef<Modalize>(null);

 const { item } = route.params;


 function handleNavigateBack() {
     navigation.goBack();
 }

 function handleNavigateFullScreenImage(image : string) {
     navigation.navigate('FullScreenImage', { image })
 }

 const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
      <View style={{ backgroundColor: '#010101', flex: 1, }}>

        <TouchableOpacity onPress={handleNavigateBack} 
        style={{ 
            alignSelf: 'flex-start', 
            position: 'absolute', 
            zIndex: 2,
            marginLeft: 25, 
            marginTop: 50,
        }} activeOpacity={0.8}>
            <Image style={styles.icon} source={require('../../icons/back.png')}/>
        </TouchableOpacity>

        <Image style={{ width: width, height: height / 2 - 20, borderBottomRightRadius: 34, borderBottomLeftRadius: 34, }} source={{ uri: item.background }}/>


        <View style={styles.companyContainerText}>
            <Text style={styles.companyText}>
                {item.title}
            </Text>
            <Text style={styles.addressText}>
                {item.address}
            </Text>
        </View>
        
    
        <View style={styles.shareContainer}>
         <Image style={styles.shareIcon} source={item.like === true ? require('../../icons/heartBlue.png') : require('../../icons/heart.png') }/>
         <Image style={[styles.shareIcon, { width: 21, height: 23.24 }]} source={require('../../icons/Vector.png')}/>
        </View>

        <View style={styles.line}></View>

        <View style={{ marginLeft: 24, }}>
            <Text style={styles.textAbout}>About</Text>
            <Text style={[styles.addressText, { alignItems: 'center', marginTop: 20, width: 280 }]}>{item.about}</Text>
        </View>

        <Text style={[styles.textAbout, { marginLeft: 24, }]}>Gallery</Text>

        <View style={{ marginLeft: 38, marginTop: 29, flexDirection: 'row', }}>

            <TouchableOpacity activeOpacity={0.6}>
                <Image style={styles.image} source={{ uri: item.image1 }}/>
            </TouchableOpacity>

            <TouchableOpacity onPress={onOpen}  activeOpacity={0.6}>
                <Image style={[styles.image, { marginLeft: 21 }]} source={{ uri: item.image2 }}/>
            </TouchableOpacity>
           
            <TouchableOpacity onPress={onOpen} style={styles.galleryPlus} activeOpacity={0.6}>
               <Text style={{ color: '#FFFFFF', fontFamily: 'Mada-Medium', fontSize: 18, lineHeight: 23, }}> + 3 </Text>
            </TouchableOpacity>

        </View>

        <Modalize modalStyle={{ backgroundColor: '#010101' }} modalHeight={550} snapPoint={400} ref={modalizeRef}>
            <View style={{ marginLeft: 22 }}>
                <Text style={styles.textAbout}>Gallery</Text>

                <View style={{ flexDirection: 'row', marginTop: 22, }}>
                    <TouchableOpacity onPress={() => handleNavigateFullScreenImage(item.background)} activeOpacity={0.6}>
                        <Image style={styles.imageOnGallery} source={{ uri: item.background }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigateFullScreenImage(item.image1)} activeOpacity={0.6}>
                        <Image style={[styles.imageOnGallery, { marginLeft: 21 }]} source={{ uri: item.image1 }}/>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: 'row', marginTop: 22, }}>
                    <TouchableOpacity onPress={() => handleNavigateFullScreenImage(item.image2)} activeOpacity={0.6}>
                        <Image style={styles.imageOnGallery} source={{ uri: item.image2 }}/>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => handleNavigateFullScreenImage(item.image3)} activeOpacity={0.6}>
                        <Image style={[styles.imageOnGallery, { marginLeft: 21 }]} source={{ uri: item.image3 }}/>
                    </TouchableOpacity>
                </View>
                <Text style={[styles.addressText, { marginTop: 10, marginLeft: 50, }]}>Click on the image to preview in full screen</Text>
            </View>
             
        </Modalize>        
   
      </View>
  );
}

// {"\n"}

export default Work;

const styles = StyleSheet.create({
    icon: {
        marginTop: 0,
        marginLeft: 15,
        alignSelf: 'flex-start',
        width: 37,
        height: 37,
    },
    companyText: {
        fontFamily: 'Mada-Bold',
        fontSize: 28,
        lineHeight: 36,
        color: '#FFFFFF'
    },
    addressText: {
        fontFamily: 'Mada-Regular',
        fontSize: 14,
        lineHeight: 18,
        color: '#FFFFFF'
    },
    companyContainerText: {
        position: 'absolute',
        marginTop: 320,
        marginLeft: 26,
        zIndex: 1,
    },
    shareContainer: { 
        alignItems: 'center',
        flexDirection: 'row', 
        justifyContent: 'space-around',
        marginTop: 50, 
    },
    shareIcon: {
        width: 26.67,
        height: 24.47,
    },
    line: {
        marginTop: 30,
        width: 332,
        height: 1,
        borderColor: 'rgba(90, 86, 92, 0.3)',
        borderWidth: 1,
        alignSelf: 'center',
    },
    textAbout: {
        fontFamily: 'Mada-Medium',
        fontSize: 18,
        lineHeight: 23,
        color: '#FFFFFF',
        marginTop: 30,
    },
    image: {
        width: 66, 
        height: 66,
        borderRadius: 12,
    },
    galleryPlus: {
        width: 44,
        height: 44,
        borderRadius: 12,
        backgroundColor: '#1A1A1A',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 21,
    },
    imageOnGallery: {
        width: 155, 
        height: 196,
        borderRadius: 12,
    },
})
