import client from "./client";

const register = (userInfo) => {
  return client.post("/users", userInfo);
};

const addPushNotificationToken = (userId, pushToken) => {
  return client.patch("/users/pushToken", { userId, pushToken });
};

export default { register, addPushNotificationToken };
