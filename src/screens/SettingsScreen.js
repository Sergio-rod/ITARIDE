import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Button } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../utils/styles';
import screen from '../utils/screenNames';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { userLogout } from '../utils/actions/authActions';
import { getFirebaseApp } from "../utils/firebaseHelper";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const SettingsScreen = () => {


  const dispatch = useDispatch();
  // Definir una lista de configuraciones con sus respectivos íconos
  const settingsList = [
    { name: 'Profile', icon: 'person', screen: 'ProfileScreen' },
    { name: 'Account', icon: 'key', screen: screen.accSettings },
    { name: 'Language', icon: 'globe', screen: 'LanguageScreen' },
    { name: 'Privacy', icon: 'lock-closed', screen: 'PrivacyScreen' },
    { name: 'Add Home', icon: 'home', screen: 'AddHomeScreen' },
    { name: 'Add Work', icon: 'briefcase', screen: 'AddWorkScreen' }
  ];

  const navigation = useNavigation();

  // Navegar a la pantalla correspondiente cuando se presiona un elemento
  const navigateToScreen = (screen) => {
    navigation.navigate(screen);
  };
  // Renderizar cada elemento de la lista como un botón presionable
  const renderSettingItem = ({ item }) => (
    <TouchableOpacity
      style={styles.settingButton}
      activeOpacity={0.8}
      onPress={() => navigateToScreen(item.screen)}
    >
      <Ionicons name={item.icon} style={styles.settingIcon} />
      <Text style={styles.settingText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleLogOut = () => {
    const app = getFirebaseApp();
    getAuth(app).signOut().then(() => {
      navigation.navigate(screen.signUp);
    }).catch((error) => {
      
    });

    dispatch(userLogout())
  }

  return (
    <View style={styles.containerFlat}>
      <FlatList
        data={settingsList}
        renderItem={renderSettingItem}
        keyExtractor={(item) => item.name}
      />
           <Button
          colorScheme="red"
          variant="link"
          size="md"
          onPress={() => handleLogOut()}
        >
          Logout
        </Button>
    </View>
  );
};

export default SettingsScreen;
