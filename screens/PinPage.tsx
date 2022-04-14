import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import pins from "../assets/data/pins";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const PinPage = () => {
  const route = useRoute();
  const pinId = route.params?.id;
  const [ratio, setRatio] = useState(1);
  const navigation = useNavigation();

  const pin = pins.find((p) => p.id === pinId);

  useEffect(() => {
    if (pin) {
      Image.getSize(pin.image, (width, height) => setRatio(width / height));
    }
  }, [pin]);

  if (!pin) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Pin not found</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="light" />
      <ScrollView style={styles.container}>
        <Image
          source={{ uri: pin.image }}
          style={[styles.image, { aspectRatio: ratio }]}
        />
        <Text style={styles.title}>{pin.title}</Text>
        <Pressable onPress={() => navigation.goBack()} style={styles.back}>
          <Ionicons name="chevron-back" size={35} color="white" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    backgroundColor: "black",
  },
  back: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  container: {
    backgroundColor: "white",
    height: "100%",

    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  image: {
    width: "100%",
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: "600",
    lineHeight: 35,
    textAlign: "center",
  },
});

export default PinPage;
