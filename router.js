import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

import Login from './screens/auth/Login';
import Registration from './screens/auth/Registration';
import PostsScreen from "./screens/mainScreen/PostsScreen";
import CreateScreen from "./screens/mainScreen/CreateScreen";
import ProfileScreen from "./screens/mainScreen/ProfileScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const useRoute = (isAuth) => {
    if(!isAuth){
    return (
            <AuthStack.Navigator screenOptions={{
                                         headerShown: false, animation:'slide_from_right',
                                       }}>
                   <AuthStack.Screen  name="Register" component={Registration} />
                   <AuthStack.Screen  name="Login" component={Login} />
            </AuthStack.Navigator>
         );
    }
    return(
        <MainTab.Navigator screenOptions={{ tabBarShowLabel: false, headerShown: false, }}>
              <MainTab.Screen
                options={{ tabBarIcon: ({ focused, size, color }) => (
                    <MaterialCommunityIcons
                      name="postage-stamp"
                      size={size}
                      color={color}
                    />
                  ),
                }}
                name="Posts"
                component={PostsScreen}
              />
              <MainTab.Screen
                options={{ tabBarIcon: ({ focused, size, color }) => (
                    <AntDesign name="pluscircleo" size={35} color={color} />
                  ),
                }}
                name="Create"
                component={CreateScreen}
              />
              <MainTab.Screen
                options={{ tabBarIcon: ({ focused, size, color }) => (
                    <MaterialCommunityIcons
                      name="face-profile"
                      size={size}
                      color={color}
                    />
                  ),
                }}
                name="Profile"
                component={ProfileScreen}
              />
            </MainTab.Navigator>
    );
};