"use client";

import * as React from "react";
import { IRq_FormRegister } from "../register.interface";
import {
  CFN_HandleInputChangeRegister,
  CFN_HandleSubmitRegister,
} from "../$function/cfn.register";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CE_Form_Register = () => {
  const router = useRouter();
  const [formData, setFormData] = React.useState<IRq_FormRegister>({
    email: "",
    password: "",
  });

  const CFN_handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const success = await CFN_HandleSubmitRegister(event, formData);
    if (success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Create an Account</h2>
        <form onSubmit={CFN_handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(event) =>
                CFN_HandleInputChangeRegister(event, setFormData)
              }
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(event) =>
                CFN_HandleInputChangeRegister(event, setFormData)
              }
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-gray-600">
          Already have an account?{" "}
          <Link legacyBehavior href="/login">
            <a className="text-indigo-600 hover:underline">Login</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CE_Form_Register;
