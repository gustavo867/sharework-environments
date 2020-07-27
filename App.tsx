import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { AppLoading } from 'expo';
import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    'LilyScriptOne-Regular': require('./src/fonts/LilyScriptOne-Regular.ttf'),
    'Mada-Light': require('./src/fonts/Mada-Light.ttf'),
    'Mada-Medium': require('./src/fonts/Mada-Medium.ttf'),
    'Mada-Regular': require('./src/fonts/Mada-Light.ttf'),
    'Mada-Bold': require('./src/fonts/Mada-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar style="light" translucent/>
      <Routes/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
