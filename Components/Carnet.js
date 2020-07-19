import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native'
import BlockItem from './BlockItem'
import blocks from '../Helpers/blocksData'
import { TextInput } from 'react-native-gesture-handler'


class Carnet extends React.Component {

    constructor(props) {
        super(props)
        this.state = { blocks: blocks,
                     }
        this.number_of_blocks = this.state.blocks.length
    }

    _goToBlockAdder() {
        this.props.navigation.navigate("BlockAdder", {Carnet: this})
    }

    render() {
        console.log(this.number_of_blocks)
        return (
            <View style={{flex: 10}}>
                <View style={styles.flatList_container}>
                    <FlatList
                        data={this.state.blocks}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <BlockItem content={item}/>}
                    />
                </View>
                <View style={styles.global_add_button_view}>
                    <TouchableOpacity style={styles.touchable_opacity} onPress={() => this._goToBlockAdder()}> 
                        <Text style={styles.add_block_item_text}> {"Add a block"} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    // Flatlist views
    flatList_container: {
        flex: 9,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
    },
    // Add button views
    global_add_button_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    touchable_opacity: {
        height: 50,
        width: 180,
        backgroundColor: '#939393',
        padding:0,
        marginVertical: 10,
        marginHorizontal: 0,
        borderRadius: 10
    },
    add_block_item_text: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20, 
        fontWeight: "bold",
        padding: 3,
    },
})


export default Carnet