import React from 'react';
import { VStack, Text, Box, Avatar, HStack, Heading, Button, Image, Center } from "native-base";
import styles from "../utils/styles";
import Ganzo from '../../assets/Ganzo.png';

const ProfileScreen = () => {
  return (
    <Center flex={1} width={'100%'}>
      <Box safeArea p="2" w="100%" maxW="290" py="8">

      <Box alignItems={'left'} marginBottom={'5'}>
          <Heading style={styles.headings}>
            Profile 
          </Heading>
        </Box>
       
    
      </Box>

    </Center>
  );
};

export default ProfileScreen;
