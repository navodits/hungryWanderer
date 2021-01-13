import { create } from "apisauce";
import authStorage from "../auth/storage";
import settings from "./../../config/settings";

const client = create({
  // baseURL: "https://hungrywanderer-backend.herokuapp.com/api",
  baseURL: "http://192.168.1.96:9000/api",
});

client.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) {
    return;
  }

  request.headers["x-auth-token"] = authToken;
});

export default client;
