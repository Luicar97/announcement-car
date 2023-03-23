import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { Image } from 'expo-image';
import { useAssets } from 'expo-asset';

export const firstName = require('./assets/first-img.png'); 
export const loader = require('./assets/loader.png'); 

export default function App() {

  const [fontsLoaded] =  useFonts({
    'SFProdisplay-Bold': require('./assets/fonts/SFProDisplay-Bold.ttf'),
    'SFProText-Light': require('./assets/fonts/SFProText-Light.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.firstContainer}>
        <Text style={styles.title}>Your first car without a driver's license</Text>
        <Text style={styles.subtitle}>Goes to meet people who just got their license</Text>
      </View>
      <View>
        <Image style={styles.image} source={firstName} />
      </View>
      <View style={styles.containerFooter}>
        <View style={styles.containerDots}>
            <View style={styles.dots}>
              <View style={styles.active} />
              <View style={styles.disable} />
              <View style={styles.disable} />
              <View style={styles.disable} />
            </View>
            <View>
              <Text style={styles.subtitle}>Skip</Text>
            </View>
        </View>
        <View style={styles.containerLoader}>
        <Image style={styles.imageloader} source={loader} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0CF69',
  },
  firstContainer:{
    paddingLeft: 22,
    paddingRight: 22,
    paddingTop: 32,
    paddingBottom: 60
  },
  title: {
    color: 'white',
    fontFamily: 'SFProdisplay-Bold',
    fontSize: 30
  },
  subtitle: {
    paddingTop: 12,
    color: 'white',
    fontFamily: 'SFProText-Light',
    fontSize:23
  },
  image: {
    width: Dimensions.get ('window').width, 
    height: Dimensions.get ('window').height / 2,
  },
  active:{
    width: 25,
    height:10,
    borderRadius: 44 / 2,
    backgroundColor: 'white'
  },
  dots:{
    flexDirection: 'row',
    width: 80, 
    justifyContent: 'space-between',
  },
  disable:{
    width: 10,
    height:10,
    borderRadius: 100 / 2,
    backgroundColor: 'white',
    opacity: 0.5,
  },
  containerDots:{
    paddingTop: 30,
    paddingLeft: 25,
    flexDirection: 'column',
  },
  imageloader:{
    width: 50, 
    height: 50,
  },
  containerLoader:{
    paddingTop: 18,
    paddingRight: 25,
  },
  containerFooter:{
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
