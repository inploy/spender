import React from 'react';
import styled from 'styled-components';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      chosenDate :''
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.hideDateTimePicker();
  };

  render() {
    return (
      <Body>
        <TopBody>

          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
        </TopBody>
        <View style={styles.flex2}>
          <Text onPress={this.showDateTimePicker}>Button{this.state.chosenDate}sss</Text>
        </View>
        <View style={styles.flex3}></View>
      </Body>


    );
  }
}


const Body = styled.View`
flex:1;
	background-color: papayawhip;
	justify-content: center;

`;
const TopBody = styled.View`
  height: 100;
  backgroundColor: powderblue;

`;

const styles = StyleSheet.create({

  flex1: {
    height: 100,
    backgroundColor: 'powderblue'
  },
  flex2: {
    height: 200,
    backgroundColor: 'skyblue'
  },
  flex3: {
    height: 400,
    backgroundColor: 'steelblue'
  }

});
