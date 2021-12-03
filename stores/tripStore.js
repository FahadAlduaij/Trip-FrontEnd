import { instance } from "./instance";
import { makeAutoObservable, runInAction } from "mobx";

class TripStore {
	trips = [];
	loading = true;
	// to open modal from tab.navigation
	showModal = false;

	constructor() {
		makeAutoObservable(this);
	}

	openModal = () => {
		runInAction(() => {
			this.showModal = true;
		});
	};

	closeModal = () => {
		runInAction(() => {
			this.showModal = false;
		});
	};

	fetchTrips = async () => {
		try {
			const response = await instance.get("/trips");

			runInAction(() => {
				this.trips = response.data;
				this.trips.reverse();
				this.loading = false;
			});
		} catch (error) {
			console.error("tripStore --> fetchTrips", error);
		}
	};

	addTrip = async (newTrip, toast) => {
		try {
			const formData = new FormData();
			for (const key in newTrip) {
				formData.append(key, newTrip[key]);
			}

			const response = await instance.post("/trips", formData);
			runInAction(() => {
				this.trips.push(response.data);
				this.trips.reverse();
			});

			toast.show({
				title: "Trip Created",
				status: "success",
				placement: "top",
			});
		} catch (error) {
			console.error("tripStore --> addTrip", error);
			toast.show({
				title: "Try Again",
				status: "error",
				description:
					"Please try again to create new trip and make sure you are signed in.",
				placement: "top",
			});
		}
	};

	editTrip = async (tripId, user, updatedTrip, toast) => {
		try {
			if (user._id === tripId.owner._id) {
				const formData = new FormData();
				for (const key in updatedTrip) {
					formData.append(key, updatedTrip[key]);
				}

				const res = await instance.put(`/trips/${tripId._id}`, formData);

				runInAction(() => {
					this.trips = this.trips.map((_trip) =>
						_trip._id === tripId._id ? res.data : _trip
					);
				});

				toast.show({
					title: "Trip Updated",
					status: "success",
					placement: "top",
				});
			} else {
				toast.show({
					title: "Unauthorized",
					status: "error",
					description: "You are not the owner of this trip.",
					placement: "top",
				});
			}
		} catch (error) {
			console.error("tripStore --> editTrip", error);
			toast.show({
				title: "Error",
				status: "error",
				description: "Try again.",
				placement: "top",
			});
		}
	};

	deleteTrip = async (trip, toast, navigation) => {
		try {
			await instance.delete(`/trips/${trip._id}`);
			runInAction(() => {
				this.trips = this.trips.filter((_trip) => _trip._id !== trip._id);
				toast.show({
					title: "Trip Deleted",
					status: "success",
					placement: "top",
				});
			});

			navigation.navigate("Tabs");
		} catch (error) {
			console.log("TripStore -> deleteTrip -> error", error);
			toast.show({
				title: "Unauthorized",
				status: "error",
				description: "You are not the owner of this trip.",
				placement: "top",
			});
		}
	};

	createCommentForTrip = async (tripId, commentInfo, toast) => {
		try {
			const upDateTrip = this.trips.find((trip) => trip._id === tripId);
			const res = await instance.post(`/trips/${tripId}/comments`, commentInfo);

			upDateTrip.comments.push(res.data);

			toast.show({
				title: "Comment Sent",
				status: "success",
				placement: "top",
			});
		} catch (error) {
			console.log(error);
			toast.show({
				title: "Try Again",
				status: "error",
				description: "Something is wrong, please try again.",
				placement: "top",
			});
		}
	};
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
