import React, { useState, useEffect } from "react";
import {} from "react-native";
import { useFonts } from 'expo-font';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Main from "./components/Main";

export default function App() {

 const [loaded] = useFonts({ DMMono: require('./assets/fonts/DMMono-MediumItalic.ttf'),});

 if (!loaded) {
    return null;
}

return(
   <Provider store={store}>
    <Main/>
   </Provider>
  );
};



