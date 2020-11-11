import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
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
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <ImageBackground source={require('../assets/stretch.jpg')} style={styles.image} >
          <View style={styles.calendar_view}>
            <CalendarPicker
              todayBackgroundColor='#8f8f8f'
              selectedDayColor='#cacaca'
              onDateChange={(day) => this.props.navigation.navigate("Carnet", {day : day.format("YYYY-MM-DD")})}
            />
          </View>
        </ImageBackground>
        
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: 'white',
    justifyContent: "center"
  },
  image: {
    flex:10,
    height: '100%',
    width: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
  calendar_view: {
    height: '50%',
    backgroundColor: 'rgba(255,255,255,0.7)',
  },
});

export default CalendarView