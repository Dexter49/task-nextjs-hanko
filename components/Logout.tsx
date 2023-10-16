"use client";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = "https://09445b79-23a9-493e-b992-ea0b58cafdeb.hanko.io";

export const Logout = () => {
    const router = useRouter();
    const [hanko, setHanko] = useState<Hanko>();

    useEffect(() => {
        import("@teamhanko/hanko-elements").then(({ Hanko }) =>
        setHanko(new Hanko(hankoApi ?? ""))
        );
    }, []);

    const logout = () => {
        hanko?.user
        .logout()
        .then(() => {
            router.push("/");
            router.refresh();
            return;
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const renewSession = useCallback(() => {
    router.replace("/");
    }, [router]);

    useEffect(
        () =>
        hanko?.onSessionExpired(() => {
            renewSession();
        }),

        [hanko, renewSession]
    );

    return (
        <>
        <button type="button" onClick={logout}>Logout</button>
        </>
    );
};