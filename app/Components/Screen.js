import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";

import Constants from "expo-constants";

function Screen(props) {
  return (
    <SafeAreaView style={[styles.container, props.style]}>
      <View style={[{ flex: 1 }, props.style]}>{props.children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
  },
});

export default Screen;
