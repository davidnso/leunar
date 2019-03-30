import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './OptionButton.styles';

export default class OptionButton extends React.Component{
    render(){
        return(
            <TouchableOpacity style = {styles.container} activeOpacity={0.5}>
                <Text>ICON</Text>
                <View>
                <Text style = {styles.option}>Modify Alarm</Text>
                </View>
                <View >
                <Text style = {styles.info}>8:30 AM</Text>
                </View>
            </TouchableOpacity>
        )
    }
}