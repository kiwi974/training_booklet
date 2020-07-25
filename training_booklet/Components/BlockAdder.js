import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'

class BlockAdder extends React.Component {

    constructor(props) {
        super(props)
        this.modify = 0
        this.state = {
            exercice : "",
            weight : "",
            ribtw : "",
            customText : "",
        }
    }

    _goBackToCarnetScreen() {
        this.props.navigation.navigate("Carnet")
    }

    _addBlockAndGoBackToCarnet() {
        const carnet = this.props.navigation.state.params.Carnet
        if (this.modify == 0) {
            carnet.number_of_blocks += 1
        }
        const newBlockData = [{
            id: carnet.number_of_blocks, 
            exercice: this.state.exercice, 
            weight: this.state.weight,
            ribtw: this.state.ribtw,
            customText: this.state.customText,
        }]
        console.log(newBlockData)
        carnet.setState({blocks: carnet.state.blocks.concat(newBlockData)}, () => this._goBackToCarnetScreen())
    }

    render() {

        const sourceBlockItemContent = this.props.navigation.state.params.SourceBlockItemContent
        console.log("this.modify : " + this.modify)
        console.log("sourceBlockItemContent : " + sourceBlockItemContent)
        if ((this.modify == 0) & (sourceBlockItemContent != undefined)) {
            this.setState(sourceBlockItemContent, () => {this.modify=1})
        }

        return (   
            <View style={styles.global_view}>
                <View style={styles.all_text_input_global_view}>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Exercice :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder="Exercice"
                            value={this.state.exercice}
                            editable={true}
                            onChangeText={(text) => this.setState({exercice: text})}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Weight :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Weight'
                            value={this.state.weight}
                            onChangeText={(text) => this.setState({weight: text})}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Rest between sets :"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Rest between sets'
                            value={this.state.ribtw}
                            onChangeText={(text) => this.setState({ribtw: text})}
                            onSubmitEditing={() => {}}
                        />
                    </View>
                    <View style={styles.text_input_rounding_view}>
                        <Text style={styles.description_text}>{"Block description:"}</Text>
                        <TextInput 
                            style={styles.text_input_area} 
                            placeholder='Block description'
                            value={this.state.customText}
                            onChangeText={(text) => this.setState({customText: text})}
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