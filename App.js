import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapPage from './pages/MapPage';
import DashboardPage from './pages/DashboardPage';
import SettingsPage from './pages/SettingsPage';
import MyTruckPage from './pages/MyTruckPage'


//Icons
//cheatsheet: https://ionicons.com/v4/cheatsheet.html
import Icon from 'react-native-vector-icons/Ionicons';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Dashboard'
        screenOptions={
          ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'My Truck':
                iconName = 'md-list';
                break;

              case 'Dashboard':
                iconName = 'ios-home';
                break;

              case 'Map':
                iconName = 'ios-map';
                break;

              case 'Settings':
                iconName = 'ios-settings';
                break;

              default:
                break;
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Map" component={MapPage} />
        <Tab.Screen name="My Truck" component={MyTruckPage} />
        <Tab.Screen name="Dashboard" component={DashboardPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
