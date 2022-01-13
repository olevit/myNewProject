import React,{ useState, useEffect} from "react";
import { View, StyleSheet, FlatList, Image, Button } from "react-native";

const DefaultScreenPosts = ({ route, navigation }) => {

const [ posts,setPosts] = useState([]);

useEffect(()=> {
 if(route.params){
    setPosts((prevState) => [...prevState, route.params]);
 }
},[route.params]);

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
            <View style={{ marginVertical: 5,
                           justifyContent: "center",
                           alignItems: "center",
                           borderRadius: 10,}}>
                <Image source={{ uri: item.photo, }}
                style={{ width: 350, height: 200, borderRadius: 10, }}/>
            </View>
        )}/>
        <Button title="go to map" onPress={() => navigation.navigate("Map")} />
        <Button
                title="go to Comments"
                onPress={() => navigation.navigate("Comments")}
              />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});

export default DefaultScreenPosts;