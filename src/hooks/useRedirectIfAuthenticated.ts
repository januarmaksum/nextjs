import * as React from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const useRedirectIfAuthenticated = () => {
  const router = useRouter();

  React.useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      router.replace("/dashboard");
    }
  }, [router]);
};

export default useRedirectIfAuthenticated;
