import React, { useEffect, useState } from "react";
import { View, Text } from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import screen from "../utils/screenNames";
import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
import { FontAwesome } from "@expo/vector-icons";
import { TextInput } from "react-native-gesture-handler";
import commonStyles from "../../constants/commonStyles";
import { serverTimestamp } from "firebase/database";
import { searchUsers } from "../utils/actions/userActions";

const NewChatScreen = props => {


    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState();
    const [noResultsFound, setnoResultsFound] = useState(false);
    const [searchTerm, setsearchTerm] = useState('');







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

    useEffect(()=>{
        const delaySearch = setTimeout(async ()=>{
            console.log("abc")
            if(!searchTerm || searchTerm ===""){
                setUsers();
                setnoResultsFound(false);
                return;
            }

            setIsLoading(true);


            const userResult= await searchUsers(searchTerm);
            console.log(userResult);

            

            setIsLoading(false);
        },500)


        return () => clearTimeout(delaySearch);
    }, [searchTerm])



    return (
        <View flex={1} >


            <View style={styles.searchContainer}>

                <FontAwesome name="search" size={15} color={colors.lightGrey} />
                <TextInput

                    placeholder="Search"
                    style={styles.searchBox}
                    onChangeText={(text) => setsearchTerm(text)}
                />









            </View>


            {

                !isLoading && noResultsFound && (
                    <View style={commonStyles.center}>
                        <FontAwesome
                            name="question"
                            size={55}
                            color={colors.lightGrey}
                            style={styles.noResultsIcon}>
                         
                        </FontAwesome>
                        <Text style={styles.notResultstEXT}> No users found! </Text>



                    </View>



                )



            }

            {

                !isLoading && !users && (
                    <View style={commonStyles.center}>
                        <FontAwesome
                            name="users"
                            size={55}
                            color={colors.lightGrey}
                            style={styles.noResultsIcon}>

                        </FontAwesome>
                        <Text style={styles.notResultstEXT}> Enter a name to search for a user! </Text>



                    </View>



                )



            }



        </View>
    );

};


const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.extralightGrey,
        height: 30,
        marginVertical: 8,
        paddingHorizontal: 8,
        paddingVertical: 5,
        borderRadius: 5
    },
    searchBox: {
        marginLeft: 8,
        fontSize: 15,
        width: '100%',
    },
    noResultsIcon: {
        marginBottom: 20
    },
    noResultsFound: {
        color: colors.textColor,
        fontFamily: 'regular',
        letterSpacing: 0.3


    }
})


export default NewChatScreen;
