import React from 'react'
import { View, Platform, StatusBar, TouchableOpacity, Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { TabNavigator, createStackNavigator, createBottomTabNavigator, HeaderBackButton} from 'react-navigation'
import { blackOlive, white, green } from './utils/colors'
import { Constants } from 'expo'
import Flashcard from './components/flashcard'
import Decklist from './components/decklist'
import Deck from './components/deck'
import Quiz from './components/quiz'
import Score from './components/score'
import AddCard from './components/AddCard'
import AddDeck from './components/AddDeck'
import { setLocalNotification } from './utils/api'

function MyStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

const DeckStack = createStackNavigator({
  Decklist: {
    screen: Decklist
  },
  Deck: {
    screen: Deck
  },
  Quiz: {
    screen: Quiz
  },
  Score: {
    screen: Score
  },
  AddCard: {
    screen: AddCard
  }
})

const Tab = createBottomTabNavigator({
  Home: {
    screen: DeckStack,
    navigationOptions: {
        tabBarLabel:"Decks",
        tabBarIcon: <Icon name="home" size={35} color="#900" />,
        }
  },
  AddDeck: {
    screen: AddDeck,
    navigationOptions: {
      tabBarLabel: "Add Deck",
      tabBarIcon: <Icon name="add" size={35} color="#900" />
    }
  }
},
  {
    order: ['Home', 'AddDeck'],
    tabBarOptions: {
      activeTintColor: '#D4AF37',
      inactiveTintColor: 'gray',
      style: {
        backgroundColor: 'white',
      }
    },
  }


)

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
      <View style={{flex: 1}}>
      <MyStatusBar backgroundColor={green} barStyle="light-content" />
      <Tab />
      </View>
    )
  }
}


