import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Dimensions,
    Image,
    TouchableOpacity
 } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    companyText: {
        fontFamily: 'Mada-Bold',
        fontSize: 48,
        color: '#FFFFFF',
        lineHeight: 62,
        marginTop: height / 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#101010',
        paddingTop: 20,
        alignItems: 'center',
    },
    image: {
        marginTop: 20,
        height: height / 3,
        width: width * 2 - width / 1,
    },
    Text: {
        marginTop: 38,
        fontFamily: 'Mada-Medium',
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        width: 300,
        color: '#FFFFFF'
    },
    input: {
        marginTop: 80,
        backgroundColor: '#4B4BE9',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: 306,
        height: 61,
        borderRadius: 12,
        flexDirection: 'row',
    },
    facebookLogo: {
        height: 22,
        width: 22,
        marginLeft: 0,
    },
    inputText: {
        fontFamily: 'LilyScriptOne-Regular',
        fontSize: 18,
        lineHeight: 25,
        color: '#FFFFFF',
        textAlign: 'center',
        marginRight: 40,
    },
})

const Home: React.FC = () => {
  const navigation = useNavigation();

  function handleNavigateToLogin() {
      navigation.navigate('Login')
  }

  function handleNavigateToExplore() {
    navigation.navigate('explore')
  } 

  return (
      <SafeAreaView style={styles.container}> 
        <Text style={styles.companyText}>SWE.</Text>
        <Image style={styles.image} source={require('../../images/logo.png')}/>
        <Text style={styles.Text}>find the best work environments to inspire you</Text>

        <TouchableOpacity onPress={handleNavigateToExplore} style={styles.input}>
            <Image style={styles.facebookLogo} source={require('../../images/facebook.png')}/>
            <Text style={styles.inputText}>Continue with Facebook</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleNavigateToLogin} style={[styles.input, { backgroundColor: '#DDB7C8', marginTop: 25 }]}>
            <Text style={[styles.inputText, { marginRight: 0, }]}>Sign Up</Text>
        </TouchableOpacity>

      </SafeAreaView>
  );
}

export default Home;