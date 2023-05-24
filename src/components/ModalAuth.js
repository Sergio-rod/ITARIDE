import React, { useState } from 'react';
import { View, Modal, Button } from 'react-native';
import OtpInput from 'otp-input-react';
import styles from '../utils/styles';
import { CgSpinner } from 'react-icons/cg';
import { Text } from 'native-base';
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
    <View>
      <Button title="Already have account?, find it" onPress={handleOpenModal} />
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <OtpInput
            value={otp}
            onChange={handleOTPChange}
            OTPLength={6}
            isInputNum
            shouldAutoFocus
          />

          <Button title='Verify' />
          
          
          <Button title="Cerrar Modal" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalAuth;
