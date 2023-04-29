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

      <Center alignSelf={'center'} width={'85%'} height='100%' >

        <VStack style={styles.verticalStack}>

          <Box paddingBottom={5} flex={1} alignItems={'center'} marginBottom={'5'} justifyContent={'center'}>
            <Heading style={styles.headings}>
              Sign Up
            </Heading>
          </Box>

          <Heading style={styles.smallHeading} >
            Please, fill the fields:
          </Heading>


          <HStack flex={2} space={2}>

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

          <HStack flex={2} space={2}>
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

          <Box flex={2}>
          <FormControl flex={1}>
            <FormControl.Label>Institute Mail</FormControl.Label>
            <Input width={'100%'} type="text" />
          </FormControl>


          </Box>

          

          <Box
          flex={2}
            width="100%"
            alignItems="center"
          >

            <Button  alignSelf={'center'} style={styles.buttonCian} mt={2}
              onPress={() =>{
              console.log("buton clicked",screen.authenticated);

              navigation.navigate(screen.authenticated);}}>Sign Up </Button>

          </Box>


          <Box flex={2}
          alignSelf={'center'}
            
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
