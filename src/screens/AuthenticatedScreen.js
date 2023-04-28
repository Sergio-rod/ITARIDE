import * as React from "react";
import BottomTabNavigator from "../navigation/BottomNavigator";
import { Button, VStack,Center,View } from "native-base";
import styles from "../utils/styles";



const AuthenticatedScreen = () => {
  return (<>
    <View style={styles.containerHome} flex={1}>
      <Center width='100%' height='100%'>
        <VStack width={'100%'} style={styles.verticalStack}>
          <BottomTabNavigator />
        </VStack>
      </Center>


    </View>
  </>
  );
};

export default AuthenticatedScreen;
