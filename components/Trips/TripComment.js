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

	const commentsList = trip.comments.map((comment) => (
		<TripCommentItem key={comment._id} comment={comment} />
	));

	return <Box mb="10">{commentsList}</Box>;
};

export default observer(TripComments);
