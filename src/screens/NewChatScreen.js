import React, { useEffect } from "react";
import { View } from "native-base";
import styles from "../utils/styles";
import { HeaderButtons,Item } from "react-navigation-header-buttons";
import CustomHeaderButton from "../components/CustomHeaderButton";
import screen from "../utils/screenNames";


const ChatsScreen = props => {

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () => {
                return <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                    <Item
                        title="Close"
                        onPress={() => props.navigation.goBack()} />
                </HeaderButtons>
            }
        })

    }, []);

    return <View  style={styles.containerFlat}>


    </View>

};

export default ChatsScreen;