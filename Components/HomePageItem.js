import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Item } from 'react-native'

class HomePageItem extends React.Component {

    render() {

        const { content, navigateToFn } = this.props

        return (
            <TouchableOpacity style={styles.main_container} onPress={() => navigateToFn(content.itemTitle)}> 
                <Text style={styles.itemText}> {content.itemTitle} </Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
      height: 100,
      width: 250,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: 'rgba(200,200,200,0.8)',
      padding:0,
      marginVertical: 20,
      marginHorizontal: 0,
      borderRadius: 10, 
      borderColor: 'black',
      borderWidth: 3
    },
    itemText: {
        textAlign: 'center',
        fontSize: 30, 
        fontWeight: "bold",
        padding: 3,
    }
})

export default HomePageItem