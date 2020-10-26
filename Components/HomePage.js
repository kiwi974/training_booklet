import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import HomePageItem from './HomePageItem'

class HomePage extends React.Component {

    render() {
        var date = new Date()
        var month = date.getMonth()+1
        month = month < 10 ? "0" + month : month
        var day = date.getDate()
        day = day < 10 ? "0" + day : day
        const today_date = date.getFullYear() + '-' + month + '-' + day

        return (
            <View style={styles.main_container}>
                <TouchableOpacity onPress={() => this.props.navigation.navigate("Carnet", {day : today_date})}> 
                    <Text styles={styles.touchable_opacity_button}> Let's Workout today ! </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#e7e7e7',
      justifyContent: "space-evenly",
      padding: 80
    },
    flatList_container: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
    },
    touchable_opacity_button: {
        height: 50,
        width: 180,
        backgroundColor: '#fb7a24',
        padding:0,
        marginVertical: 100,
        marginHorizontal: 0,
        borderRadius: 10
    }
})

export default HomePage