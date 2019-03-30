import React from 'react';
import { TouchableOpacity, Text, View} from 'react-native';
import { styles } from './RecommendationCard.styles';
import {LinearGradient} from 'expo'
export default class RecommendationCard extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: false,
            setOpacity: 1,
        }
    }

    toggleCard(){
        this.setState({selected: !this.state.selected});
        if(this.state.selected){
            this.setState({setOpacity: .5});
        }else{
            this.setState({setOpacity: 1});
        }
    }

    render(){
        return (
            <TouchableOpacity onPress={()=>{this.toggleCard()}}>
            <LinearGradient style={{...styles.container, opacity: this.state.setOpacity}} colors={['#1D0B38', '#7303C0']} start={{x: 0, y: 0.75}} end={{x: 1, y: 0.25}} >
                        <View style={styles.leftContainer}>
                            <Text style={{...styles.text, ...styles.title}}>{this.props.title}</Text>
                            <Text style={{...styles.text, ...styles.content}}>{this.props.text}</Text>
                        </View>
                        <View>
                        </View>
                    </LinearGradient>
            </TouchableOpacity>
        )
    }
}