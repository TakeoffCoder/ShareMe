import { StyleSheet } from "react-native";
import { RootTabScreenProps } from "../types";
import Pins from "../components/Pins";

import pins from "../assets/data/pins";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  return <Pins pins={pins} />;
}
