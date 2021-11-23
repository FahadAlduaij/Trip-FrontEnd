import { observer } from "mobx-react";
import React from "react";
import { StyleSheet, SafeAreaView, ScrollView, StatusBar } from "react-native";
import {
  Box,
  Heading,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Pressable,
} from "native-base";

const TripItem = ({ trip, navigation, route }) => {
  return (
    <Pressable
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <SafeAreaView style={styles.container}>
        <Box
          h="300"
          marginBottom="5"
          marginTop="150"
          marginLeft="10"
          marginRight="10"
          maxW="80"
          rounded="lg"
          overflow="hidden"
          borderColor="coolGray.200"
          borderWidth="1"
          _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700",
          }}
          _web={{
            shadow: 2,
            borderWidth: 0,
          }}
          _light={{
            backgroundColor: "gray.50",
          }}
        >
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: trip.image,
                }}
                alt="image"
              />
            </AspectRatio>
          </Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {trip.title}
              </Heading>
            </Stack>

            <HStack
              alignItems="center"
              space={4}
              justifyContent="space-between"
            >
              <HStack alignItems="center"></HStack>
            </HStack>
          </Stack>
        </Box>
      </SafeAreaView>
    </Pressable>
  );
};

export default observer(TripItem);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
