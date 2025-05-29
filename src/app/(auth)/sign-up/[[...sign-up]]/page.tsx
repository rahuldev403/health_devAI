import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return (
    <div>
      {" "}
      <main className="flex items-center justify-center h-screen w-full">
        <SignUp />
      </main>
    </div>
  );
};

export default SignUpPage;
