import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
 
class CalendarView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
 
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <CalendarPicker
          onDateChange={(day) => this.props.navigation.navigate("Carnet", {day : day.format("YYYY-MM-DD")})}
        />
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100,
  },
});

export default CalendarView