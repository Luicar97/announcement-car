//import liraries
import { View, Text, StyleSheet } from 'react-native';

export const titleOne = "Your first car without a driver's license";
export const titleTwo = 'Always there: more than 1000 cars in Tbilisi';
export const titleThree = 'Do not pay for parking, maintenance and gasoline';
export const titleFour = '29 car models: from Skoda Octavia to Porsche 911';

export const subTitleOne = "Goes to meet people who just got their license";
export const subTitleTwo = 'Our company is a leader by the number of cars in the fleet';
export const subTitleThree = 'We will pay for you, all expenses related to the car';
export const subTitleFour = 'Choose between regular car models or exclusive ones';

const titleLibrary = {
    0: titleOne,
    1: titleTwo,
    2: titleThree,
    3: titleFour,
}

const subTitleLibrary = {
    0: subTitleOne,
    1: subTitleTwo,
    2: subTitleThree,
    3: subTitleFour,
}

// create a component
const TitleAppComponent = ({index}) => {
    return (
        <View style={styles.firstContainer}>
            <Text style={styles.title}>{titleLibrary[index]}</Text>
            <Text style={styles.subtitle}>{subTitleLibrary[index]}</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    firstContainer:{
      paddingLeft: 22,
      paddingRight: 22,
      paddingTop: 32,
      paddingBottom: 60
    },
    title: {
        color: 'white',
        fontFamily: 'SFProdisplay-Bold',
        fontSize: 28
      },
    subtitle: {
        paddingTop: 12,
        color: 'white',
        fontFamily: 'SFProText-Light',
        fontSize:22
    },
});

//make this component available to the app
export default TitleAppComponent;