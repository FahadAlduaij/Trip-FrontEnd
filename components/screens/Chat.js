import React from "react";
import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Image, ImageBackground } from "react-native";

const Chat = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.body}>
      <ImageBackground
        source={require("../images/Chat.gif")}
        style={styles.image}
      ></ImageBackground>
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
  body: {
    flex: 1,
  },
});

export default Chat;
