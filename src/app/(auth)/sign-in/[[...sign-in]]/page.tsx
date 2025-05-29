import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return (
    <div>
      <main className="flex items-center justify-center h-screen w-full">
        <SignIn />
      </main>
    </div>
  );
};

export default SignInPage;
