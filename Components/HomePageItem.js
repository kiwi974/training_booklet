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
      height: 70,
      width: 150,
      backgroundColor: '#ff9e37',
      padding:0,
      marginVertical: 10,
      marginHorizontal: 0,
      borderRadius: 10
    },
    itemText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20, 
        fontWeight: "bold",
        padding: 3,
    }
})

export default HomePageItem