import React, { useState } from 'react';
import { View, Modal, Button } from 'react-native';
import { StyleSheet } from 'react-native';
// import OtpInput from 'react-otp-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import { Text } from 'react-native-elements';
import { Box } from 'native-base';
const ModalAuth = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [otp, setOtp] = useState('');

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleOTPChange = (otp) => {
    setOtp(otp);
    console.log('OTP entered:', otp);
    // Aquí puedes realizar cualquier lógica adicional con el OTP ingresado
  };




  return (
    <View style={styles.containerModal}>
      <Button title="Already have account?, find it" onPress={handleOpenModal} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={{justifyContent: 'center', alignItems: 'center', alignContent:'center' }}>
          <Box mt={200} alignContent={'center'} alignItems={'center'} justifyContent={'center'} justifyItems={'center'}>
          <Text>Verify you´r phone number</Text>
          <OTPInputView
          style={{width: '80%', height: 200, alignSelf:'center'}}
           pinCount={6}
           autoFocusOnLoad
           codeInputFieldStyle={styles.underlineStyleBase}
           codeInputHighlightStyle={styles.underlineStyleHighLighted}
           onCodeFilled={handleOTPChange}
          />

          <Button title='Verify' />
          
          
          <Button title="Cerrar Modal" onPress={handleCloseModal} />
          </Box>
        </View>
      </Modal>
    </View>
  );
};

export default ModalAuth;



const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  containerModal:{
    flex: 1,
    alignContent: 'center',
    alignItems:'center',
    
  }
});