import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Settings from "../components/Settings";

const SettingsStack = createStackNavigator();

const SettingsPage = () => {
  return (
    <SettingsStack.Navigator screenOptions={{headerShown: false}}>
      <SettingsStack.Screen name="Settings" component={Settings} />
    </SettingsStack.Navigator>
  );
};

export default SettingsPage;