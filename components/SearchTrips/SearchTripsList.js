import React from "react";
import { observer } from "mobx-react";
import { ScrollView } from "native-base";

// Components
import SearchTripItem from "./SearchTripItem";

// Stores
import tripStore from "../../stores/tripStore";

const SearchTripsList = ({ navigation, query }) => {
	const tripList = tripStore.trips
		.filter((trip) => trip.title.toLowerCase().includes(query.toLowerCase()))
		.map((trip) => (
			<SearchTripItem trip={trip} key={trip._id} navigation={navigation} />
		));
	return <ScrollView>{tripList}</ScrollView>;
};

export default observer(SearchTripsList);
