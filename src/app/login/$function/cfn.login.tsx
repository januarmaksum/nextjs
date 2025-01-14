import * as React from "react";
import { IRq_FormLogin } from "../login.interface";
import { ACT_SubmitFormLogin } from "../$action/action.login.user";
import useToast from "@/components/ui/toast";
import Cookies from "js-cookie";
import { IRs_FormRegister } from "@/app/register/register.interface";

export const CFN_HandleInputChangeLogin = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<IRq_FormLogin>>
) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const CFN_HandleSubmitLogin = async (
  event: React.FormEvent<HTMLFormElement>,
  formData: IRq_FormLogin
) => {
  event.preventDefault();
  const toast = useToast();
  try {
    const response: IRs_FormRegister = await ACT_SubmitFormLogin(formData);

    if (response && response.token) {
      Cookies.set("token", response.token, { expires: 1 });
    }

    return true;
  } catch (error) {
    toast.error("Login failed. Please check your credentials and try again.");
    console.error("Error during form submission:", error);
    return false;
  }
};
