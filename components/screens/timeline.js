import "react-native-gesture-handler";
import React from "react";
import {
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Center, Pressable } from "native-base";
import Tabs from "../tabNavigator/Tabs";
import TripsList from "../Trips/TripsList";
import TripItem from "../Trips/TripItem";

const timeline = ({ navigation, route }) => {
  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground
        source={require("../../components/images/background.jpg")}
        style={styles.image}
      >
        <TripsList navigation={navigation} />

        <View style={{ marginTop: 40 }}>
          <Tabs />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    marginTop: 80,
    alignContent: "center",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  button: {
    marginHorizontal: 20,
    marginTop: 500,
    textAlign: "center",
    margin: 5,
    color: "#171717",
    borderRadius: 10,
    height: 60,
    width: 350,
    padding: 15,
    backgroundColor: "#171717",
  },
  logo: {
    alignSelf: "center",
    height: 150,
    width: 130,
    marginTop: -40,
  },
  body: {
    flex: 1,
  },
});

export default timeline;
