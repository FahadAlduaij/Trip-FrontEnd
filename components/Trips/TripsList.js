import { observer } from "mobx-react";
import { ScrollView } from "native-base";
import React from "react";

// Components
import TripItem from "./TripItem";

// Stores
import tripStore from "../../stores/tripStore";

const TripsList = ({ navigation }) => {
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip._id} navigation={navigation} />
  ));
  return <ScrollView>{tripList}</ScrollView>;
};

export default observer(TripsList);
