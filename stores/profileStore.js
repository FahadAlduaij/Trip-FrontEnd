import { instance } from "./instance";
import { makeAutoObservable } from "mobx";

class ProfileStore {
  profile = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  fetchProfile = async (userId) => {
    try {
      const response = await instance.get(`/profiles/${userId}`);
      this.profile = response.data;
      this.loading = false;
    } catch (error) {
      console.error("profileStore --> fetchProfile", error);
    }
  };

  editProfile = async (updatedProfile) => {
    try {
      const response = await instance.put(`/profiles`, updatedProfile);

      const profile = this.profiles.find(
        (profile) => profile.id === updatedProfile.id
      );
      for (const key in profile) profile[key] = updatedProfile[key];
    } catch (error) {
      console.error("profileStore --> editProfile", error);
    }
  };
}

const profileStore = new ProfileStore();
export default profileStore;
