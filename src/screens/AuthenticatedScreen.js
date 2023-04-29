import * as React from "react";
import BottomTabNavigator from "../navigation/BottomNavigator";
import { Button, VStack, Center, View } from "native-base";
import styles from "../utils/styles";



const AuthenticatedScreen = () => {
  return (<>
  <View  style={styles.containerHome} >

    <BottomTabNavigator/> 
    </View>
    </>
  );
};

export default AuthenticatedScreen;
