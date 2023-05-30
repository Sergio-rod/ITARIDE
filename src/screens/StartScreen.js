import React, { useEffect } from 'react';
import { Image, Box, VStack, Button, View, Center } from 'native-base';
import Logo from '../../assets/Logo.png';
import styles from '../utils/styles';
import screen from '../utils/screenNames';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { authenticate, setDidTryAutoLogin } from '../../store/authSlice';
import { getUserData } from '../utils/actions/userActions';


const StartScreen = ({ navigation }) => {

  const dispatch = useDispatch();


  useEffect(() => {
    const tryLogin = async () => {

      const storedAuthInfo = await AsyncStorage.getItem("userData");

      if (!storedAuthInfo) {
        console.log("No storage found");
        dispatch(setDidTryAutoLogin());
        return;
      }

      const parsedData = JSON.parse(storedAuthInfo);
      const {token,userId,expiryDate:expiryDateString} = parsedData;

      const expiryDate = new Date(expiryDateString);

      if(expiryDate <= new Date() || !token || !userId){
        dispatch(setDidTryAutoLogin());
        return;
      }

      const userData = await getUserData(userId);
      dispatch(authenticate({token:token,userData}));




    }

    tryLogin();
  }, [dispatch]);

  return (
    <>
      <View style={styles.container}>
        <Center width='100%' height='100%'>
          <VStack style={styles.verticalStack}>
            <Image size={150} source={Logo} alt="Mi Logo" />
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
