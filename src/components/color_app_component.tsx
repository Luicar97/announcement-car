

import React, { FC } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

export const colorOne = '#F0CF69';
export const colorTwo = '#B7ABFD';
export const colorThree = '#EFB491';
export const colorFour = '#95B6FF';

const colorLibrary = {
    0: '#F0CF69',
    1: '#B7ABFD',
    2: '#EFB491',
    3: '#95B6FF',
}

interface Props {
    index: number,
    children?: any
}

const ColorAppComponent: React.FC<Props> = ({ index, children }: Props) => {
    return <SafeAreaView style={stylesColor(colorLibrary[index]).container}>{children}</SafeAreaView>
};

const stylesColor = (color) => {
    return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: color,
        },
    });
};

export default ColorAppComponent;
