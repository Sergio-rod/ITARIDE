import * as React from "react";
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
import screen from "../utils/screenNames";
import SelectCountry from "../components/SelectCountry";
import SelectTECNM from "../components/SelectTECNM";
import validationSignUp from "../utils/validations/validationSignUp";

const SignUpScreen = ({ navigation }) => {
  //STATES
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  // view password
  const [show, setShow] = React.useState(false);
  const [selectedCountry, setSelectedCountry] = React.useState("");
  const [selectedTECNM, setSelectedTECNM] = React.useState("");

  //selects
  const handleCountryValueChange = (value) => {
    setSelectedCountry(value); // Actualizar el valor seleccionado
    setFormData({ ...formData, code: value }); // Agregar el valor al estado formData
  };

  const handleTECNMValueChange = (value) => {
    setSelectedTECNM(value); // Actualizar el valor seleccionado
    setFormData({ ...formData, campus: value }); // Agregar el valor al estado formData
  };


  const validate = () => {
    const validationErrors = validationSignUp(formData);
    if (validationErrors) {
      setErrors(validationErrors);
      return false;
    }
  
    setErrors({});
    return true;
  };


  const authHandler = () => {
    
  }


  const onSubmit = async () => {
    if (validate()) {
      console.log('Form Data', formData);
      navigation.navigate(screen.authenticated);
      console.log('You completed the form!');
    }else{console.log('u must complete all')}


  };

  return (
    <Stack space={3} px="4" safeArea >

      <Box  marginBottom={5} marginTop={5} alignSelf={"center"}>
        <Text bold fontSize={'3xl'} >Sign up</Text>
      </Box>

      <Box marginBottom={5}  alignSelf={"left"}>
        <Text bold fontSize={'md'} >Please fill the fields</Text>
      </Box>

      <Box>
        <HStack space={2}>
          {/* codigo y telefono */}
          <FormControl flex={1} isRequired isInvalid={'code' in errors}>
            <FormControl.Label>Code</FormControl.Label>
            <SelectCountry onValueChange={handleCountryValueChange} />
          </FormControl>

          <FormControl flex={3} isRequired isInvalid={'phoneNumber' in errors}>
            <FormControl.Label>Phone number</FormControl.Label>
            <Input
              placeholder="Phone number"
              onChangeText={value => setFormData({ ...formData, phoneNumber: value })}
            />
          </FormControl>
        </HStack>
      </Box>

      <Box>
        <HStack space={2}>
          {/* campus y numero de control */}
          <FormControl flex={1} isRequired isInvalid={'campus' in errors}>
            <FormControl.Label>Campus</FormControl.Label>
            <SelectTECNM onValueChange={handleTECNMValueChange} />
          </FormControl>

          <FormControl flex={3} isRequired isInvalid={'controlNumber' in errors}>
            <FormControl.Label>Control number</FormControl.Label>
            <Input
              placeholder="Control number"
              onChangeText={value => setFormData({ ...formData, controlNumber: value })}
            />
          </FormControl>
        </HStack>
      </Box>


      <Box>
        {/* Email */}
        <FormControl isRequired isInvalid={'mail' in errors}>
          <FormControl.Label>E-mail</FormControl.Label>
          <Input
            type='text'
            p={2}
            placeholder="mail"
            onChangeText={value => setFormData({ ...formData, mail: value })}
          />
        </FormControl>
      </Box>





      <Box>
        {/* contraseña */}
        <FormControl isRequired isInvalid={'pass' in errors}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon as={<Icon name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
              </Pressable>
            }
            p={2}
            placeholder="Password"
            onChangeText={value => setFormData({ ...formData, pass: value })}
          />
          {'pass' in errors ?
            <FormControl.ErrorMessage>{errors.pass}</FormControl.ErrorMessage> :
            <FormControl.HelperText>
              We'll keep this between us.
            </FormControl.HelperText>
          }
        </FormControl>
      </Box>

      <Box>
        <Button colorScheme="primary" variant="link" size="xs" onPress={() => navigation.navigate(screen.login)}>
          Already have an account? Press here
        </Button>
      </Box>

      <Box alignItems={'center'}>
        <Button style={styles.buttonCian} onPress={onSubmit}>
          Submit
        </Button>
      </Box>
    </Stack>
  );
};

export default SignUpScreen;
