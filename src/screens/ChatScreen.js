import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import Bubble from "../components/Bubble";
import { createChat, sendTextMessage } from "../utils/actions/chatActions";
import blackhole from '../../assets/blackhole.jpg'

import colors from "../../constants/colors";

const ChatScreen = (props) => {

  const userData = useSelector((state) => state.auth.userData);
  const storedUsers = useSelector((state) => state.users.storedUsers);
  const storedChats = useSelector(state=>state.chats.chatsData);


  const [chatUsers, setChatUsers] = useState([]);
  const [messageText, setMessageText] = useState("");
  const [chatId, setChatId] = useState(props.route?.params?.chatId);//aqui ocurre un error

  const chatData = (chatId && storedChats[chatId]) || props.route?.params?.newChatData;


  const getChatTitleFromName = () => {
    const otherUserId = chatUsers.find(uid => uid !== userData.userId);
    const otherUserData = storedUsers[otherUserId];



    {/*Intercambiar otherUserData.controlNumber -> por el nombre del usuario, igual para mail*/}

    return otherUserData && `${otherUserData.controlNumber} ${otherUserData.mail}`;
  };

  useEffect(() => {
    props.navigation.setOptions({
      headerTitle: getChatTitleFromName()
    });

    setChatUsers(chatData.users);
  }, [chatUsers]);


  const sendMessage = useCallback(async () => {
    try {
      let id = chatId;
      console.log(chatId);

      if (!id) {
        //not chat id. create the chat
        id = await createChat(userData.userId, props.route.params.newChatData);
        setChatId(id);

        // console.log(id);
      }

      // console.log("Chat id ",chatId,"Id de usuario ",userData.userId,"Mensaje ",messageText)
      await sendTextMessage(chatId,userData.userId,messageText);



    } catch (error) {
      console.log(error);
    }
    setMessageText("");
  }, [messageText, chatId]);

  return (
    <SafeAreaView edges={["right", "left", "bottom"]} style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={100}
      >
        <ImageBackground source={blackhole} style={styles.backgroundImage}>
          <View style={{ backgroundColor: "transparent" }}>


            {
            !chatId && <Bubble text="This is a new chat" type="system" />
            }

            
          </View>
        </ImageBackground>

        <View style={styles.inputContainer}>
          <TouchableOpacity
            style={styles.mediaButton}
            onPress={() => console.log("Pressed!")}
          >
            <Feather name="plus" size={24} color={colors.blue} />
          </TouchableOpacity>

          <TextInput
            style={styles.textbox}
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={sendMessage}
          />

          {messageText === "" && (
            <TouchableOpacity
              style={styles.mediaButton}
              onPress={() => console.log("Pressed!")}
            >
              <Feather name="camera" size={24} color={colors.blue} />
            </TouchableOpacity>
          )}

          {messageText !== "" && (
            <TouchableOpacity
              style={{ ...styles.mediaButton, ...styles.sendButton }}
              onPress={sendMessage}
            >
              <Feather name="send" size={20} color={"white"} />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textbox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: colors.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 35,
  },
  sendButton: {
    backgroundColor: colors.blue,
    borderRadius: 50,
    padding: 8,
  },
  backButton: {
    paddingHorizontal: 10,
  },
});

export default ChatScreen;
