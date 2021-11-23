import { instance } from "./instance";
import { makeAutoObservable, runInAction } from "mobx";

class TripStore {
	trips = [];
	loading = true;

	constructor() {
		makeAutoObservable(this);
	}

	fetchTrips = async () => {
		try {
			const response = await instance.get("/trips");
			runInAction(() => {
				this.trips = response.data;
				this.loading = false;
			});
		} catch (error) {
			console.error("tripStore --> fetchTrips", error);
		}
	};

	addTrip = async (newTrip) => {
		try {
			const formData = new FormData();
			for (const key in newTrip) {
				formData.append(key, newTrip[key]);
			}

			const response = await instance.post("/trips", formData);
			this.trips.push(response.data);
		} catch (error) {
			console.error("tripStore --> addTrip", error);
		}
	};

	editTrip = async (updatedTrip) => {
		try {
			await instance.put(`/trips/${updatedTrip.id}`, updatedTrip);

			const trip = this.trips.find((trip) => trip.id === updatedTrip.id);
			for (const key in trip) trip[key] = updatedTrip[key];
		} catch (error) {
			console.error("tripStore --> editTrip", error);
		}
	};

	deleteTrip = async (tripId) => {
		try {
			await instance.delete(`/trips/${tripId}`);

			this.trips = this.trips.filter((trip) => trip.id !== +tripId);
		} catch (error) {
			console.log("TripStore -> deleteTrip -> error", error);
		}
	};

	findUser = async (userId) => {
		try {
			const response = await instance.get(`/users/${userId}`);
			console.log("TripStore -> findUser -> response", response.data);
		} catch (error) {
			console.log("TripStore -> findUser -> error", error);
		}
	};
}

const tripStore = new TripStore();
tripStore.fetchTrips();
export default tripStore;
