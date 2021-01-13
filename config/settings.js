import Constants from "expo-constants";
const settings = {
  dev: {
    apiUrl: "192.168.1.96:9000/api",
  },
  staging: {
    apiUrl: "https://hungrywanderer-backend.herokuapp.com/api",
  },
};

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel == "staging") return settings.staging;
};

export default getCurrentSettings();
