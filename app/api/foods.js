import client from "./client";

const endpoint = "/foods";

const getFoods = () => client.get(endpoint);

const addFoods = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("name", listing.name);
  data.append("quantity", listing.quantity);
  data.append("address", listing.address);
  data.append("city", listing.city);
  data.append("expiry", listing.expiry);
  data.append("phoneNumber", listing.phoneNumber);
  data.append("userId", listing.userId);

  listing.images.forEach((uri) => {
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    data.append("images", {
      uri,
      name: `images.${fileType}`,
      type: `image/${fileType}`,
    });
  });

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const deleteFood = (id) => client.delete(`foods/${id}`);

export default {
  getFoods,
  addFoods,
  deleteFood,
};
