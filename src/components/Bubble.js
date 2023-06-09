import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import colors from '../../constants/colors';

const Bubble = props => {

    const { text, type } = props;
    const bubbleStyle = { ...styles.container };
    const textStyle = { ...styles.text };
    const wrapperStyle = {...styles.wrapperStyle}


    switch (type) {
        case "system":
            textStyle.color = '#65644A';
            bubbleStyle.backgroundColor = colors.beige;
            bubbleStyle.alignItems = 'center';
            bubbleStyle.marginTop = 10;
            break;
            case "error":
                textStyle.color = 'white';
                bubbleStyle.backgroundColor = colors.red;
                bubbleStyle.alignItems = 'center';
                bubbleStyle.marginTop = 10;
                break;
            case "myMessage":
                wrapperStyle.justifyContent = "flex-end"; 
                bubbleStyle.backgroundColor= "#e7fed6";  
                bubbleStyle.maxWidth = '90%';
                break;
            case "theirMessage":
                wrapperStyle.justifyContent = "flex-start"; 
                bubbleStyle.backgroundColor= "#e7fed6";  
                bubbleStyle.maxWidth = '90%';
                break;

            
        default:

            break;
    }

    return (
        <View style={wrapperStyle}>
            <View style={bubbleStyle}>
                <Text style={textStyle}>
                    {text}

                </Text>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapperStyle: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    container: {
        borderRadius: 6,
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 10,
        borderColor: '#E2DACC',
        borderWidth: 1

    },
    text: {
        letterSpacing: 0.3


    }


})

export default Bubble
