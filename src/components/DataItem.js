import React from 'react'
import { StyleSheet, TouchableWithoutFeedback, View,Text } from 'react-native'
import colors from '../../constants/colors';
import { color } from 'react-native-elements/dist/helpers';
import profileImage from '../../assets/Ganzo.png';
import { Image } from 'react-native';
const DataItem = props => {


    const {title,subTitle} = props;
    // const {title,subTitle,image} = props;


    return (
        <TouchableWithoutFeedback onPress={props.onPress}>

            <View style={styles.container}>

                {/* <ProfileImage
                    uri={image}
                    size={40}

                ></ProfileImage> */}
                <View style={styles.avatarContainer}>
                    <Image
                        source={profileImage}
                        style={styles.avatar}
                        resizeMode="cover"
                    />
                </View>

                <View>
                    <Text
                        numberOfLines={1}
                        style={styles.title}>
                        {title}
                    </Text>

                    <Text
                        numberOfLines={1}

                        style={styles.subTitle}>
                        {subTitle}
                    </Text>
                </View>
            </View>

        </TouchableWithoutFeedback>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection:'row',
        paddingVertical: 7,
        borderBottomColor: colors.extralightGrey,
        borderBottomWidth:1,
        alignItems:'center',
        minHeight:50,
        paddingLeft:20
    },
    avatarContainer: {
        marginRight: 14,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    textContainer: {
        marginLeft: 14
    }
    ,
    title: {
        fontSize: 16,
        letterSpacing: 0.3
    },
    subTitle: {
        color: colors.lightGrey,
        letterSpacing: 0.3
    }

})

export default DataItem
