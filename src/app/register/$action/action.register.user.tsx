import { IRq_FormRegister } from "../register.interface";

export async function ACT_SubmitFormRegister(formData: IRq_FormRegister) {
  try {
    const response = await fetch("https://reqres.in/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      if (response.status === 400) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Registration failed");
      }
      throw new Error("Failed to register");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}
