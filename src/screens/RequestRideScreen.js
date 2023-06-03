import React, { useEffect, useState, useCallback } from "react";
import { FormControl, VStack, Box, HStack, Image, Center } from "native-base";
import SliderMap from "../components/SliderMap";
import SwitchButton from "../components/SwitchButtonMap";
import MapImage from "../../assets/ImageMap.png";
import { TouchableOpacity, LogBox } from "react-native";
import screen from "../utils/screenNames";
import { StyleSheet } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import Map from "../components/Map";

import { getDatabase, ref, child, get, update } from "firebase/database";
import { getFirebaseApp } from "../utils/firebaseHelper";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const RequestRideScreen = ({ navigation }) => {
  const [largeRadius, setLargeRadius] = useState(0); // Valor inicial para el radio grande
  const [otherUserPosition, setOtherUserPosition] = useState({
    top: 100,
    left: 150,
  }); // Posición inicial del círculo del otro usuario

  const [showLocation, setShowLocation] = useState(true);

  const toggleSwitch = () => {
    setShowLocation((previousState) => !previousState);
  };

  useFocusEffect(
    useCallback(() => {
      LogBox.ignoreLogs([
        "Non-serializable values were found in the navigation state. Check:",
      ]);
      let orientationSubscription;

      const setScreenOrientation = async () => {
        await ScreenOrientation.unlockAsync();
        orientationSubscription =
          ScreenOrientation.addOrientationChangeListener(
            handleOrientationChange
          );
      };

      setScreenOrientation();

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
          setLargeRadius(snapshot.val().largeRadius);
          setShowLocation(snapshot.val().showLocation);
        } catch (error) {
          console.log(error);
        }
      };

      getStored();

      return () => {
        if (orientationSubscription) {
          ScreenOrientation.removeOrientationChangeListener(
            orientationSubscription
          );
        }
        ScreenOrientation.unlockAsync();
      };
    }, [])
  );

  const handleOrientationChange = ({ orientationInfo }) => {
    if (orientationInfo && orientationInfo.orientationLock) {
      const { orientationLock } = orientationInfo;

      if (orientationLock === ScreenOrientation.OrientationLock.UNKNOWN) {
        // El dispositivo está en modo automático, permitir orientación en cualquier dirección
        ScreenOrientation.unlockAsync();
      } else {
        // El dispositivo tiene una orientación fija, bloquear la orientación correspondiente
        ScreenOrientation.lockAsync(orientationLock);
      }
    }
  };

  const handleLargeRadiusChange = (value) => {
    setLargeRadius(value);
  };

  function onPressOtherUser() {
    navigation.navigate(screen.driver);
  }

  // Obtén tu ubicación actual y ajusta la posición del círculo del otro usuario
  useEffect(() => {
    // Aquí debes usar el método o librería que obtiene tu ubicación actual
    // En este ejemplo, asumimos que la ubicación actual se obtiene de navigator.geolocation.getCurrentPosition()

    // Aquí se establece la posición inicial del círculo del otro usuario cerca de tu ubicación
    const initialUserPosition = { top: 100, left: 150 }; // Ajusta los valores según sea necesario

    setOtherUserPosition(initialUserPosition);
  }, []);

  return (
    <Center alignSelf={"center"} flex={1} width={"95%"}>
      <VStack space={1} flex={1} alignItems={"center"} width={"95%"}>
        <FormControl.Label>In range of</FormControl.Label>
        <SliderMap
          value={largeRadius}
          onValueChange={handleLargeRadiusChange}
        />

        <HStack>
          <Box>
            <FormControl.Label>Show my location</FormControl.Label>
            <SwitchButton
              isEnabled={showLocation}
              toggleSwitch={toggleSwitch}
            />
          </Box>
        </HStack>

        <Box borderWidth={1} flex={2} width={"100%"} position="relative">
          <Map
            largeRadius={largeRadius}
            showLocation={showLocation}
            needGas={false}
            userType={"conductor"}
            viajero={true}
          />

          {/* Círculo del otro usuario */}
          {/* <TouchableOpacity onPress={onPressOtherUser} style={[styles.otherUserCircle, otherUserPosition]} />
           */}
        </Box>
      </VStack>
    </Center>
  );
};

const styles = StyleSheet.create({
  // ...otros estilos

  otherUserCircle: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "red",
  },
});

export default RequestRideScreen;
