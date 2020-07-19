import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

class BlockAdder extends React.Component {

    constructor(props) {
        super(props)
        this.exercice = ""
        this.weight = ""
        this.ribtw = ""
        this.set = ""
        this.repPSet = ""
    }
    _goBackToCarnetScreen() {
        this.props.navigation.navigate("Carnet")
    }

    _addBlockAndGoBackToCarnet() {
        const carnet = this.props.navigation.state.params.Carnet
        carnet.number_of_blocks += 1
        const newBlockData = [{
            id: carnet.number_of_blocks, 
            exercice: this.exercice, 
            weight: this.weight,
            ribtw: this.ribtw,
            set: this.set,
            repPSet: this.repPSet,
        }]
        carnet.setState({blocks: carnet.state.blocks.concat(newBlockData)}, () => this._goBackToCarnetScreen())
    }

    render() {

        return (
            <View style={styles.global_view}>
                <View style={styles.all_text_input_global_view}>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Exercice :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Exercice'
                            onChangeText={(text) => this.exercice = text}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Weight :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Weight'
                            onChangeText={(text) => this.weight = text}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Rest between sets :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Rest between sets'
                            onChangeText={(text) => this.ribtw = text}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Number of set :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Number of set'
                            onChangeText={(text) => this.set = text}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Reps per set :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Reps per set'
                            onChangeText={(text) => this.repPSet = text}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                </View>
                <View style={styles.global_add_button_view}>
                    <TouchableOpacity style={styles.main_container} onPress={() => this._addBlockAndGoBackToCarnet()}> 
                        <Text style={styles.itemText}> {"Add my block"} </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    // Input ares views
    global_view: {
        flex: 10,
        backgroundColor: '#e7e7e7'
    },
    all_text_input_global_view: {
        flex: 9, 
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: '#e7e7e7'
    },
    text_input_rounding_view: {
        flexDirection:'row', 
        backgroundColor: 'orange',
        justifyContent: 'center',
        height: 50, 
        width: 350,
        borderRadius: 10
    },
    description_text: {
        textAlignVertical: 'center', 
        marginLeft: 20, 
        fontWeight: 'bold'
    },
    text_input_area: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        height: 30,
        justifyContent: 'center',
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
    },
    // Add button views  
    global_add_button_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#e7e7e7'
    },
    itemText: {
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 20, 
        fontWeight: "bold",
        padding: 3,
    },
    main_container: {
        height: 50,
        width: 180,
        backgroundColor: '#939393',
        padding:0,
        marginVertical: 10,
        marginHorizontal: 0,
        borderRadius: 10
      },
})

export default BlockAdder