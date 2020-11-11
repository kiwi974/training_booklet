import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomePage from '../Components/HomePage'
import Carnet from '../Components/Carnet'
import Notes from '../Components/Notes'
import BlockAdder from '../Components/BlockAdder'
import CalendarView from '../Components/CalendarView'
import Chronometer from '../Components/Chronometer'

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
  CalendarView: {
    screen: CalendarView,
    navigationOptions: {
        title: "CalendarView"
    }
  },
  Chronometer: {
    screen: Chronometer,
    navigationOptions: {
        title: "Chronometer"
    }
  },
})

export default createAppContainer(SearchStackNavigator)