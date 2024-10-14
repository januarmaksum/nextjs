import * as React from "react";
import useToast from "@/components/ui/toast";
import { IRq_FormRegister, IRs_FormRegister } from "../register.interface";
import { ACT_SubmitFormRegister } from "../$action/action.register.user";
import Cookies from "js-cookie";

export const CFN_HandleInputChangeRegister = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<IRq_FormRegister>>
) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const CFN_HandleSubmitRegister = async (
  event: React.FormEvent<HTMLFormElement>,
  formData: IRq_FormRegister
) => {
  event.preventDefault();
  const toast = useToast();
  try {
    const response: IRs_FormRegister = await ACT_SubmitFormRegister(formData);

    if (response && response.token) {
      Cookies.set("token", response.token, { expires: 1 });
    }

    return true;
  } catch (error) {
    toast.error("Email already taken, please try another later.");
    console.error("Error during form submission:", error);
    return false;
  }
};
