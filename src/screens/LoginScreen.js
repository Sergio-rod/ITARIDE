import React, { useState } from "react";
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Pressable,
  Icon,
  Stack
} from "native-base";
import styles from "../utils/styles";
import { signInWithEmailAndPassword, signInWithPhoneNumber } from "firebase/auth";
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import screen from "../utils/screenNames";

import ModalAuth from "../components/ModalAuth";

const LoginScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  // view password
  const [show, setShow] = useState(false);

  var pattern = new RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  );

  const validate = () => {
    // ...
    // Resto del código de validación
    // ...
  };

  const onSubmit = async () => {
    const isAuth = true;

    // Try authenticator
    if (isAuth) {
      console.log('You are authenticated');
      navigation.navigate(screen.authenticated);
    } else {
      console.log('You must be authenticated');
    }
    // End authenticator
  };

  return (
    <Stack space={3} alignSelf="center" px="4" safeArea mt="5" w={{ base: "100%", md: "50%" }}>
      <Box alignSelf="center">
        <Text bold fontSize="3xl" alignContent="center" size={20}>
          Login
        </Text>
      </Box>

      <Box>
        <FormControl isRequired isInvalid={'name' in errors}>
          <FormControl.Label>Nick Name</FormControl.Label>
          <Input
            p={3}
            placeholder="Nick Name"
            onChangeText={value => setFormData({ ...formData, name: value })}
          />
          {'name' in errors ? (
            <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>
              Name should contain at least 3 characters.
            </FormControl.HelperText>
          )}
        </FormControl>
      </Box>

      <Box>
        <FormControl isRequired isInvalid={'pass' in errors}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={<Icon name={show ? "visibility" : "visibility-off"} />}
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            p={2}
            placeholder="Password"
            onChangeText={value => setFormData({ ...formData, pass: value })}
          />
          {'pass' in errors ? (
            <FormControl.ErrorMessage>{errors.pass}</FormControl.ErrorMessage>
          ) : (
            <FormControl.HelperText>We'll keep this between us.</FormControl.HelperText>
          )}
        </FormControl>
      </Box>

      <Box>
        <Button colorScheme="primary" variant="link" size="xs">
          Did you forget the password? Press here
        </Button>
      </Box>

      <Box alignItems="center">
        <Button style={styles.buttonCian} onPress={onSubmit}>
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default LoginScreen;
