import React from 'react'
import { View, Text } from 'react-native'

class Notes extends React.Component {

    render() {
        return (
            <View>
                <Text> { "Bienvenue dans les notes" } </Text>
            </View>
        )
    }
}

//     class Notes extends React.Component {

//         constructor(props) {
//             super(props)
//             this.state = { notes: [],
//                          }
//         }
    
//         render() {
//             return (
//                 <View style={styles.content_container}>
//                     <View style={styles.flatList_container}>
//                         <FlatList
//                             data={this.state.notes}
//                             keyExtractor={(item) => item.id.toString()}
//                             renderItem={({item}) => <NoteItem content={item} />}
//                         />
//                     </View>
//                     <View style={styles.global_add_button_view}>
//                         <TouchableOpacity style={styles.touchable_opacity} onPress={() => this.props.navigation.navigate("NoteAdder", {day : day})}> 
//                             <Text style={styles.add_block_item_text}> {"Note a block"} </Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             )
//         }
//     }
    
//     const styles = StyleSheet.create({
//         image: {
//             flex:10,
//             height: '100%',
//             width: '100%',
//             justifyContent: "center",
//             alignItems: "center",
//         },
//         // Flatlist views
//         flatList_container: {
//             flex: 9,
//             flexDirection: 'column',
//             alignItems: 'center',
//             backgroundColor: 'rgba(0,0,0,0)',
//         },
//         // Add button views
//         global_add_button_view: {
//             flex: 1,
//             flexDirection: 'row',
//             justifyContent: 'center',
//             backgroundColor: 'rgba(0,0,0,0)'
//         },
//         touchable_opacity: {
//             height: 50,
//             width: 180,
//             backgroundColor: 'white',
//             padding:0,
//             marginVertical: 10,
//             marginHorizontal: 0,
//             borderRadius: 10,
//             borderWidth: 3,
//             borderColor: 'black',
//         },
//         add_block_item_text: {
//             textAlign: 'center',
//             textAlignVertical: 'center',
//             fontSize: 20, 
//             fontWeight: "bold",
//             padding: 3,
//         },
//     })


export default Notes