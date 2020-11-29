import React, { useState } from "react";
import { StyleSheet } from "react-native";
import AuthNavigator from "./app/Navigation/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/Navigation/AppNavigator";
import Context from "./context/context";
import authStorage from "./app/auth/storage";
import { AppLoading } from "expo";

export default function App() {
  const { ItemContext, UserContext } = Context;
  const [itemChanged, setItemChanged] = useState(false);
  const [user, setUser] = useState();
  const [isAppReady, setIsAppReady] = useState(false);

  const loadUser = async () => {
    const user = await authStorage.getUser();
    if (user) {
      setUser(user);
    }
  };

  if (!isAppReady) {
    return (
      <AppLoading startAsync={loadUser} onFinish={() => setIsAppReady(true)} />
    );
  }

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ItemContext.Provider value={{ itemChanged, setItemChanged }}>
        <NavigationContainer>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </ItemContext.Provider>
    </UserContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
