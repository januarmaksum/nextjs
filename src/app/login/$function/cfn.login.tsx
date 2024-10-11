import * as React from "react";
import { IRq_FormLogin } from "../login.interface";
import { ACT_SubmitFormLogin } from "../$action/action.login.user";
import useToast from "@/components/ui/toast";

export const CFN_HandleInputChange = (
  event: React.ChangeEvent<HTMLInputElement>,
  setFormData: React.Dispatch<React.SetStateAction<IRq_FormLogin>>
) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};

export const CFN_HandleSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  formData: IRq_FormLogin
) => {
  event.preventDefault();
  const toast = useToast();
  try {
    const result = await ACT_SubmitFormLogin(formData);
    console.log("Result from ACT_SubmitFormLogin:", result);
  } catch (error) {
    toast.error("Login failed. Please check your credentials and try again.");
    console.error("Error during form submission:", error);
  }
};
