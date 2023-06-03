import React, { useEffect, useReducer, useState } from "react";
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  Text,
  Pressable,
  Icon,
  HStack,
  Stack,
} from "native-base";
import styles from "../utils/styles";
import validationSignUp from "../utils/validations/validationSignUp";
import { signUp, updatedSignedUserData } from "../utils/actions/authActions";
import { Alert } from "react-native";
import { useSelector } from "react-redux";

const AccountSettings = (props) => {
  const userData = useSelector((state) => state.auth.userData);

  //STATES
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const validate = () => {
    const validationErrors = validationSignUp(formData);
    if (validationErrors) {
      setErrors(validationErrors);
      return false;
    }

    setErrors({});
    return true;
  };

  //   useEffect(() => {
  //     if (isAuth) {
  //       navigation.navigate(screen.authenticated);
  //     }
  //   }, [isAuth, navigation]);

  //   const authHandler = async () => {
  //     try {
  //       const action =  signUp(formData)
  //       await dispatch(action);
  //     } catch (error) {
  //       if (error.message === "This mail is already in use") {
  //         Alert.alert("Error", error.message);
  //       } else {
  //         Alert.alert("Error", error.message);
  //       }
  //     }
  //   };

  const saveHandler = async () => {
    const updatedValues = formData;
    try {
      await updatedSignedUserData(userData.userId, updatedValues);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async () => {
    if (true) {
      saveHandler();
      console.log("You completed the form!");
    } else {
      console.log("u must complete all");
    }
  };

  return (
    <Stack space={3} px="4" safeArea>
      <Box marginBottom={5} marginTop={5} alignSelf={"center"}>
        <Text bold fontSize={"3xl"}>
          Account Settings
        </Text>
      </Box>

      <Box>
        {/* Email */}
        <FormControl isRequired isInvalid={"firstName" in errors}>
          <FormControl.Label>First Name</FormControl.Label>
          <Input
            type="text"
            p={2}
            placeholder="First Name"
            onChangeText={(value) =>
              setFormData({ ...formData, firstName: value })
            }
          />
        </FormControl>
      </Box>

      <Box>
        {/* Email */}
        <FormControl isRequired isInvalid={"lastName" in errors}>
          <FormControl.Label>Last Name</FormControl.Label>
          <Input
            type="text"
            p={2}
            placeholder="Last Name"
            onChangeText={(value) =>
              setFormData({ ...formData, lastName: value })
            }
          />
        </FormControl>
      </Box>

      <Box>
        {/* Email */}
        <FormControl isRequired isInvalid={"about" in errors}>
          <FormControl.Label>About Me</FormControl.Label>
          <Input
            type="text"
            p={2}
            placeholder="Something about me...."
            onChangeText={(value) => setFormData({ ...formData, about: value })}
          />
        </FormControl>
      </Box>

      <Box alignItems={"center"}>
        <Button style={styles.buttonCian} onPress={onSubmit}>
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default AccountSettings;
