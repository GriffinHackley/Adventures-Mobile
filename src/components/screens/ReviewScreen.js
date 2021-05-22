import React from 'react';
import { Text, StyleSheet, Image, Button, SafeAreaView, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { connect } from 'react-redux'
import { createMarker, getMarkers } from '../../actions/markers'


export class App extends React.Component {
  styles = StyleSheet.create({
    flex: {
      flex: 1,
    }
  })

  state = {
    currentPosition: null,
    coordinates: [],
  }

  render() {
    return (
      <SafeAreaView>
        <Text>Review Screen</Text>
      </SafeAreaView>
    );
  }
}

const select = ({markers}) => ({markers});
const mapDispatchToProps = {createMarker, getMarkers};

export default connect (select, mapDispatchToProps)(App);
