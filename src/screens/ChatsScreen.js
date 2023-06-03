import React, { useEffect } from "react";
import { View, Text } from "native-base";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import screen from "../utils/screenNames";

const ChatsScreen = props => {
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



    return (
        <View>
            <Text>Hello</Text>
        </View>
    );
};

export default ChatsScreen;
