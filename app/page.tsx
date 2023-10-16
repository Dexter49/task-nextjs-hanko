"use client";
import { useEffect} from "react";
import { register } from "@teamhanko/hanko-elements";

  const hankoApi = "https://09445b79-23a9-493e-b992-ea0b58cafdeb.hanko.io";
  export default function Login() {
    useEffect(() => {
      //
      register(hankoApi ?? "").catch((error) => {
        console.log(error);
      });
    }, []);

    return (
      <div className="flex min-h-screen justify-center items-center ">
        <hanko-auth />
      </div>
    );
  }
