import React from "react";
import { Flatlist, StyleSheet, View, Card, StatusBar, Text } from "react-native";

const DATA = [
  {
   _id: {
    $oid: '60fb32daa325938a1823ffe4'
  },
  newrfboolean: "",
  servicetype: "",
  contract: "northpenn",
  installtime: "",
  newrfnumber: "",
  __v:0,
  serviceaddress:{
    address: "213 Kirklin Ave",
    city: "Linwood",
    state: "New Jersey",
    zipcode:"08221"
  },
  complete: false


  }
]

const DashboardTile = ({ item }) => {
  <View style={styles.container}>
    <Card style={styles.card}>
      <Card.Title
        title={item.serviceaddress.address}
        subtitle={item.complete == true ? "Complete" : "Incomplete"}
        titleStyle={styles.cardText}
        subtitleStyle={styles.cardText}
      />
    </Card>
  </View>
}

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text> This is the Dashboard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#2dfb94",
  },
});

export default Dashboard;