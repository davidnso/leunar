import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {styles} from './OptionButton.styles';
import {LinearGradient} from 'expo'
export default class OptionButton extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <LinearGradient style={styles.container}  colors={['#1D0B38', '#7303C0']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} style = {styles.container} activeOpacity={0.5}>
                <View style={{marginBottom: 10}}>
                {this.props.icon}
                </View>
                <View>
                <Text style = {styles.option}>{this.props.text}</Text>
                </View>
                <View >
                <Text style = {styles.info}>{this.props.info}</Text>
                </View>
            </LinearGradient>
        )
    }
}