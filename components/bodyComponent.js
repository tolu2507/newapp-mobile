import { StyleSheet, Text, TextInput, View } from "react-native";

export default function ListView({ text, change, value }) {
  return (
    <View key={text} style={styles.view}>
      <Text>{text} :</Text>
      <TextInput
        onChangeText={change}
        placeholder="enter your details......"
        value={value}
        style={styles.input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    backgroundColor: "lightgrey",
    borderRadius: 25,
  },
  view: {
    marginTop: 10,
  },
});
