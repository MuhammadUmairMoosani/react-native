import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import { Container, Header, Content, Form, Item, Input } from 'native-base';
export default class FormExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('10Sept2017', FormExample);