import { View, Image, Button, TextInput } from "react-native";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const CreatePin = () => {
  const [image, setImage] = useState(null);
  const [title, setTitle] = useState("");

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const onSubmit = () => {
    console.warn("Submitting");
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
      }}
    >
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && (
        <>
          <Image
            source={{ uri: image }}
            style={{ width: "100%", height: 200 }}
          />
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={{
              borderWidth: 1,
              borderColor: "gainsboro",
              alignSelf: "stretch",
              marginVertical: 10,
              padding: 10,
              borderRadius: 5,
            }}
          />
          <Button title="Submit" onPress={onSubmit} />
        </>
      )}
    </View>
  );
};

export default CreatePin;
