import React, { useCallback, useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/actions';
import TrackItem from './TrackItem';
import Colors from '../Utilities/AppColors';
import Styles from '../Utilities/AppStyle';


const Dashboard = props => {

    const [isLoading, SetIsLoding] = useState(false);

    const dispatch = useDispatch();
    const [searchStr, setSearchStr] = useState('Metallica');

    const getResults = async () => {
        SetIsLoding(true);
        const artist = searchStr;
        let action = actions.getTracksByArtist(artist);
        try {
            await dispatch(action);
            SetIsLoding(false);
        }
        catch (err) {
            console.log(err.message);
            SetIsLoding(false);
        }
    }

    const itunesData = useSelector(state => (state.allTracks));


    return (
        <View style={Styles.container}>

            <View style={Styles.search_container}>
                <View style={{ width: '85%' }}>
                    <TextInput
                        value={searchStr}
                        onChangeText={text => setSearchStr(text)}
                        keyboardType='default'
                        placeholder='Search...'
                        style={{
                            width: '100%', backgroundColor: Colors.white,
                            borderRadius: 8, paddingHorizontal: 20, paddingVertical: 10,
                            fontFamily: 'Poppins-Regular', fontSize: 16
                        }}
                    />
                </View>
                <View style={{ width: '15%', alignItems: 'flex-end' }}>
                    <TouchableOpacity onPress={getResults} style={{
                        width: '90%', backgroundColor: Colors.gray_text,
                        borderRadius: 8, alignItems: 'center', height: 44,
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            fontFamily: 'Poppins-SemiBold',
                            color: Colors.white, fontSize: 18
                        }}>
                            GO
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={Styles.results_container}>
                {isLoading ? (
                    <ActivityIndicator size="large" color='black' />)
                    :
                    (
                        <View style={{ width: '100%', paddingHorizontal: 20 }}>
                            {itunesData?.allTracks?.results?.length > 0 ?
                                (
                                    <FlatList data={itunesData.allTracks.results}
                                        keyExtractor={item => item.trackId}
                                        renderItem={track => <TrackItem 
                                            item={track.item}
                                            onRowPress={() => {props.navigation.navigate('TrackDetails',{track:track.item})}}
                                         />}
                                    />
                                )
                                :
                                (<Text>No</Text>)
                            }
                        </View>
                    )
                }
            </View>
        </View>
    )
}

export const screenOptions = navData => {
    return {
        headerTitle: 'Welcome',
        headerShown: false
    }
}

export default Dashboard;
