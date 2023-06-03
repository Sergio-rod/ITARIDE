import React, { useEffect } from "react";
import { View } from "native-base";
import styles from "../utils/styles";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
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
                        onPress={() => props.navigation.navigate(screen.newChat)} />
                </HeaderButtons>
            }
        })

    }, []);

    return <View  style={styles.containerFlat}>


    </View>

};

export default ChatsScreen;