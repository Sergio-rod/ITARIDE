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

      <Center width={'85%'} height='100%' >

        <VStack space={2}  alignItems={'center'}>

          <Box paddingBottom={10} flex={1} alignItems={'center'} marginBottom={'5'} justifyContent={'center'}>
            <Heading style={styles.headings}>
              Sign Up
            </Heading>
          </Box>

          <Heading style={styles.smallHeading} >
            Please, fill the fields:
          </Heading>


          <HStack space={2}>

            <Box flex={1}>
              
            <FormControl.Label>Code</FormControl.Label>

              <SelectCountry />
            </Box>

            <Box flex={3}>
              <FormControl>
              <FormControl.Label>Phone Number</FormControl.Label>
                <Input />
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
            bottom={0}
            alignItems="center"
            justifyContent='center'
            justifyItems={'center'}
          >


            <Button alignSelf={'center'} style={styles.buttonCian} mt={2}
              onPress={() =>{
              console.log("buton clicked",screen.authenticated);

              navigation.navigate(screen.authenticated);}}> Sign Up </Button>

          </Box>


          <Box
            height={60}
            safeAreaTop
            safeAreaBottom
            width="100%"
            maxW="300px"
            alignItems="center"
            justifyContent='center'

          >
            <Link mt={60} onPress={() => handleLinkPress()} colorScheme="cyan">
              Already have account? find It
            </Link>
          </Box>



        </VStack>
      </Center>
      </View>
   
  )
}

export default SignUpScreen
