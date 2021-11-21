import instance from "./instance";
import { makeAutoObservable } from "mobx";

class ProfileStore {
  profile = null;
  loading = true;

  constructor() {
    makeAutoObservable(this);
  }

  //fetch profile
  fetchProfile = async (userId) => {
    try {
      const response = await instance.get(`/profiles/${userId}`);
      this.profile = response.data;
      this.loading = false;
      console.log("profile ", this.profile);
    } catch (error) {
      console.error("profileStore --> fetchProfile", error);
    }
  };

  // Edit profile
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
