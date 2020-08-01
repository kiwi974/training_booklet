import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { deleteItem } from '../API/Backend'

class BlockItem extends React.Component {

    _deleteBlockItem = (item_id, day) => {
        deleteItem(item_id, day).then(data => {})
    }

    render() {

        const { content, day, goToFn } = this.props

        return (
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.exercice_text}> {content.exercice} </Text>
                    <Text style={styles.weight_text}> {content.weight + "kg"} </Text>
                    <Text style={styles.ribtw_text}> {content.ribtw} </Text>
                </View>
                <View style={styles.details_container}>
                    <Text style={styles.detail_text}> {content.exercice_order} </Text>
                </View>
                <View style={styles.bottom_container}>
                    <View style={styles.details_view}>
                        <Text style={styles.detail_text}> {content.description} </Text>
                    </View>
                    <View style={styles.icons_view}>
                        <TouchableOpacity style={styles.button_style} onPress={() => goToFn("BlockAdder", content.id, day)}>
                            <Text style={styles.icon_text}>{"Modify"}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button_style} onPress={() => this._deleteBlockItem(content.id, day)}>
                            <Text style={styles.icon_text}>{"Delete"}</Text>
                        </TouchableOpacity>
                    </View>
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
        flex: 12,
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
        fontSize: 18,
        color: "#ffffff",
        flexWrap: 'wrap',
        paddingRight: 5,
      },
    ribtw_text: {
        flex: 3,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#666666',
      },
    details_container: {
        flex:2,
        backgroundColor: 'gray'
    },
    bottom_container: {
        flex: 5,
        flexDirection: 'row',
        // justifyContent: "space-evenly"
    },
    details_view: {
        flex: 3,
        borderRadius: 10,
        backgroundColor: '#ffe8d7'
    },
    icons_view: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#ff9e37'
    },
    button_style: {
        height: 40,
        width: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: 'gray',
        borderRadius: 20
    },
    detail_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    icon_text: {
        fontSize: 10,
        textAlign: 'center',
    }

})

export default BlockItem