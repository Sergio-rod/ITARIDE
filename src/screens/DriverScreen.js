import React from "react";
import {
  VStack,
  Input,
  FormControl,
  Box,
  Avatar,
  HStack,
  Heading,
  Button,
  Image,
  Center,
  View,
} from "native-base";
import styles from "../utils/styles";
import Ganzo from "../../assets/Ganzo.png";
import screen from "../utils/screenNames";
import { Ionicons } from "@expo/vector-icons";
import { IconButton } from "native-base";
import SelectTime from "../components/SelectTime";
import PassengerRatings from "../components/Stars";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  sendPushNotification,
  setNotificationMessage,
} from "../utils/actions/notificationActions";
import { getDatabase, ref, child, get, update } from "firebase/database";
import { getFirebaseApp } from "../utils/firebaseHelper";

const DriverScreen = ({ navigation }) => {
  const route = useRoute();
  const { user } = route.params;
  console.log(user)

  function onPressIcon() {
    navigation.navigate(screen.chat);
  }

  const handleRequest = async () => {
    const getStored = async () => {
      const storedAuthInfo = await AsyncStorage.getItem("userData");

      if (!storedAuthInfo) {
        console.log("No storage found");
        dispatch(setDidTryAutoLogin());
        return;
      }

      const parsedData = JSON.parse(storedAuthInfo);
      const { userId } = parsedData;

      getUsersData(userId);
    };

    const getUsersData = async (id) => {
      try {
        const app = getFirebaseApp();
        const dbRef = ref(getDatabase(app));
        const userRef = child(dbRef, `users/${id}`);

        const snapshot = await get(userRef);

        let token = user.val().notificationToken;
        let titulo = "Hola";
        let mensaje = `El usuario ${
          snapshot.val().mail
        } quiere tomar un viaje contigo`;

        const messageNotification = setNotificationMessage(
          token,
          titulo,
          mensaje,
          { data: "" }
        );

        const response = await sendPushNotification(messageNotification);

        if (response) {
          console.log("notificacion enviada");
        } else {
          console.log("error al enviar la notificacion");
        }
      } catch (error) {
        console.log(error);
      }
    };

    getStored();
  };

  return (
    <Center alignSelf={"center"} flex={1} width={"100%"} height="100%">
      <VStack flex={1} space={1} alignItems={"center"}>
        <Box flex={2 / 10} alignItems={"center"} marginTop={4}>
          <Heading style={styles.headings}>I give a Ride</Heading>
        </Box>
        <Box flex={8 / 10} overflow={"hidden"} minWidth={"70%"}>
          <Box
            flex={1}
            borderColor={"black"}
            borderRadius={"full"}
            backgroundColor={"transparent"}
          >
            <Avatar flexDirection={"row"} flex={1} width={"full"}>
              <Image
                flex={1}
                source={Ganzo}
                alt={"Avatar"}
                borderRadius={"full"}
                resizeMode={"cover"}
                style={{ width: "100%", height: "100%" }}
              />
            </Avatar>
          </Box>
          <IconButton
            onPress={onPressIcon}
            borderRadius={"full"}
            position="absolute"
            bottom={0}
            right={0}
            bg="black"
            _hover={{ backgroundColor: "black" }}
            icon={
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={70}
                color="white"
              />
            }
            zIndex={1}
          />
        </Box>

        <Box flex={1} borderColor={"red"} borderRadius={10} p={5}>
          <VStack spacing={2}>
            <Box flex={1} alignItems={"center"} justifyContent={"center"}>
              <Heading style={styles.headings}>Passenger</Heading>
            </Box>

            <Box flex={1}>
              <FormControl.Label>Name</FormControl.Label>
              <Input defaultValue={user.val().mail} isReadOnly={true} />
            </Box>

            <Box flex={1} marginTop={10}>
              <HStack flex={1} space={5}>
                <Box flex={1}>
                  <FormControl.Label>Time to arrive:</FormControl.Label>
                </Box>

                <Box flex={1}>
                  <FormControl>
                    <FormControl.Label>Passenger ratings</FormControl.Label>
                    <PassengerRatings />
                  </FormControl>
                </Box>
              </HStack>
            </Box>

            <Box flex={1} alignItems="center" marginTop={10}>
              <Button
                alignSelf={"center"}
                style={styles.buttonCian}
                onPress={() => handleRequest()}
              >
                Request Ride{" "}
              </Button>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Center>
  );
};

export default DriverScreen;
