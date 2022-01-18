import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  Dimensions,
} from "react-native";

import { useDispatch } from "react-redux";
import { authSignInUser } from "../../redux/auth/authOperations";

const window = Math.round(Dimensions.get("screen").width / 10 * 7) ;

const initialState = {
  email: "",
  password: "",
};

export default function Login({ navigation }) {

const [state, setState] = useState(initialState);
const [dimensions, setDimensions] = useState(window);
const dispatch = useDispatch();

useEffect(() => {
    const onChange = () => {
       setDimensions(window);
    };
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
   }, []);

const handleSubmit = () =>{
    dispatch(authSignInUser(state));
    setState(initialState);
   }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={require("../../assets/images/w1.jpg")}
          >
            <View style={{...styles.form,  width: dimensions, }}>
              <View>
                <Text style={styles.inputTitle}>EMAIL ADDRESS</Text>
                <TextInput
                    style={styles.input}
                    textAlign={"center"}
                    value={state.email}
                    onChangeText={(value) =>
                    setState((prevState) => ({ ...prevState, email: value }))
                    }/>
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={styles.inputTitle}>PASSWORD</Text>
                <TextInput
                  style={styles.input}
                  textAlign={"center"}
                  secureTextEntry={true}
                  value={state.password}
                  onChangeText={(value)=>setState((prevState)=>
                  ({...prevState, password:value}))}
                />
              </View>
              <TouchableOpacity onPress={handleSubmit} activeOpacity={0.5} style={styles.btn}>
                <Text style={styles.btnTitle}>SIGN IN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                              onPress={() => navigation.navigate("Register")}
                              style={{
                                marginTop: 20,
                                alignSelf: "center",
                              }}
                            >
                              <Text style={{ color: "#fff" }}>
                                New to application?{" "}
                                <Text style={{ fontSize: 20, color: "#ff6347" }}>
                                  Sign Up
                                </Text>
                              </Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    height: 40,
    borderRadius: 6,
    color: "#f0f8ff",
  },
  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
    fontFamily: "DMMono",
  },
  btn: {
    backgroundColor: "#4169e1",
    height: 40,
    borderRadius: 6,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
  btnTitle: {
    color: "#f0f8ff",
    fontSize: 18,
  },
});



