import React, { useEffect } from "react";
import { View, Text } from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import screen from "../utils/screenNames";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";

const NewChatScreen = props => {
    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Close"
                        onPress={() => props.navigation.goBack()}
                    />
                </HeaderButtons>

            }
        });
    }, []);



    return (
        <View style={styles.searchContainer} >
            <FontAwesome name="search" size={15} color={colors.lightGrey}/>       
            <TextInput
            
            placeholder="Search"
            style={styles.searchBox}
            onChangeText={()=>{}}
            />

        </View>
    );

};


const styles = StyleSheet.create({
    searchContainer:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor: colors.extralightGrey,
        height:30,
        marginVertical:8,
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:5
    },
    searchBox: {
        marginLeft:8,
        fontSize:15,
        width:'100%'
    }
})


export default NewChatScreen;
