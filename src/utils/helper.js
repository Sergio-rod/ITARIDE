import React, { useEffect } from "react";
import { View, Text } from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import screen from "../utils/screenNames";
import { useSelector } from "react-redux";
import { FlatList, StyleSheet } from "react-native";
import DataItem from "../components/DataItem";

const ChatsScreen = props => {

    const selectedUser = props.route?.params?.selectedUserId;

    const userData = useSelector(state => state.auth.userData);

    const storedUsers = useSelector(state => state.users.storedUsers);

    const userChats = useSelector(state => {
        const chatsData = state.chats.chatsData;
        console.log("userchatsfrom chatscreen",userChats)
        return Object.values(chatsData).sort((a,b) =>{
            return new Date(b.updatedAt) - new Date(a.upd);
        });
    });
    // console.log("userchatsfrom chatscreen",userChats)


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

    useEffect(() => {
        if (!selectedUser) {
            return;
        }

        const chatUsers = [selectedUser, userData.userId];

        const navigationProps = {
            newChatData: { users: chatUsers }
        }

        props.navigation.navigate(screen.chat, navigationProps);

    }, [props.route?.params])



    return (
        <View>

            <Text marginLeft={5} bold fontSize={"3xl"}>
                Chats
            </Text>
            <FlatList
                data={userChats}

                renderItem={(itemData) => {
                    const chatData = itemData.item;


                    const otherUserId = chatData.users.find(uid => uid !== userData.userId)

                    const otherUser = storedUsers[otherUserId];
                    if (!otherUser) return;

                    // const title = `${otherUser.name} ${otherUser.lastName}`

                    const title = `${otherUser.controlNumber} ${otherUser.mail}`;
                    const subTitle = 'This will be a message';
                    // const image= otherUser.profilePicture;


                    return <DataItem


                        title={title}
                        subTitle={subTitle}
                    // image={image}

                    />


                }}

            />


        </View>

    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatsScreen;
