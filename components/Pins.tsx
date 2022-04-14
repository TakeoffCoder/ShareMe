import { StyleSheet, ScrollView } from "react-native";

import Pin from "../components/Pin";
import { View } from "../components/Themed";

const Pins = ({ pins }) => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <View style={[styles.column, { paddingLeft: 5 }]} key="col-1">
        {pins
          .filter((_, i) => i % 2 === 0)
          .map((pin) => (
            <Pin pin={pin} key={pin.id} />
          ))}
      </View>
      <View style={[styles.column, { paddingRight: 5 }]} key="col-2">
        {pins
          .filter((_, i) => i % 2 !== 0)
          .map((pin) => (
            <Pin pin={pin} key={pin.id} />
          ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    width: "100%",
  },
  column: {
    flex: 1,
  },
});

export default Pins;
