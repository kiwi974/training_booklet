import React from 'react'
import { StyleSheet, View, FlatList, TouchableOpacity, Text, ImageBackground } from 'react-native'
import BlockItem from './BlockItem'
import { getAllItems } from '../API/Backend'

class Carnet extends React.Component {

    constructor(props) {
        super(props)
        this.state = { blocks: [],
                     }
    }

    _goToFromBlockItem = (pageName, id, day) => {
        this.props.navigation.navigate(pageName, {content_id : id, day : day})
    }


    render() {

        const day = this.props.navigation.state.params.day
        getAllItems(day).then(data => this.setState({ blocks: data }))

        return (
            <View style={{flex: 10}}>
                <ImageBackground source={require('../assets/magnesia.png')} style={styles.image}>
                    <View style={styles.flatList_container}>
                        <FlatList
                            data={this.state.blocks}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => <BlockItem content={item} day={day} goToFn={this._goToFromBlockItem} />}
                        />
                    </View>
                    <View style={styles.global_add_button_view}>
                        <TouchableOpacity style={styles.touchable_opacity} onPress={() => this.props.navigation.navigate("BlockAdder", {day : day})}> 
                            <Text style={styles.add_block_item_text}> {"Add a block"} </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        flex:10,
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    // Flatlist views
    flatList_container: {
        flex: 9,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0)',
    },
    // Add button views
    global_add_button_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    touchable_opacity: {
        height: 50,
        width: 180,
        backgroundColor: 'white',
        padding:0,
        marginVertical: 10,
        marginHorizontal: 0,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
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