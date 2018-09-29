import React from 'react';
import { Button, Text, View } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

const headTitle = ['A', 'B', 'C', 'D', 'E'];

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class FlowerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class AddScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class ShopScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class MeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
    TabHome: { 
      screen: HomeScreen,
      navigationOptions: {
        title: headTitle[0],
      }
    },
    TabFlower: { 
      screen: FlowerScreen,
      navigationOptions: {
        title: headTitle[1],
      }
    },
    TabAdd: {
      screen: AddScreen,
      navigationOptions: {
        title: headTitle[2],
      }
    },
    TabShop: {
      screen: ShopScreen,
      navigationOptions: {
        title: headTitle[3],
      }
    },
    TabMe: {
      screen: MeScreen,
      navigationOptions: {
        title: headTitle[4],
      }
    },
  },{
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch(routeName) {
          case 'TabHome':
            iconName = `ios-home`;
            break;
          case 'TabFlower':
            iconName = `ios-flower`;
            break;
          case 'TabAdd':
            iconName = `ios-add-circle${focused ? '' : '-outline'}`;
            break;
          case 'TabShop':
            iconName = `ios-appstore`;
            break;
          case 'TabMe':
            iconName = `ios-person`;
            break;
          default: break;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default createStackNavigator({
  Home: { 
    screen: TabNavigator,
    navigationOptions: ({ navigation }) => {
      const params = navigation.state;
      const index = params.index;
      const length = params.routes.length;
      //console.log(routeName)
      //const index = navigation.state.routes[0].routeName;
      return ({
        title: headTitle[index],
        headerStyle: {
          backgroundColor: index === length - 1 ? 'tomato' : '#fff',
        },
        headerTintColor: index === length - 1 ? '#fff' : '#000',
      })
    },
  },
  Details: { 
    screen: DetailsScreen,
    navigationOptions: {
      title: 'Detail',
    }
  }
})
