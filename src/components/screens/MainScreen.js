import React from 'react';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { Container, Text, H1 } from 'native-base';
import { FlatList, StyleSheet } from 'react-native';
import { getAdventures } from '../../actions/adventures';

export class MainScreen extends React.Component {
  styles = StyleSheet.create({
    message: {
      alignItems: 'center',
      padding: 16,
    }
  })

  componentDidMount() {
    this.props.getAdventures();
  }

  render() {
    if (this.props.adventures.length === 0) {
      return (
        <Container style={this.styles.message}>
          <Text>You do not have any adventures yet, click the "New" button at the top to add a new Adventure.</Text>
        </Container>
      )
    }

    return (
      <Container>
        <Text>gbhjfsida</Text>
        <FlatList
          data={this.props.adventures}
          renderItem={({item}) => (
            <ListItem list={item} />
          )}
          keyExtractor={item => `adventure_${item.id}`}
        />
      </Container>
    );
  }
}

select = (storeState) => {
  return {
    adventures: storeState.adventures,
  }
};

export default connect(select, { getAdventures })(MainScreen);
