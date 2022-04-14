import { StyleSheet, Image, ScrollView } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { Feather, Entypo } from "@expo/vector-icons";
import pins from "../assets/data/pins";
import Pins from "../components/Pins";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Icons */}
        <View style={styles.header}>
          <Feather name="share" size={24} color="black" style={styles.icon} />
          <Entypo
            name="dots-three-horizontal"
            size={24}
            color="black"
            style={styles.icon}
          />
        </View>

        {/* Profile pic */}
        <Image
          source={{
            uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.png",
          }}
          style={styles.avatar}
        />

        {/* Name */}
        <Text style={styles.name}>Mohit</Text>

        {/* Following */}
        <Text style={styles.followers}>1K followers | 258K following</Text>

        {/* Pins */}
        <Pins pins={pins} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "white",
  },
  header: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  icon: {
    margin: 10,
  },
  avatar: {
    width: 200,
    aspectRatio: 1,
    borderRadius: 250,
  },
  name: {
    fontSize: 40,
    fontWeight: "600",
    margin: 10,
  },
  followers: {
    color: "#181818",
    fontWeight: "600",
    marginBottom: 20,
  },
});
