import { toast } from "react-hot-toast";

const useToast = () => {
  const showToast = {
    dismiss: () => {
      toast.remove();
    },
    success: (message: string) => {
      toast.success(message);
    },
    error: (message: string) => {
      toast.error(message);
    },
  };

  return showToast;
};

export default useToast;
