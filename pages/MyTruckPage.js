import React from 'react'
import { Stylesheet, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Truck from '../components/TruckList'

const MyTruckNavigation = createStackNavigator();

const MyTruck = () => {
  return (
    <MyTruckNavigation.Navigator screenOptions={{headerShown: false}}>
      <MyTruckNavigation.Screen name="Dashboard" component={Truck} />
    </MyTruckNavigation.Navigator>
  );
};

export default MyTruck