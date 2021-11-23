import { observer } from "mobx-react";
import { ScrollView } from "native-base";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";

const TripsList = ({ navigation, route }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} navigation={navigation} />
  ));
  return <ScrollView horizontal={true}>{tripList}</ScrollView>;
};

export default observer(TripsList);
