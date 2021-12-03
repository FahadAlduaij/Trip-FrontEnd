import React from "react";
import { observer } from "mobx-react";

import { Box, Text, VStack } from "native-base";

// Components
import TripCommentItem from "./TripCommentItem";

// Stores
import tripStore from "../../stores/tripStore";

const TripComments = ({ tripId }) => {
	const trip = tripStore.trips.find((trip) => trip._id === tripId);
	// if (!trip.comments.length >= 1) return <Text>Be The First to Comment</Text>;

	if (trip) {
		const commentsList = trip.comments
			.map((comment) => <TripCommentItem key={comment._id} comment={comment} />)
			.reverse();

		return <Box mb="10">{commentsList}</Box>;
	} else {
		return <Box></Box>;
	}
};

export default observer(TripComments);
