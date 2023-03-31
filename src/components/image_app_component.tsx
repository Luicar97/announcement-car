//import liraries
import { Dimensions, StyleSheet, View, Image } from 'react-native'

export const firstName = require('../../assets/first-img.png')
export const secondImg = require('../../assets/second-img.png')
export const thirtyImg = require('../../assets/thirty-img.png')
export const fourtyImg = require('../../assets/four-img.png')

const imgLibrary = {
    0: firstName,
    1: secondImg,
    2: thirtyImg,
    3: fourtyImg,
}

// create a component
const ImageAppComponent = ({index}) => {
    return <Image style={styles.image} source={imgLibrary[index]} />
}

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get ('window').width, 
        height: Dimensions.get ('window').height / 1.9,
      },
})

//make this component available to the app
export default ImageAppComponent
