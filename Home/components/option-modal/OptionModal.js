import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import {styles} from './OptionModal.style'

export default class OptionModal extends React.Component{ 
    constructor(props) {
        super(props);
      }
    render(){
        return( 
            <View style ={styles.container}>
            <View style={styles.TopHeader}>
                <Text style = {styles.TopText}>Rate Your Sleep</Text>
            </View>
                <View style={styles.ratingContainer}>
                <TouchableOpacity style={styles.Rating} onPress={this.props.clickHandler}><View><Text style={styles.ratingText}>1</Text></View></TouchableOpacity>
                <TouchableOpacity style={styles.Rating} onPress={this.props.clickHandler}><Text style={styles.ratingText}>2</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Rating} onPress={this.props.clickHandler}><Text style={styles.ratingText}>3</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Rating} onPress={this.props.clickHandler}><Text style={styles.ratingText}>4</Text></TouchableOpacity>
                <TouchableOpacity style={styles.Rating} onPress={this.props.clickHandler}><Text style={styles.ratingText}>5</Text></TouchableOpacity>
                </View>
            </View>
        )
    }
}