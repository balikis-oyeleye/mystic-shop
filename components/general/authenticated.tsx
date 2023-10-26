"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import toast from "react-hot-toast";

const Authenticated = ({ customer }: AuthenticatedType) => {
  const onLogOut = () => {
    signOut().then(() => {
      toast.success("Logged out");
    });
  };

  return (
    <div className="authenticated">
      <p>
        Hello {customer?.name} ( not {customer?.name}?{" "}
        <button className="btn-primary" onClick={onLogOut}>
          Log Out
        </button>
        )
      </p>

      <Image alt="authenticated" src={"/login.svg"} width={180} height={120} />
    </div>
  );
};

export default Authenticated;
