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
        return Object.values(chatsData).sort((a, b) => {
            return new Date(b.updatedAt) - new Date(a.updatedAt);
        });
    });

    useEffect(() => {
        props.navigation.setOptions({
            headerRight: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="New chat"
                        iconName="create-outline"
                        onPress={() => props.navigation.navigate(screen.newChat)} />
                </HeaderButtons>
            }
        })
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

    return <View>

        <Text bold marginLeft={5} fontSize={"2xl"}>
            Chats
        </Text>

        <FlatList
            data={userChats}
            renderItem={(itemData) => {
                const chatData = itemData.item;

                const chatId = chatData.key;

                const otherUserId = chatData.users.find(uid => uid !== userData.userId);
                const otherUser = storedUsers[otherUserId];

                if (!otherUser) return;

                const title = `${otherUser.controlNumber} ${otherUser.mail}`;
                const subTitle = chatData.latestMessageText || "New chat";
                // const image = otherUser.profilePicture;
                console.log(chatId)

                return <DataItem
                    title={title}
                    subTitle={subTitle}
                    // image={image}
                    onPress={() => props.navigation.navigate(screen.chat, { chatId })}
                />
            }}
        />

    </View>
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ChatsScreen;
