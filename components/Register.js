import { useState } from "react";
import {
  Button,
  Modal,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DataItems } from "../data/data";
import ListView from "./bodyComponent";
import PressableText from "./submit";

export default function Register(props) {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [country, setCountry] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState(0);
  const [password, setPassword] = useState("");

  const data = [
    { text: "FIRSTNAME", change: (val) => setFirstname(val) , value:firstname},
    { text: "LASTNAME", change: (val) => setLastname(val),value:lastname },
  ];
  const dataDetails = [
    { text: "COUNTRY", change: (val) => setCountry(val), value:country },
    { text: "EMAIL", change: (val) => setEmail(val), value:email},
    { text: "PHONE_NUMBER", change: (val) => setPhonenumber(val), value:phonenumber },
    { text: "PASSWORD", change: (val) => setPassword(val), value:password },
  ];

  const Clear = (params) => {
    setFirstname(params);
    setLastname(params);
    setCountry(params);
    setEmail(params);
    setPhonenumber(params);
    setPassword(params);
  };

  const handleSubmit = () => {
    console.log("resister");
    if (firstname && lastname && country && email && phonenumber && password) {
      const obj = {
        fn: firstname,
        ln: lastname,
        ctry: country,
        em: email,
        phn: phonenumber,
        pwd: password,
      };

      DataItems.push(obj);
      console.log(DataItems);
      Clear("");
    } else {
      console.log("error", "please enter the hole parameters correctly");
    }
  };
  return (
    <Modal animationType="slide" transparent={false} visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Register</Text>
        </View>
        <View style={styles.form}>
          <View style={styles.firstrow}>
            {data.map(({ text, change, value }) => (
              <ListView text={text} change={change} value={value} />
            ))}
          </View>
          {dataDetails.map(({ text, change, value }) => (
            <ListView text={text} change={change} value={value} />
          ))}
        </View>

        <PressableText handleSubmit={handleSubmit} text='Register' />

        <View style={styles.formview}>
          <Button title="cancel" color="red" onPress={props.onCancel} />
        </View>

        <View style={styles.footer}>
          <Text>
            Already have an account, <Text style={styles.text2}>login</Text>
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
  firstrow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text2: {
    color: "red",
  },
});
