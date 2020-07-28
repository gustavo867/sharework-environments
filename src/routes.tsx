import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { BlurView } from 'expo-blur';

import { user } from './utils/data';

const AppStack = createStackNavigator();

import Home from './screens/Home';
import Login from './screens/Login';
import Explore from './screens/Explore';
import Work from './screens/Work';

function Logo() {
    const navigation = useNavigation();

    function handleNavigateToHome() {
        navigation.goBack()
    }

    return (
        <View style={{ marginTop: 30, marginLeft: 0,}}>

            <TouchableOpacity onPress={handleNavigateToHome}>
                <Image  style={{ width: 36, height: 36, }} source={require('./icons/back.png')}/>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, }}>
                <Text style={{ fontFamily: 'Mada-Bold', fontSize: 27, color: '#FFFFFF', marginTop: 0, }}>SWE.</Text>
                <Image style={{ width: 46, height: 46, borderRadius: 46 / 2, marginRight: 17, marginTop: -10, }} source={{ uri: user.avatar }}/>
            </View>    

        </View>
    )
}

const TopTabScreen = () => {
    return (
        <AppStack.Navigator headerMode="screen">
            <AppStack.Screen options={{
                headerLeft: null,
                headerTitle: props => <Logo/>,                
                headerTitleStyle: {
                    fontFamily: 'Mada-Bold',
                    fontSize: 24,
                    color: '#FFFF'
                },
                headerBackground: () => (
                    <BlurView tint="dark" intensity={100} style={StyleSheet.absoluteFill} />
                ),
                headerTintColor: '#4B4BE9',
                headerTransparent: true, 
                headerStyle: {
                    height: 145, 
                },
            }} 
            name="Explore" component={Explore}/>
        </AppStack.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="modal" headerMode="none">
                <AppStack.Screen name="Home" component={Home}/>
                <AppStack.Screen name="Login" component={Login}/>
                <AppStack.Screen name="explore" component={TopTabScreen}/>
                <AppStack.Screen name="Work" component={Work}/>
            </AppStack.Navigator>
        </NavigationContainer>
    )
} 
