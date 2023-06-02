import React, { useCallback, useEffect, useReducer, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { updateLoggeddInUserData } from "../../store/authSlice";

const AccountSettings = (props) => {
  const dispatch = useDispatch();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const userData = useSelector((state) => state.auth.userData);
  console.log(userData);

  const firstName = userData.firstName || "";

  // STATES
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

  const saveHandler = useCallback(async () => {
    const updatedValues = formData;
    try {
      await updatedSignedUserData(userData.userId, updatedValues);
      dispatch(updateLoggeddInUserData({ newData: updatedValues }));
      setShowSuccessMessage(true);
    } catch (error) {
      console.log(error);
    }
  }, [formData, dispatch]);

  const hasChanges = () => {
    const currentValues = formData;
    return currentValues.firstName !== firstName && currentValues.firstName !== undefined;
  };

  const onSubmit = async () => {
    if (hasChanges()) {
      saveHandler();
      console.log("You completed the form!");
    } else {
      console.log("You must complete all fields");
    }
  };

  return (
    <Stack space={3} px="4" safeArea>
      <Box marginBottom={5} marginTop={5} alignSelf="center">
        <Text bold fontSize="3xl">
          Account Settings
        </Text>
      </Box>

      <Box>
        {/* First Name */}
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
        {/* Last Name */}
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
        {/* About Me */}
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

      {showSuccessMessage && <Text>Saved</Text>}

      <Box alignItems="center">
        {hasChanges() && (
          <Button style={styles.buttonCian} onPress={onSubmit}>
            Submit
          </Button>
        )}
      </Box>
    </Stack>
  );
};

export default AccountSettings;
