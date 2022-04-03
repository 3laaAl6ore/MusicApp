import {StyleSheet} from 'react-native';
import Colors from './AppColors';

export default StyleSheet.create({
    search_container:{
        width:'100%',
        flexDirection:'row',
        backgroundColor:Colors.happy_green,
        height:'15%',
        paddingTop:50,
        paddingHorizontal:30
    },
    results_container:{
        width:'100%',
        padding:4,
        height:'85%',
        paddingVertical:20
    },
    container: {
        flex:1, 
        backgroundColor:Colors.white
    },
    video: {
        alignSelf: 'center',
        width: '100%',
        height: 283,
      },
});