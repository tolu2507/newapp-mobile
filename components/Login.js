import { useState } from "react";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import { DataItems } from "../data/data";
import ListView from "./bodyComponent";
import PressableText from "./submit";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dataDetails = [
    { text: "EMAIL", change: (val) => setEmail(val), value: email },
    { text: "PASSWORD", change: (val) => setPassword(val), value: password },
  ];

  const Clear = (params) => {
    setEmail(params);
    setPassword(params);
  };

  const handleLoginSubmit = () => {
    console.log("resister");
    if (email && password) {
      const obj = {
        em: email,
        pwd: password,
      };
      console.log(
        DataItems.filter(
          (item) => item.em === obj.em && item.pwd === obj.pwd
        )
      );
      Clear("");
    } else {
      console.log("error", "please enter the hole parameters correctly");
    }
  };
  return (
    <Modal animationType="fade" transparent={false} visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Login</Text>
        </View>
        <View style={styles.form}>
          {dataDetails.map(({ text, change, value }) => (
            <ListView text={text} change={change} value={value} />
          ))}
        </View>

        <PressableText handleSubmit={handleLoginSubmit} text="login" />

        <View style={styles.formview}>
          <Button title="cancel" color="red" onPress={props.onCancel} />
        </View>

        <View style={styles.footer}>
          <Text>
            Dont have an account, <Text style={styles.text2}>register</Text>
          </Text>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 0,
    flex: 1,
  },
  footer: {
    alignItems: "center",
  },
  headerText: {
    color: "red",
    fontSize: 30,
    fontWeight: "bold",
  },
  form: {
    flex: 4,
  },
  formview: {
    flex: 1,
  },
  text2: {
    color: "red",
  },
});
