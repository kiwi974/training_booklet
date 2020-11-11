import React, { Component } from 'react';
import { AppRegistry, StyleSheet,Text,View, TouchableHighlight } from 'react-native';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
 
class Chronometer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stopwatchStart: false,
      stopwatchReset: false,
    };
    this.toggleStopwatch = this.toggleStopwatch.bind(this);
    this.resetStopwatch = this.resetStopwatch.bind(this);
  }
 
  toggleStopwatch() {
    this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
  }
 
  resetStopwatch() {
    this.setState({stopwatchStart: false, stopwatchReset: true});
  }
 
  render() {
    return (
      <View style={StyleSheet.main_container}>
        <View style={styles.timer_container}>
          {/*<Stopwatch laps msecs start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={options}
    getTime={this.getFormattedTime} />*/}
        </View>
        <View style={styles.buttons_container}> 
          {/*<TouchableHighlight onPress={this.toggleStopwatch}>
            <Text style={{fontSize: 30}}>{!this.state.stopwatchStart ? "Start" : "Stop"}</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.resetStopwatch}>
            <Text style={{fontSize: 30}}>Reset</Text>
  </TouchableHighlight>*/}
        </View>
      </View>
    );
  }
}
 
const handleTimerComplete = () => alert("custom completion function");
 
const styles = StyleSheet.create({
  main_container: {
    flex: 10,
    backgroundColor: 'black'
  },
  timer_container: {
    flex: 5,
    backgroundColor: 'red'
  },
  buttons_container: {
    flex: 5,
    backgroundColor: 'green'
  }
})

const options = {
  container: {
    backgroundColor: '#ff9e37',
    padding: 5,
    borderRadius: 5,
    width: 220,
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  }
};
 
export default Chronometer