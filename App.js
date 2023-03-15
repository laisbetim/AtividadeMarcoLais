// import RootNavigation from "./src/index";

// export default function App() {
//   return (
//     <RootNavigation />
//   );
// }

import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import LoginScreen from "./src/screens /LoginScreen";

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function Apps() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        screenOptions={{
          tabBarActiveTintColor: "#e91e63",
        }}
      >
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            tabBarLabel: "Login",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="Login" color={color} size={size} />
            ),
          }}
        />

        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notifications}
          options={{
            tabBarLabel: "Updates",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
