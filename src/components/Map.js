import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Button } from 'react-native';
import MapView, { Marker, Polyline, Circle } from 'react-native-maps';

const Map = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [directions, setDirections] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
      });
    }
  }, []);

  const getDirections = () => {
    // Aquí puedes usar una biblioteca o servicio de enrutamiento para obtener las direcciones
    // entre las ubicaciones deseadas y luego actualizar el estado con los resultados.
    // Por ejemplo, puedes usar la API de Google Directions o servicios como Mapbox Directions.
    // Una vez que obtengas las direcciones, puedes establecerlas en el estado "directions".

    // Ejemplo de código utilizando la API de Google Directions
    // ...

    // setDirections(result);
  };

  return (
    <View style={styles.container}>
      <MapView style={styles.map} initialRegion={{ latitude: 21.876828359577342, longitude: -102.26117693478515, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }}>
        {userLocation && (
          <>
            <Marker coordinate={userLocation} />
            <Circle center={userLocation} radius={100} fillColor="rgba(0, 0, 255, 0.2)" strokeColor="rgba(0, 0, 255, 0.5)" />
          </>
        )}
        {directions && (
          <Polyline
            coordinates={directions} // Aquí debes proporcionar las coordenadas de los puntos de las direcciones obtenidas
            strokeWidth={3}
            strokeColor="blue"
          />
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
