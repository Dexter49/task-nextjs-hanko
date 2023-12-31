"use client";
import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { register, Hanko } from "@teamhanko/hanko-elements";

const hankoApi = "https://09445b79-23a9-493e-b992-ea0b58cafdeb.hanko.io";
export default function Login() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const redirectAfterLogin = useCallback(() => {
    router.replace("/todo");
  }, [router]);

  useEffect(
    () =>
      hanko?.onAuthFlowCompleted(() => {
        redirectAfterLogin();
      }),
    [hanko, redirectAfterLogin]
  );

  useEffect(() => {
    //
    register(hankoApi ?? "").catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="flex min-h-screen justify-center items-center bg-slate-50">
      <div className="bg-white p-5 rounded-2xl shadow-md">
        <hanko-auth />
      </div>
    </div>
  );
}
