import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native'
import { getSingleItem, addItem, updateItem } from '../API/Backend'

class BlockAdder extends React.Component {

    constructor(props) {
        super(props)
        const day = this.props.navigation.state.params.day
        this.state = {
            id : "",
            exercice_order : "",
            exercice : "",
            weight : "",
            day : day,
            ribtw : "",
            description : "",
            }
        if (this.props.navigation.state.params.content_id) {
            const id = this.props.navigation.state.params.content_id
            getSingleItem(id, day).then(data => {this.setState(data)})
        } 
        }

    _goBackToCarnetScreen() {
        this.props.navigation.navigate("Carnet")
    }

    _addBlockAndGoBackToCarnet() {
        if (this.state.id == "") {
            addItem(this.state.exercice_order, this.state.exercice, this.state.weight, this.state.day, this.state.ribtw, this.state.description).then(data => {})
        } else {
            updateItem(this.state.id, this.state.exercice_order, this.state.exercice, this.state.weight, this.state.day, this.state.ribtw, this.state.description).then(data => {})
        }
        this._goBackToCarnetScreen()
    }

    render() {

        return (   
            <View style={styles.global_view}>
                <ImageBackground source={require('../assets/ring.jpg')} style={styles.image}>
                    <View style={styles.all_text_input_global_view}>
                        <View style={styles.text_input_rounding_view}>
                            <Text style={styles.description_text}>{"Exercice number :"}</Text>
                            <TextInput 
                                style={styles.text_input_area} 
                                placeholder="Exercice number"
                                value={this.state.exercice_order.toString()}
                                editable={true}
                                onChangeText={(text) => this.setState({exercice_order: text})}
                                onSubmitEditing={() => {}}
                            />
                        </View>
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
                            <Text style={styles.description_text}>{"Weight (kg) :"}</Text>
                            <TextInput 
                                style={styles.text_input_area} 
                                placeholder='Weight'
                                value={this.state.weight.toString()}
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
                                value={this.state.description}
                                onChangeText={(text) => this.setState({description: text})}
                                onSubmitEditing={() => {}}
                            />
                        </View>
                    </View>
                    <View style={styles.global_add_button_view}>
                        <TouchableOpacity style={styles.main_container} onPress={() => this._addBlockAndGoBackToCarnet()}> 
                            <Text style={styles.itemText}> {"Add my block"} </Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    // Input ares views
    global_view: {
        flex: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
    },
    image: {
        flex:10,
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    all_text_input_global_view: {
        flex: 9, 
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        backgroundColor: 'rgba(0,0,0,0)'
    },
    text_input_rounding_view: {
        flexDirection:'row', 
        backgroundColor: '#dadada',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'black',
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
        paddingLeft: 5,
        borderRadius: 10
    },
    // Add button views  
    global_add_button_view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0)'
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
        backgroundColor: 'white',
        padding:0,
        marginVertical: 10,
        marginHorizontal: 0,
        borderRadius: 10,
        borderWidth: 3,
        borderColor: 'black',
      },
})

export default BlockAdder