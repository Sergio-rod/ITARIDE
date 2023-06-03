import React, { useEffect, useState, useRef, useCallback } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Button,
  Linking,
  LogBox,
} from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";
import * as Location from "expo-location";

import { getDatabase, ref, child, get, update } from "firebase/database";
import { getFirebaseApp } from "../utils/firebaseHelper";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useNavigation } from "@react-navigation/native";
import { useFocusEffect } from "@react-navigation/native";

const Map = ({ largeRadius, showLocation, userType, viajero, needGas }) => {
  const navigation = useNavigation();
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const predefinedRadius = 20; // Radio predefinido en metros
  const [userUid, setUserUid] = useState(null);
  const app = getFirebaseApp();
  const auth = getAuth();
  const [users, setUsers] = useState([]);


  useFocusEffect(
    useCallback(() => {
      LogBox.ignoreLogs(["Each child in a list should have a unique"]);
      const getUserLocation = async () => {
        try {
          const { status } = await Location.requestForegroundPermissionsAsync();
          if (status === "granted") {
            const location = await Location.getCurrentPositionAsync({});
            const { latitude, longitude } = location.coords;
            setUserLocation({ latitude, longitude });
          } else {
            Linking.openSettings();
          }
        } catch (error) {
          // Manejar los errores relacionados con la obtención de la ubicación
        }
      };

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

        setUserUid(userId);
      };

      const getUsersData = async (id) => {
        try {
          const app = getFirebaseApp();
          const dbRef = ref(getDatabase(app));
          const userRef = child(dbRef, `users/`);

          const snapshot = await get(userRef);

          const usersData = [];
          snapshot.forEach((data) => {
            if (data.val()?.latitude !== "") {
              if (data.val().userId !== id) {
                if (data.val().showLocation === true) {
                  if (viajero === true) {
                    if (data.val().userType === "conductor") {
                      usersData.push(data);
                    }
                  } else {
                    if (data.val().userType === "viajero") {
                      usersData.push(data);
                    }
                  }
                }
              }
            }
          });
          setUsers(usersData);
        } catch (error) {
          console.log(error);
        }
      };

      getStored();

      getUserLocation();
    }, [userLocation])
  );

  const updateLatitudeLongitude = (latitude, longitude) => {
    const childRef = ref(getDatabase(app), `users/${userUid}`);

    update(childRef, {
      latitude,
      longitude,
      largeRadius,
      userType,
      showLocation,
      needGas,
    })
      .then(() => {
        console.log("Child actualizado exitosamente");
      })
      .catch((error) => {
        console.log("Error al actualizar el child:", error);
      });
  };

  const setDirections = () => {
    if (userLocation) {
      const region = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

      updateLatitudeLongitude(userLocation.latitude, userLocation.longitude);

      mapRef.current.animateToRegion(region, 1000);
    }
  };

  const onPressUser = (user) => {
    navigation.navigate(screen.driver, { user: user });
  };

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 21.876828359577342,
          longitude: -102.26117693478515,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        ref={mapRef}
      >
        {userLocation && (
          <>
            <Circle
              center={userLocation}
              radius={predefinedRadius}
              fillColor="#024959"
              strokeColor="rgba(0, 0, 255, 0.5)"
            />
            <Circle
              center={userLocation}
              radius={largeRadius}
              fillColor="rgba(0, 0, 255, 0.1)"
              strokeColor="rgba(0, 0, 255, 0.3)"
            />
          </>
        )}
        {users.map((user, index) => (
          <>
            <Circle
              center={{
                latitude: parseFloat(user.val().latitude),
                longitude: parseFloat(user.val().longitude),
              }}
              radius={predefinedRadius}
              fillColor="rgba(223, 24, 24, 0.153)"
              strokeColor="rgba(223, 24, 24, 0.858)"
            />
            <Circle
              center={{
                latitude: parseFloat(user.val().latitude),
                longitude: parseFloat(user.val().longitude),
              }}
              radius={user.val().largeRadius}
              fillColor="rgba(223, 24, 24, 0.153)"
              strokeColor="rgba(223, 24, 24, 0.858)"
            />
          </>
        ))}

        {users.map((user, index) => (
          <>
            <Marker
              coordinate={{
                latitude: parseFloat(user.val().latitude),
                longitude: parseFloat(user.val().longitude),
              }}
              title={user.val().mail}
              description={user.val().controlNumber}
              onPress={() => onPressUser(user)}
            />
          </>
        ))}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={setDirections}>
        <Button title="Update location info" onPress={setDirections} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    bottom: 16,
    alignSelf: "center",
  },
});

export default Map;
