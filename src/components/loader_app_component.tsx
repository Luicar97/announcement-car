//import liraries
import { StyleSheet, Image } from 'react-native';

export const firstName = require('../../assets/loader.png')
export const secondImg = require('../../assets/loader-two.png')
export const thirtyImg = require('../../assets/loader-three.png')
export const fourtyImg = require('../../assets/loader-four.png')

const imgLibrary = {
    0: firstName,
    1: secondImg,
    2: thirtyImg,
    3: fourtyImg,
}

// create a component
const LoaderAppComponent = ({index}) => {
    return (
        <Image style={styles.imageloader} source={imgLibrary[index]} />
    );
};

// define your styles
const styles = StyleSheet.create({
    imageloader:{
        width: 50, 
        height: 50,
    },
});

//make this component available to the app
export default LoaderAppComponent;
