"use client";

import * as React from "react";
import { IRq_FormRegister } from "../register.interface";
import {
  CFN_HandleInputChangeRegister,
  CFN_HandleSubmitRegister,
} from "../$function/cfn.register";
import Link from "next/link";
import { useRouter } from "next/navigation";
import SubmitButton from "@/components/ui/submitButton";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";

const CE_Form_Register = () => {
  useRedirectIfAuthenticated();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState<IRq_FormRegister>({
    email: "",
    password: "",
  });

  const CFN_handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await CFN_HandleSubmitRegister(event, formData);
      if (success) {
        router.replace("/dashboard");
        return;
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  React.useEffect(() => {
    router.prefetch("/dashboard");
  }, [router]);

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
          <SubmitButton isSubmitting={isSubmitting} buttonText="Create Account" />
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
