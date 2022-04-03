import React, {useEffect, useState} from 'react';
import { Text, View } from 'react-native';
import Style from '../Utilities/AppStyle';
import Colors from '../Utilities/AppColors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyMusic = props => {
    return(
        <View style={Style.container}>
            <Text>My Music Screen</Text>
        </View>
    )
}

export default MyMusic;