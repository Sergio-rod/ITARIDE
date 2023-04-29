import React from 'react';
import { Image, Box, VStack, Button,View,Center} from 'native-base';
import Logo from '../../assets/Logo.png';
import styles from '../utils/styles';

const StartScreen = ({ navigation }) => {
  return (
    <>
    <View style={styles.container}>
      <Center width='100%' height='100%'>
      <VStack style={styles.verticalStack}>
        <Image  size={150} source={Logo} alt="Mi Logo" />
        <Box
        paddingBottom={10}
        flex={1} 
        safeAreaTop 
        width="100%" 
        maxW="300px"
         alignSelf="center"
          position="absolute" 
          bottom={0}
          alignItems="center">
          <Button style={styles.buttonBlack}
          onPress={() => navigation.navigate(screen.signUp)}> Get Started </Button>
        </Box>
      </VStack>
      </Center>
    </View>

    </>
  );
};

  
export default StartScreen;
 