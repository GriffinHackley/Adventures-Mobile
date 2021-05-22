import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import AdventureNavigator from './src/navigators/AdventureNavigator'
import GoalsNavigator from './src/navigators/GoalsNavigator'
import store from './src/store/store';

const Tab = createBottomTabNavigator();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Adventure" component={AdventureNavigator} />
            <Tab.Screen name="Goals" component={GoalsNavigator} />
          </Tab.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }
}
