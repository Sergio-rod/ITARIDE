import React from 'react';
import { VStack, Input, FormControl, Box, Avatar, HStack, Heading, Button, Image, Center, View } from "native-base";
import styles from "../utils/styles";
import Ganzo from '../../assets/Ganzo.png';
import screen from '../utils/screenNames';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from "native-base";
import SelectTime from '../components/SelectTime';
import PassengerRatings from '../components/Stars';



const DriverScreen = ({ navigation }) => {

    function onPressIcon() {
        navigation.navigate(screen.chat)
      }

    return (
        <Center
            alignSelf={'center'}
            flex={1} width={'85%'}
            height='100%'
            borderWidth={1}
        >
            <VStack flex={1} space={1} alignItems={'center'} borderWidth={1} >

                <Box flex={2 / 10} alignItems={'center'} marginTop={4}>
                    <Heading style={styles.headings}>
                        I give a Ride
                    </Heading>
                </Box>
                <Box flex={8 / 10} overflow={'hidden'} minWidth={'70%'}>
                    <Box
                        flex={1}
                        borderWidth={2}
                        borderColor={'black'}
                        borderRadius={'full'}
                        backgroundColor={'transparent'}
                    >
                        <Avatar flexDirection={'row'} flex={1} width={'full'}>
                            <Image
                                flex={1}
                                source={Ganzo}
                                alt={'Avatar'}
                                borderRadius={'full'}
                                resizeMode={'cover'}
                                style={{ width: '100%', height: '100%' }}
                            />
                        </Avatar>
                    </Box>
                    <IconButton
                        onPress={onPressIcon} 
                        borderRadius={'full'}
                        position="absolute"
                        bottom={0}
                        right={0}
                        bg="black"
                        _hover={{ backgroundColor: 'black' }}
                        icon={<Ionicons name="chatbubble-ellipses-outline" size={70} color="white" />}
                        zIndex={1}
                    />
                </Box>





                <Box flex={1} borderWidth={1} borderColor={'red'} borderRadius={10} p={5}>

                    <VStack spacing={2}>

                        <Box flex={1} alignItems={'center'} justifyContent={'center'}>
                            <Heading style={styles.headings}>
                                Passenger
                            </Heading>
                        </Box>



                        <Box flex={1} marginTop={10}>

                            <FormControl.Label>Name</FormControl.Label>
                            <Input defaultValue="Ganzo" isReadOnly={true} />

                        </Box>

                        <Box flex={1} marginTop={10}>

                            <HStack flex={1} space={5}>
                                <Box flex={1}>
                                    <FormControl.Label>Time to arrive:</FormControl.Label>
                                </Box>

                                <Box flex={1}>
                                    <FormControl>
                                        <FormControl.Label>Passenger ratings</FormControl.Label>
                                        <PassengerRatings/>
                                    </FormControl>

                                </Box>

                            </HStack>
                        </Box>


                        <Box
                            flex={1}
                            alignItems="center"
                            marginTop={10}
                        >

                            <Button alignSelf={'center'} style={styles.buttonCian} mt={2}
                                onPress={() => {
                                    console.log("buton clicked", screen.authenticated);

                                    navigation.navigate(screen.authenticated);
                                }}>Request Ride </Button>

                        </Box>

                    </VStack>
                </Box>

            </VStack>


        </Center>
    );
};

export default DriverScreen;
