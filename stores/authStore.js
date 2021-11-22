import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  setUser = async (token) => {
    try {
      await AsyncStorage.setItem("myToken", token);
      this.user = decode(token);
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 20 ~ AuthStore ~ setUser= ~ error",
        error
      );
    }
  };

  signup = async (userData, navigation, toast) => {
    try {
      const res = await instance.post("/signup", userData);
      this.setUser(res.data.token);
      //   navigation.navigate("mainPage");
    } catch (error) {
      console.log("AuthStore -> signup -> error", error);
      toast.show({
        status: "error",
        title: "Invalid Login",
        description: "The username or password you entered is incorrect",
      });
    }
  };

  Signin = async (user, navigation, toast) => {
    try {
      const res = await instance.post("/signin", user);
      this.setUser(res.data.token);
      //   navigation.navigate("mainPage");
    } catch (error) {
      toast.show({
        status: "error",
        title: "Invalid Login",
        description: "The username or password you entered is incorrect",
      });
    }
  };

  signout = async () => {
    try {
      delete instance.defaults.headers.common.Authorization;
      await AsyncStorage.removeItem("myToken");
      this.user = null;
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 62 ~ AuthStore ~ signout= ~ error",
        error
      );
    }
  };

  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("myToken");
      if (token) {
        const currentTime = Date.now() / 1000;
        const user = decode(token);
        if (user.exp >= currentTime) {
          this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: authStore.js ~ line 82 ~ AuthStore ~ error",
        error
      );
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
