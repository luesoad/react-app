import { ContactFormValues } from "../types/form";
export const postApiImageUrl = "https://picsum.photos/1200/1800?random=";

export const postApiUrl = "https://jsonplaceholder.typicode.com/posts/";

const contactFormInitialValues: ContactFormValues = {
  name: "",
  email: "",
  message: "",
};

export default contactFormInitialValues;
