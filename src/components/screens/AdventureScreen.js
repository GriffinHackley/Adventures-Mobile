import React from 'react';
import { Text, StyleSheet, Image, Button, SafeAreaView, View, PermissionsAndroid } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, Circle, Polyline, Callout } from 'react-native-maps';
import { connect } from 'react-redux'
import { createMarker, getMarkers } from '../../actions/markers'
import {createAdventure} from '../../actions/adventures'
import CameraButton from '../cameraButton'
import EndButton from '../EndButton'
import TextField from '../TextField'

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

  onRegionChange(region){
    this.setState
  }

  async componentDidMount() {
    await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    this.props.getMarkers();
    Geolocation.watchPosition(
      ({ coords }) => {
        this.setState((state) => ({
          currentPosition: {
            ...coords,
            latitudeDelta: 0.1,
            longitudeDelta: 0.05
          },
          coordinates: [
            ...state.coordinates,
            { latitude: coords.latitude, longitude: coords.longitude }
          ],
        }))
      },
      console.log,
      {
        enableHighAccuracy: true,
        distanceFilter: 0,
      }
    );
  }

  onMapPress = (e) => {
    const { coordinate } = e.nativeEvent;
    this.props.createMarker(
      coordinate,
    );
  }

  onChangeText(text){
    this.state.title = text;
  }

  render() {
    if (!this.state.currentPosition) return null;
    return (
      <View style={this.styles.flex}>
          <MapView
            style={this.styles.flex}
            initialRegion={this.state.currentPosition}
            onPress={this.onMapPress}
          >
            <Circle
              center={this.state.currentPosition}
              radius = {250}
            />
            <Polyline
          		coordinates= {this.state.coordinates}
          		strokeColors={[
          			'#7F0000',
          		]}
          		strokeWidth={6}
          	/>

          </MapView>
          <View style={{flexDirection:"row", justifyContent:"space-between"}}>
            <CameraButton/>
            <TextField onChangeText={text => onChangeText(text)}/>
            <EndButton props={this.state}/>
          </View>
        </View>
    );
  }
}
select = (storeState) => {
  return {
    adventures: storeState.adventures,
  }
};
const mapDispatchToProps = {createMarker, getMarkers, createAdventure};

export default connect (select, mapDispatchToProps)(App);
