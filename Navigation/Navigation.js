import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomePage from '../Components/HomePage'
import Carnet from '../Components/Carnet'
import Notes from '../Components/Notes'
import BlockAdder from '../Components/BlockAdder'
import CalendarView from '../Components/CalendarView'

const SearchStackNavigator = createStackNavigator({
  CalendarView: {
    screen: CalendarView,
    navigationOptions: {
        title: "CalendarView"
    }
  },
  Carnet: {
      screen: Carnet,
      navigationOptions: {
          title: "Carnet d'entrainement"
      }
  },
  BlockAdder: {
    screen: BlockAdder,
    navigationOptions: {
        title: "BlockAdder"
    }
  },

})

const Tab = createBottomTabNavigator({
  CalendarView: {
    screen: SearchStackNavigator,
    navigationOptions: {
        title: "CalendarView"
    }
  },
  HomePage: {
    screen: HomePage,
    navigationOptions: {
      title: 'HomePage'
    }
  }, 
  Notes: {
    screen: Notes,
    navigationOptions: {
        title: "Notes"
    }
  }
}, {
  drawerType: 'front',
  drawerWidth: 200, 
  edgeWidth: 300
})

export default createAppContainer(Tab)