import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Button, Linking } from 'react-native';
import MapView, { Circle } from 'react-native-maps';
import * as Location from 'expo-location';

const Map = ({ largeRadius }) => {
  const [userLocation, setUserLocation] = useState(null);
  const mapRef = useRef(null);
  const predefinedRadius = 20; // Radio predefinido en metros

  useEffect(() => {
    const getUserLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
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

    getUserLocation();
  }, []);

  const getDirections = () => {
    if (userLocation) {
      const region = {
        latitude: userLocation.latitude,
        longitude: userLocation.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };
      mapRef.current.animateToRegion(region, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 21.876828359577342, longitude: -102.26117693478515, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} ref={mapRef}>
        {userLocation && (
          <>
            <Circle center={userLocation} radius={predefinedRadius} fillColor="#024959" strokeColor="rgba(0, 0, 255, 0.5)" />
            <Circle center={userLocation} radius={largeRadius} fillColor="rgba(0, 0, 255, 0.1)" strokeColor="rgba(0, 0, 255, 0.3)" />
          </>
        )}
      </MapView>
      <TouchableOpacity style={styles.button} onPress={getDirections}>
        <Button title="Get my address" onPress={getDirections} />
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
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
  },
});

export default Map;
