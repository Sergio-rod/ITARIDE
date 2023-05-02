import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../utils/styles';


const SettingsScreen = () => {

  // Definir una lista de configuraciones con sus respectivos íconos
  const settingsList = [
    { name: 'Profile', icon: 'person' },
    { name: 'Account', icon: 'key' },
    { name: 'Language', icon: 'globe' },
    { name: 'Privacy', icon: 'lock-closed' },
    { name: 'Add Home', icon: 'home' },
    { name: 'Add Work', icon: 'briefcase' }
  ];

  // Renderizar cada elemento de la lista como un botón
  const renderSettingItem = ({ item }) => (
    <Button 
      block 
      transparent 
      iconLeft 
      style={styles.settingButton} 
      activeOpacity={0.8} // Configurar la opacidad cuando el botón es seleccionado
    >
      <Ionicons name={item.icon} style={styles.settingIcon} />
      <Text style={styles.settingText}>{item.name}</Text>
    </Button>
  );

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


export default SettingsScreen;
