import { create } from "apisauce";
import authStorage from "../auth/storage";

const client = create({
  baseURL: "http://192.168.1.97:9000/api",
});

client.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) {
    return;
  }

  request.headers["x-auth-token"] = authToken;
});

export default client;
