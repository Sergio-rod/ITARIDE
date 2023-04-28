import * as React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Button,
  Center,
  NativeBaseProvider,
  HStack,
  Link,
  View
} from "native-base";
import styles from "../utils/styles";
import SelectCountry from "../components/SelectCountry";

const SignUpScreen = ({ navigation }) => {
  return (

    <View  flex={1} style={styles.containerSign}>
    
    <Center w="100%" flex={1}>
      <Box flex={1} safeArea p="2" w="100%" maxW="290" py="8">

        
        <Box alignItems={'center'} marginBottom={'5'}>
          <Heading style={styles.headings}>
            Sign Up
          </Heading>
        </Box>


        <Heading style={styles.smallHeading} >
          Please, fill the fields:
        </Heading>
        <VStack width={'100%'} space={5} mt="5">
          <FormControl.Label>Phone Number</FormControl.Label>

          <HStack  space={2}>

            <Box flex={1}>

              <SelectCountry />
            </Box>

            <Box flex={3}>
              <FormControl>
                <Input  />
              </FormControl>
            </Box>
          </HStack>

          <HStack space={2}>
            <Box flex={1}>
              <FormControl.Label>CAMPUS</FormControl.Label>
              <SelectCountry />
            </Box>
            
            <Box flex={3}>
              <FormControl>
                <FormControl.Label>Control number</FormControl.Label>
                <Input type="text" />
              </FormControl>

            </Box>

          </HStack>

          <FormControl>
            <FormControl.Label>Institute Mail</FormControl.Label>
            <Input type="text" />
          </FormControl>
          
          <Box
            flex={1} 
            safeAreaTop 
            width="100%" 
            maxW="300px"
              position="absolute" 
              bottom={0}
              alignItems="center"
          >


            <Button style={styles.buttonCian} mt={2}
              onPress={() => navigation.navigate(screen.authenticated)}> Sign Up </Button>

          </Box>


          <Box
           height={60}
           safeAreaTop 
           safeAreaBottom
           width="100%" 
           maxW="300px"
           alignItems="center"
         
          >
            <Link mt={110} onPress={() => handleLinkPress()} colorScheme="cyan">
              Already have account? find It
            </Link>
          </Box>


        </VStack>
      </Box>
    </Center>
    </View>
  );
};

export default SignUpScreen;
