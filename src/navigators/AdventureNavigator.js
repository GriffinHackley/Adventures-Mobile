import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MainScreen from '../components/screens/MainScreen';
import AdventureScreen from '../components/screens/AdventureScreen';
import ReviewScreen from '../components/screens/ReviewScreen';
import { Button, Text, Container } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();

export default class AdventureNavigator extends React.Component {
  render() {
    return (
      <Stack.Navigator>
      <Stack.Screen
        name="Main Screen"
        component={MainScreen}
        options={({ navigation }) => ({
          headerRight: () => (
            <Container>
              <Button transparent onPress={() => navigation.navigate('Adventure Screen')}>
                <Icon name="plus" size={24} color="blue" />
              </Button>
            </Container>
          )
        })}
      />
        <Stack.Screen name="Adventure Screen" component={AdventureScreen}/>
        <Stack.Screen name="Review Screen" component={ReviewScreen}/>
      </Stack.Navigator>
    );
  }
}
