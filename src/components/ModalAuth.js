import React, { useState } from 'react';
import { View, Modal, Button } from 'react-native';
import OtpInput from 'otp-input-react';

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
      <Button title="Abrir Modal" onPress={handleOpenModal} />
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
            numInputs={4}
            separator={<span>-</span>}
            inputStyle={{
              width: 50,
              height: 50,
              marginHorizontal: 5,
              fontSize: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'gray',
              textAlign: 'center',
            }}
            isInputNum
            shouldAutoFocus
          />
          <Button title="Cerrar Modal" onPress={handleCloseModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ModalAuth;
