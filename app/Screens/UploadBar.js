import React from "react";
import { View, StyleSheet, Modal } from "react-native";
import AppText from "../Components/AppText";
import * as Progress from "react-native-progress";
import colors from "../../config/colors";
import LottieView from "lottie-react-native";

function UploadBar({ onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar
            progress={progress}
            color={colors.secondary}
            width={200}
          />
        ) : (
          <LottieView
            style={styles.animation}
            source={require("../../assets/animations/done.json")}
            onAnimationFinish={() => {
              onDone();
            }}
            loop={false}
            autoPlay={true}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { justifyContent: "center", alignItems: "center", flex: 1 },
  animation: { width: 250 },
});

export default UploadBar;
