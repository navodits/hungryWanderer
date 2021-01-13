import * as Yup from "yup";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Food Name"),
  quantity: Yup.string().required().min(1).max(10000).label("Quantity"),
  address: Yup.string().required().label("Address"),
  city: Yup.string().required().label("City"),
  phoneNumber: Yup.string().required().label("Contact Number"),
  expiry: Yup.string().required().label("Expiry Date"),
  images: Yup.array(),
});

export default validationSchema;
