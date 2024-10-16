"use client";

import * as React from "react";
import {
  CFN_HandleInputChangeLogin,
  CFN_HandleSubmitLogin,
} from "../$function/cfn.login";
import { IRq_FormLogin } from "../login.interface";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useRedirectIfAuthenticated from "@/hooks/useRedirectIfAuthenticated";
import SubmitButton from "@/components/ui/submitButton";

const CE_Form_Login = () => {
  useRedirectIfAuthenticated();
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formData, setFormData] = React.useState<IRq_FormLogin>({
    email: "",
    password: "",
  });

  const CFN_handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    try {
      const success = await CFN_HandleSubmitLogin(event, formData);
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
        <h2 className="text-2xl font-bold text-center">Sign in to Apps</h2>
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
                CFN_HandleInputChangeLogin(event, setFormData)
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
                CFN_HandleInputChangeLogin(event, setFormData)
              }
            />
          </div>
          <SubmitButton isSubmitting={isSubmitting} buttonText="Sign in" />
        </form>
        <p className="text-sm text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link legacyBehavior href="/register">
            <a className="text-indigo-600 hover:underline">Register</a>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default CE_Form_Login;
