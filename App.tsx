import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useState } from 'react';
import { Image } from 'expo-image';
import ColorAppComponent from './src/components/color_app_component';
import ImageAppComponent from './src/components/image_app_component';
import TitleAppComponent from './src/components/title_app_component';
import LoaderAppComponent from './src/components/loader_app_component';

export const loader = require('./assets/loader.png'); 

export default function App() {


  let [intImg, stateImg] = useState(0);

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


  function changeImage(index){
    index++

    if (index > 3) {
      index = 0
    }

    stateImg(index);
  }

  return (
    <ColorAppComponent index={intImg}>
      <TitleAppComponent index={intImg} />
      <View>
        <ImageAppComponent index={intImg} />
      </View>
      <View style={styles.containerFooter}>
        <View style={styles.containerDots}>
            <View style={styles.dots}>
              <View style={ (intImg == 0) ? styles.active : styles.disable} />
              <View style={(intImg == 1) ? styles.active : styles.disable} />
              <View style={(intImg == 2) ? styles.active : styles.disable} />
              <View style={(intImg == 3) ? styles.active : styles.disable} />
            </View>
            <View>
              <Text style={styles.subtitle}>Skip</Text>
            </View>
        </View>
        <View style={styles.containerLoader}>
          <TouchableOpacity onPress={() => changeImage(intImg)}>
            <LoaderAppComponent index={intImg}/>
          </TouchableOpacity>
        </View>
      </View>
    </ColorAppComponent>
  );
  }

const styles = StyleSheet.create({
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
  containerLoader:{
    paddingTop: 18,
    paddingRight: 25,
  },
  containerFooter:{
    paddingTop: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subtitle: {
    paddingTop: 12,
    color: 'white',
    fontFamily: 'SFProText-Light',
    fontSize:23
  }
});
