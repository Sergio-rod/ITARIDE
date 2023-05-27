import * as React from "react";
import {
  Box,
  VStack,
  FormControl,
  Input,
  Button,
  ScrollView,
  Text,
  Pressable,
  Icon,
  HStack,
  FlatList,
  Stack
} from "native-base";
import styles from "../utils/styles";
import screen from "../utils/screenNames";
import SelectCountry from "../components/SelectCountry";
import SelectTECNM from "../components/SelectTECNM";




const SignUpScreen = ({ navigation }) => {


  //STATES
  
    const [formData, setFormData] = React.useState({});
    const [errors, setErrors] = React.useState({});
    // view password
    const[show, setShow] = React.useState(false);

    const [selectedCountry, setSelectedCountry] = React.useState("");
    const [selectedTECNM, setSelectedTECNM] = React.useState("");




    //selects
    const handleCountryValueChange = (value) => {
      setSelectedCountry(value); // Actualizar el valor seleccionado
      setFormData({ ...formData, country: value }); // Agregar el valor al estado formData
    };
  
    const handleTECNMValueChange = (value) => {
      setSelectedTECNM(value); // Actualizar el valor seleccionado
      setFormData({ ...formData, TECNM: value }); // Agregar el valor al estado formData
    };
  


    var pattern = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-+_!@#$%^&*.,?]).+$"
  
    )
  
    const validate = () => {
      if (formData.name === undefined) {
        setErrors({
          ...errors,
          name: 'Name is required'
        });
        return false;
      } else if (formData.name.length < 3) {
        setErrors({
          ...errors,
          name: 'Name is too short'
        });
        return false;
      } else if (!formData.pass) {
        console.log('passs 1 if ', formData.pass)
        setErrors({
          ...errors,
          pass: 'Password is required'
        });
        return false;
      } else if (formData.pass.length < 8) {
        setErrors({
          ...errors,
          pass: 'Pass is too short'
        });
        return false;
      }
      else if (!pattern.test(formData.pass)) {
        //formData.pass.search('[A-Z]')
        console.log('pass', formData.pass)
        setErrors({
          ...errors,
          pass: 'Must contain a special character'
        });
        return false
      }
  
      setErrors({})
      return true;
    };
  
    const onSubmit = async () => {


        navigation.navigate(screen.authenticated)


        console.log('You complete the form!')

  
    };
  
  
    return (
      <ScrollView>
        
        <Stack space={3} alignSelf="center" px="4" safeArea mt="5"
          w={{ base: "100%", md: "50%" }}>
  
  
          <Box marginBottom={10} flex={1} alignSelf={"center"}>
            <Text bold fontSize={'3xl'} >Sign up</Text>
          </Box>


          <Box marginBottom={10} flex={1} alignSelf={"left"}>
            <Text bold fontSize={'md'} >Please fill the fields</Text>
          </Box>
  
  


          <Box>

            <HStack space={2} >




            <FormControl flex={1} isRequired isInvalid={'name' in errors}>
              <FormControl.Label>Code</FormControl.Label>
              <SelectCountry onValueChange={handleCountryValueChange} />
  
  
  
            </FormControl>

            <FormControl flex={3} isRequired isInvalid={'name' in errors}>
              <FormControl.Label>Phone number</FormControl.Label>
              <Input  placeholder="Phone number"
                onChangeText={value => setFormData({
                  ...formData,
                  phoneNumber: value
                })} />
  
            </FormControl>






            </HStack>



  
  
          </Box>


          <Box>

            <HStack space={2} >




            <FormControl flex={1} isRequired isInvalid={'name' in errors}>
              <FormControl.Label>Campus</FormControl.Label>
              <SelectTECNM onValueChange={handleTECNMValueChange} />
  
  
  
            </FormControl>

            <FormControl flex={3} isRequired isInvalid={'name' in errors}>
              <FormControl.Label>Control number</FormControl.Label>
              <Input  placeholder="Control number"
                onChangeText={value => setFormData({
                  ...formData,
                  controlNumber: value
                })} />
  
            </FormControl>






            </HStack>



  
  
          </Box>
          


          <Box>
            <FormControl isRequired isInvalid = {'pass' in errors}>
              <FormControl.Label>Password</FormControl.Label>
              <Input type={show ? "text" : "password" } 
              InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<Icon name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>}
              p={2} placeholder="Password"
              onChangeText={value => setFormData({
                ...formData,
                pass: value
              })} />
              {'pass' in errors ?
                <FormControl.ErrorMessage>{errors.pass}</FormControl.ErrorMessage>:
              <FormControl.HelperText>
                We'll keep this between us.
              </FormControl.HelperText>}
  
            </FormControl>
  
  
          </Box>

          <Box>
            <Button
              colorScheme="primary" variant="link" size="xs"
              onPress={() => navigation.navigate(screen.login)}>
              Already have account? Press here
            </Button>

          
  
  
          </Box>



          <Box alignItems={'center'}>
            <Button style={styles.buttonCian}
              onPress={onSubmit}>
              Submit
            </Button>
          

          
  
  
          </Box>
        </Stack>
      </ScrollView>
    )
}

export default SignUpScreen
