import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PressableText({ handleSubmit, text }) {
  return (
    <View>
      <View>
        <Pressable
          onPress={handleSubmit}
          android_ripple={{ color: "lightred" }}
          style={styles.button}
        >
          <Text style={styles.colour}>{text}</Text>
        </Pressable>
      </View>
      <View style={styles.items}>
        {text === "Register" ? (
          <Text style={styles.text}>
            By sign up , you are agreeing to the
            <Text style={styles.text2}>Terms and Condition</Text>
          </Text>
        ) : (
          <Text style={styles.text}>
            Can't login ?<Text style={styles.text2}> Forget your password</Text>
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: "center",
    backgroundColor: "red",
    padding: 15,
    borderRadius: 25,
  },
  text: {
    marginTop: 20,
  },
  colour: {
    color: "white",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  text2: {
    color: "red",
  },
  items: {
    alignItems: "center",
    marginBottom: 20,
  },
});
