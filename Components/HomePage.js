import React from 'react'
import { StyleSheet, View, FlatList, ImageBackground } from 'react-native'
import HomePageItem from './HomePageItem'

class HomePage extends React.Component {

    _navigateTo = (pageName) => {
        if (pageName=="Carnet") {
            this.props.navigation.navigate("CalendarView")
        } else {
            this.props.navigation.navigate(pageName)
        }
      }

    render() {
        return (
            <View style={styles.main_container}>
                <ImageBackground source={require('../assets/fitness-1882721_1920.jpg')} style={styles.image}>
                    <View style={styles.flatList_container}>
                        <FlatList
                            data={[{'itemTitle': "Carnet"}, {"itemTitle": "Notes"}, {"itemTitle": "Chronometer"}]}
                            keyExtractor={(item) => item.itemTitle.toString()}
                            renderItem={({item}) => <HomePageItem content={item} navigateToFn={this._navigateTo}/>}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    main_container: {
      flex: 10,
      backgroundColor: '#ffffff'
    },
    image: {
        flex:10,
        height: '100%',
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
    },
    flatList_container: {
        width: 300,
        height: 400,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(52, 52, 52, 0)',
    }
})

export default HomePage