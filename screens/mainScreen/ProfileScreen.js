import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { authSignOutUser } from "../../redux/auth/authOperations";
import db from "../../firebase/config";

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const [userPosts, setUserPosts] = useState([]);
  const { userId } = useSelector((state) => state.auth);

  useEffect(() => {
      getUserPosts();
    }, []);

  const getUserPosts = async () => {
      await db
        .firestore()
        .collection("posts")
        .where("userId", "==", userId)
        .onSnapshot((data) =>
          setUserPosts(data.docs.map((doc) => ({ ...doc.data() })))
        );
  };
  const signOut = () => {
    dispatch(authSignOutUser());
  };
  return (
    <View style={styles.container}>
        <View style={styles.btn}>
          <Button style={styles.btn} title="signOut" onPress={signOut} />
         </View>
        <View>
          <FlatList
            data={userPosts}
            keyExtractor={(item, indx) => indx.toString()}
            renderItem={({ item }) => (
            <View
              style={{
                marginVertical: 5,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.photo }}
                style={{ width: 350, height: 200, borderRadius: 10, }}
              />
            </View>
            )}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
  btn: {
    marginTop: 50,
  },
});

export default ProfileScreen;