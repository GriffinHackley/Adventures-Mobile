import React from 'react';

import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

export default class Number extends React.Component {
    render() {
    return (
        <Text>{this.props.number}</Text>
    );
  }
}
