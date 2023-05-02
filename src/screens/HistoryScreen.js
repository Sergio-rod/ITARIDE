import React from 'react';
import { VStack, Text, Box, Avatar, HStack, Heading, Button, Image, Center } from "native-base";
import styles from "../utils/styles";
import Ganzo from '../../assets/Ganzo.png';
import { View } from 'native-base';
import { FlatList } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';


const settingsList = [
  { destination: 'TECNM', icon: 'person', money: 54 },
  {  destination: 'Calvillo', icon: 'key',money: 54  },
  {  destination: 'Jesus María', icon: 'globe',money: 54  },
  { destination: 'Campestre', icon: 'lock-closed',money: 54  },
  {  destination: 'Morelos', icon: 'home' ,money: 54 },
  {  destination: 'Bosques', icon: 'briefcase',money: 54  }
];

// Renderizar cada elemento de la lista como un botón
const renderSettingItem = ({ item }) => (
  <Box 
    borderWidth={1}
       >
    <Text style={styles.settingText}>Destination: {item.destination} cost: {item.money}
    
    <Ionicons  name={item.icon} style={styles.settingIcon} /></Text>

  </Box>
);

const HistoryScreen = () => {
  return (
    <View style={styles.containerFlat}>
    <FlatList
      data={settingsList}
      renderItem={renderSettingItem}
      keyExtractor={(item) => item.name}
    />
  </View>
  );
};

export default HistoryScreen;
