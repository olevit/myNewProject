import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import { View, Text, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";


const CreateScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);

useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      })();
    (async () => {
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
        })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    setPhoto(photo.uri);
    console.log("photo", photo);
  };

const sendPhoto = () => {
    console.log("navigation", navigation);
    navigation.navigate("DefaultScreen", { photo });
  };

    return(
    <View style={styles.container}>
        <Camera style={styles.camera} type={type} ref={setCamera}>
        {photo && (
                  <View style={styles.takePhotoContainer}>
                    <Image
                      source={{ uri: photo }}
                      style={{ height: 200, width: 200, borderRadius: 10 }}
                    />
                  </View>
                )}
    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}}>
              <TouchableOpacity
                style={{...styles.snapContainer,  marginRight: 10}}
                onPress={() => {
                  setType(
                    type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back
                  );
                }}>
                <Text style={styles.sendLabel}> Flip </Text>
              </TouchableOpacity>
              <TouchableOpacity
                            style={styles.snapContainer}
                            onPress={takePhoto}>
                            <Text style={styles.sendLabel}>Photo </Text>
              </TouchableOpacity>
              </View>
            </Camera>
            <View>
                <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
                  <Text style={styles.sendLabel}>SEND</Text>
                </TouchableOpacity>
            </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
   height: "70%",
   marginHorizontal: 5,
   marginTop: 40,
   borderRadius: 10,
   alignItems: "center",
   justifyContent: "flex-end",
  },
  snap: {
    color: "#fff",
  },
  snapContainer: {
    borderWidth: 1,
    borderColor: "#ff0000",
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  takePhotoContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: "#20b2aa",
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  sendLabel: {
    color: "#20b2aa",
    fontSize: 20,
  },
});

export default CreateScreen;