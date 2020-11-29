import client from "./client";

const endpoint = "/ingredients";

const getIngredients = () => client.get(endpoint);

const addIngredients = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("name", listing.name);
  data.append("quantity", listing.quantity);
  data.append("category", listing.category.value);
  data.append("address", listing.address);
  data.append("city", listing.city);
  data.append("expiry", listing.expiry);
  data.append("phoneNumber", listing.phoneNumber);

  listing.images.forEach((uri) => {
    let uriParts = uri.split(".");
    let fileType = uriParts[uriParts.length - 1];
    data.append("images", {
      uri,
      name: `images.${fileType}`,
      type: `image/${fileType}`,
    });
  });

  data.append("userId", listing.userId);

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const deleteIngredient = (id) => client.delete(`ingredients/${id}`);

export default {
  getIngredients,
  addIngredients,
  deleteIngredient,
};
