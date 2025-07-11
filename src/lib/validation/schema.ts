import * as yup from "yup";

export const contactSchema = yup.object({
  name: yup.string().min(2).max(50).required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  message: yup.string().min(10).required("Message is required"),
});
