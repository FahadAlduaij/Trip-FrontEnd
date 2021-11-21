import "react-native-gesture-handler";
import React from "react";
import {
  Text,
  TextInput,
  View,
  SafeAreaView,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { IoIosArrowDropleft } from "react-icons/io";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <SafeAreaView style={styles.body}>
      {/* <LinearGradient start={[0, 0.5]} end={[1, 0.5]} colors={['#EFBB35', '#4AAE9B']} style={{borderRadius:10}}> */}
      <ImageBackground
        source={require("../images/background.jpg")}
        style={styles.image}
      >
        <View style={styles.container}>
          <Image source={require("../images/logo.png")} style={styles.logo} />
          <TouchableOpacity style={styles.button}>
            <Text
              style={{
                color: "#ffff",
                alignSelf: "center",
                textAlignVertical: "auto",
                fontSize: 23,
                fontWeight: "bold",
              }}
            >
              Get started
            </Text>
          </TouchableOpacity>
        </View>
        {/*</LinearGradient>*/}
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
    height: 100,
    width: 87,
    marginTop: -15,
  },
  body: {
    flex: 1,
  },
});

export default Home;
