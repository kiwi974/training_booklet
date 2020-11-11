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
                    <View style={styles.order_container}>
                        <View style={{height:20, width:20, borderRadius: 10, backgroundColor: 'white', justifyContent: "center", alignItems: "center"}}>
                            <Text style={styles.order_text}> {content.exercice_order} </Text>
                        </View>
                    </View>
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
        flex: 16,
        margin: 5,
        height: 100,
        width: 300,
        backgroundColor: 'rgba(0.8,0.8,0.8,0.55)',
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black'
      },
    header_container: {
        flex: 4,
        flexDirection: 'row',
        // justifyContent: "space-evenly"
      },
    exercice_text: {
        flex: 8,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        flexWrap: 'wrap',
        paddingRight: 5,
      },
    weight_text: {
        flex: 4,
        fontWeight: 'bold',
        fontSize: 16,
        color: "#ffffff",
        flexWrap: 'wrap',
        paddingRight: 5,
      },
    ribtw_text: {
        flex: 4,
        fontWeight: 'bold',
        fontSize: 16,
        color: '#ffffff',
      },
    order_container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: 'rgba(0.6,0.6,0.6,0)',
        borderRadius: 20, 
        padding: 5
    },
    bottom_container: {
        flex: 6,
        flexDirection: 'row',
        // justifyContent: "space-evenly"
    },
    details_view: {
        flex: 3,
        borderRadius: 10,
        backgroundColor: '#dadada',
    },
    icons_view: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0.6,0.6,0.6,0)',
        borderRadius: 10,
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    button_style: {
        height: 40,
        width: 40,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#a7a7a7',
        borderRadius: 20,
        borderWidth: 2,
        borderColor: 'white',
    },
    order_text: {
        fontStyle: 'italic',
        color: '#666666'
    },
    icon_text: {
        fontSize: 10,
        textAlign: 'center',
        fontWeight: "bold",
    }

})

export default BlockItem