import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import tripStore from "../../stores/tripStore";
import TripItem from "./TripItem";

const TripsList = () => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} />
  ));
  return <View>{tripList}</View>;
};

export default observer(TripsList);
