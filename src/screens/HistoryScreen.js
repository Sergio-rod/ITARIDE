import React from 'react';
import { VStack, Text, Box, Avatar, HStack, Heading, Button, Image, Center } from "native-base";
import styles from "../utils/styles";
import Ganzo from '../../assets/Ganzo.png';
import { View } from 'native-base';
import { FlatList } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


const settingsList = [
  { destination: 'TECNM', icon: 'location-outline', money: 'Today - 05/08/2023' },
  {  destination: 'Calvillo', icon: 'location-outline',money: 'Today - 05/08/2023'   },
  {  destination: 'Jesus María', icon: 'location-outline',money: 'Today - 05/08/2023'  },
  { destination: 'Campestre', icon: 'location-outline',money: 'Today - 05/08/2023' },
  {  destination: 'Morelos', icon: 'location-outline' ,money: 'Today - 05/08/2023'  },
  {  destination: 'Bosques', icon: 'location-outline',money: 'Today - 05/08/2023' }
];

// Renderizar cada elemento de la lista como un botón
const renderHistoryItem = ({ item, index }) => (
  <Box 
    key={index}
    borderWidth={1}
    style={styles.boxHistory}
  >
    <Text style={styles.historyText}>Destination: {item.destination}</Text>

    <Text style={styles.historyCost}>Date: {item.money}    
      <Ionicons name={item.icon} style={styles.historyIcon} />
    </Text>
  </Box>
);


const HistoryScreen = () => {
  return (
    <View style={styles.containerFlat}>
      <FlatList
        data={settingsList}
        renderItem={renderHistoryItem}
        keyExtractor={(item) => item.destination}
      />
    </View>
  );
};

export default HistoryScreen;
