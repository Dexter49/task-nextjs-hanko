"use client";
import { useEffect, useState } from "react";
import { register } from "@teamhanko/hanko-elements";

const hankoApi = "https://09445b79-23a9-493e-b992-ea0b58cafdeb.hanko.io";

export const Profile = () => {
    const [openState, setOpenState] = useState(false);

    useEffect(() => {
        register(hankoApi ?? "").catch((error) => {
        console.log(error);
        });
    }, []);

    const openProfile = () => {
        setOpenState(!openState);
    };

    return (
        <>
        <button type="button" onClick={openProfile}>
            Profile
        </button>
        {openState && (
            <div className=" absolute top-14 ">
            <section className=" w-[450px] h-auto rounded-2xl bg-white p-5">
                <hanko-profile />
            </section>
            </div>
        )}
        </>
    );
};