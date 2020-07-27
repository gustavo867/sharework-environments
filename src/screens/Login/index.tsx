import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput,
    Image, 
    SafeAreaView,
    StyleSheet,
    Dimensions,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#101010',
        alignItems: 'center',
    },
    icon: {
        marginTop: height / 20,
        marginLeft: 23,
        alignSelf: 'flex-start',
        width: 37,
        height: 37,
    },
    companyName: {
        marginTop: height/ 9,
        fontFamily: 'Mada-Bold',
        fontSize: 48,
        lineHeight: 52,
        color: '#FFFFFF',
    },
    text: {
        marginLeft: 23,
        fontFamily: 'Mada-Medium',
        fontSize: 18,
        lineHeight: 23,
        color: '#FFFFFF',
        marginBottom: 7,
    },
    inputContainer: {
        marginTop: 125,
    },
    buttonInput: {
        width: 306,
        height: 52,
        borderRadius: 12,
        borderColor: '#DDB7C8',
        borderWidth: 1,
        flexDirection: 'row',
    },
    input: {
        textAlign: 'left', 
        color: '#FFFFFF', 
        fontFamily: 'Mada-Regular',
        fontSize: 18
    },
    signUpButton: {
        marginTop: 110,
        width: 306,
        height: 61,
        backgroundColor: '#4B4BE9',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUpText: {
        fontFamily: 'LilyScriptOne-Regular',
        fontSize: 18,
        lineHeight: 25,
        color: '#FFFFFF',
        textAlign: 'center',
    },
    iconSecure: { 
        marginTop: 15,
        marginLeft: -40,
    },
})

const Login: React.FC = () => {
    const [isSecure, setIsSecure] = useState(true);
    const navigation = useNavigation();

    function handleNavigateBack() {
        navigation.goBack();
    }

    function handleSecure() {
        setIsSecure((prevState) => !prevState)
    }


  return (
    <SafeAreaView style={styles.container}>

        <TouchableOpacity onPress={handleNavigateBack} style={{ alignSelf: 'flex-start' }} activeOpacity={0.8}>
            <Image style={styles.icon} source={require('../../icons/back.png')}/>
        </TouchableOpacity>

        <Text style={styles.companyName}>SWE.</Text>

        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}>
            <View style={styles.inputContainer}>
                <Text style={styles.text}>E-mail</Text>
                    <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    style={[styles.input, styles.buttonInput]}
                    />

                <Text style={[styles.text, { marginTop: 20 }]}>Password</Text>
                <View style={{ flexDirection: 'row', }}>
                    <TextInput
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="default"
                    style={[styles.input, styles.buttonInput, { fontSize: 20, textDecorationStyle: 'dotted' }]}
                    secureTextEntry={isSecure ? true : false}
                    />
                    <TouchableOpacity onPress={handleSecure} style={styles.iconSecure}>
                        <Ionicons name={isSecure ? 'md-eye-off' : 'md-eye' } size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
                    
            </View>
            

            <TouchableOpacity activeOpacity={0.7} style={styles.signUpButton}>
                <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default Login;