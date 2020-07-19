import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

class BlockItem extends React.Component {

    render() {

        const { content } = this.props

        return (
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.exercice_text}> {content.exercice} </Text>
                    <Text style={styles.weight_text}> {content.weight + "kg"} </Text>
                    <Text style={styles.ribtw_text}> {content.ribtw} </Text>
                </View>
                <View style={styles.details_container}>
                    <Text style={styles.detail_text}> {"Set : " + content.set} </Text>
                    <Text style={styles.detail_text}> {"Reps per set : " + content.repPSet} </Text>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    image: {
        width: 10,
        height: 10,
        margin: 5,
        backgroundColor: 'gray'
      },
    content_container: {
        flex: 10,
        margin: 5,
        height: 100,
        width: 300,
        backgroundColor: '#ff9e37',
        borderRadius: 10
      },
    header_container: {
        flex: 5,
        flexDirection: 'row',
        // justifyContent: "space-evenly"
      },
    exercice_text: {
        flex: 8,
        fontWeight: 'bold',
        fontSize: 20,
        flexWrap: 'wrap',
        paddingRight: 5,
      },
    weight_text: {
        flex: 3,
        fontWeight: 'bold',
        fontSize: 20,
        color: "#ffffff",
        flexWrap: 'wrap',
        paddingRight: 5,
      },
    ribtw_text: {
        flex: 3,
        fontWeight: 'bold',
        fontSize: 20,
        color: '#666666',
      },
    details_container: {
        flex: 5,
        flexDirection: 'column',
        justifyContent: "space-evenly"
      },
    detail_text: {
        fontStyle: 'italic',
        color: '#666666'
      },
})

export default BlockItem