import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import HomePageItem from './HomePageItem'

class HomePage extends React.Component {

    _navigateToCarnet = (pageName) => {
        this.props.navigation.navigate(pageName)
      }

    render() {
        return (
            <View style={styles.main_container}>
                <View style={styles.flatList_container}>
                    <FlatList
                        data={[{'itemTitle': "Carnet"}, {"itemTitle": "Notes"}]}
                        keyExtractor={(item) => item.itemTitle.toString()}
                        renderItem={({item}) => <HomePageItem content={item} navigateToCarnetFn={this._navigateToCarnet}/>}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#e7e7e7',
      justifyContent: "space-evenly",
      padding: 80
    },
    flatList_container: {
        flex: 0.8,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#e7e7e7',
    }
})

export default HomePage