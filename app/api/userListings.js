import client from "./client";

const getUserListings = () => client.get("/userListings");

export default { getUserListings };
