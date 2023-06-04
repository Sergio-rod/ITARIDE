import React, { useEffect } from "react";
import { View, Text } from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import screen from "../utils/screenNames";
import { useSelector } from "react-redux";

const ChatsScreen = props => {

    const selectedUser= props.route?.params?.selectedUserId;
    const userData = useSelector(state => state.auth.userData);

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="New chat"
                        iconName="create-outline"
                        onPress={() => props.navigation.navigate(screen.newChat)}
                    />
                </HeaderButtons>

            }
        });
    }, []);

    useEffect(()=>{
        if(!selectedUser){
            return;
        }

        const chatUsers= [selectedUser,userData.userId];

        const navigationProps = {
            newChatData: {users: chatUsers}
        }

        props.navigation.navigate(screen.chat,navigationProps);

    },[props.route?.params])



    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
};

export default ChatsScreen;
