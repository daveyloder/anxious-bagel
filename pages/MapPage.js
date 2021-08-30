import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";
import { createStackNavigator } from "@react-navigation/stack";
import Map from "../components/Map";

const MapStack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 10,
    backgroundColor: "#2dfb94",
  },
});

const MapPage = () => {
  return (
    <MapStack.Navigator screenOptions={{headerShown: false}}>
      <MapStack.Screen name="Map" component={Map} />
    </MapStack.Navigator>
  );
};

export default MapPage;