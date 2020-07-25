import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from '../Components/HomePage'
import Carnet from '../Components/Carnet'
import Notes from '../Components/Notes'
import BlockAdder from '../Components/BlockAdder'
import BlockItem from '../Components/BlockItem'

const SearchStackNavigator = createStackNavigator({
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'HomePage'
    }
  }, 
  Carnet: {
      screen: Carnet,
      navigationOptions: {
          title: "Carnet d'entrainement"
      }
  },
  Notes: {
      screen: Notes,
      navigationOptions: {
          title: "Notes"
      }
  },
  BlockAdder: {
    screen: BlockAdder,
    navigationOptions: {
        title: "BlockAdder"
    }
  },
})

export default createAppContainer(SearchStackNavigator)