import React, { useState } from 'react';
import { StyleSheet, View, Alert, Platform, Dimensions } from 'react-native';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';

const { width, height } = Dimensions.get('window');

const ASPECT_RATIO = width / height;
const LATITUDE = 39.28736;
const LONGITUDE = -74.5675;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       showsUserLocation: true,
       followsUserLocation : false,
      region: {
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state.region}
          onUserLocationChange={event => console.log(event.nativeEvent)}
          showsUserLocation={this.state.showsUserLocation}
          followsUserLocation={this.state.followsUserLocation}
          zoomEnabled={true}
        >
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2dfb94',
  },
  map: {
    flex: 1,
  },
});
export default Map;