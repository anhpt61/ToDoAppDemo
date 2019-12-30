import React, { Component } from 'react';
import {
  AppRegistry,
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';
import styles from "./ToDoListItemStyles"
import { connect } from 'react-redux';
class ToDoListItem extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        if(!this.props.isHeader){
            this.props.onPress();
        } 
    }

    render() {
        const {container, cellBackground, selectIconContainer, contentText, timeText, bottomLine} = styles;

        var cellBackgroundStyles = this.props.isHeader ? cellBackground : [cellBackground,this.props.isSelected && {backgroundColor:'#FFFFCC'}] ;;

        return (
            <TouchableOpacity onPress={this.onPress} style={container}>
                <Image style={cellBackgroundStyles}/>
                {/* <TouchableOpacity style={selectIconContainer}>
                    <Image
                        style={{ width: 50, height: 50 }}
                        source={this.props.isSelected ? icTickUnselected : icTickSelected}
                    />
                </TouchableOpacity> */}
                <Text numberOfLines={2} style={contentText}>
                    {this.props.item.title}
                </Text>
                <Text style={timeText}>
                    {this.props.item.datetime}
                </Text>
                <View style={this.props.isHeader ? [bottomLine,{ backgroundColor:'#C9DCD5'}] : bottomLine}/>
            </TouchableOpacity>
        );
    }
}



AppRegistry.registerComponent('ToDoListItem', () => ToDoListItem);
export default ToDoListItem;