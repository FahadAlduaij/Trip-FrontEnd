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
			// Because title is required in Schema but no need to rewrite it when updating

			if (!updatedTrip.title) {
				updatedTrip.title = tripId.title;
			}

			if (!updatedTrip.description) {
				updatedTrip.description = tripId.description;
			}

			if (!updatedTrip.image) {
				updatedTrip.image = tripId.image;
			}

			const formData = new FormData();
			for (const key in updatedTrip) {
				formData.append(key, updatedTrip[key]);
			}

			const res = await instance.put(`/trips/${tripId._id}`, formData);

			const trip = this.trips.find((_trip) => _trip._id === tripId._id);
			trip = res.data;

			toast.show({
				title: "Trip Updated",
				status: "success",
				placement: "top",
			});
		} catch (error) {
			console.error("tripStore --> editTrip", error);
			toast.show({
				title: "Unauthorized",
				status: "error",
				description: "You are not the owner of this trip.",
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
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
