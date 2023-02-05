import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Button, Image, StyleSheet, View } from "react-native";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  const [registerModal, setRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const handleModalChange = () => {
    setRegisterModal(!registerModal);
  };

  return (
    <NavigationContainer>
      <View style={styles.container}>
        <View style={styles.first}>
          <Image source={require("./assets/images/logoss.png")} />
        </View>
        <View style={styles.item}>
          <View style={styles.items}>
            <Button
              title="Register"
              color="gold"
              onPress={() => setRegisterModal(!registerModal)}
            />
            <Register visible={registerModal} onCancel={handleModalChange} />
          </View>
          <View style={styles.items}>
            <Button
              title="Login"
              color="gold"
              onPress={() => setLoginModal(!loginModal)}
            />
            <Login
              visible={loginModal}
              onCancel={() => setLoginModal(!loginModal)}
            />
          </View>
        </View>
        <StatusBar style="light" />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    padding: 20,
    backgroundColor: "red",
  },
  first: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  items: {
    marginBottom: 10,
    borderRadius: 240,
    backgroundColor: "blue",
  },
});
