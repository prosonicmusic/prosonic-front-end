import { toast } from "react-hot-toast";

export default function checkErrors(errors) {
  if (Array.isArray(errors)) {
    errors.forEach((error) => {
      toast.error(error);
    });
  } else if (typeof errors === "string") {
    toast.error(errors);
  }
}
