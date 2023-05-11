import React, { useState } from 'react';
import { Container, Content, Header, Left, Body, Right, Icon, Title, Input, Item, Text } from 'native-base';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const ChatScreen = () => {
  const [message, setMessage] = useState('');

  return (
    <Container>
      <Header>
        <Left>
          <Icon name='arrow-back' />
        </Left>
        <Body>
          <Title>John Smith</Title>
        </Body>
        <Right>
          <Icon name='more' />
        </Right>
      </Header>
      <KeyboardAwareScrollView>
        <Content>
          <Text style={{ alignSelf: 'center', marginVertical: 20 }}>No messages yet</Text>
        </Content>
      </KeyboardAwareScrollView>
      <Item rounded style={{ backgroundColor: '#fff', paddingHorizontal: 10 }}>
        <Input placeholder='Type a message' value={message} onChangeText={setMessage} />
        <Icon name='camera' />
        <Icon name='mic' />
      </Item>
    </Container>
  );
};

export default ChatScreen;
