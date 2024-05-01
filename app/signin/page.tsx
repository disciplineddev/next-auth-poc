"use client";
import { signIn } from "next-auth/react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded shadow-md">
        <h2 className="text-2xl mb-4 text-center">Sign In</h2>
        <div className="flex justify-center space-x-4 mb-4">
          <button
            key={1}
            onClick={async () => {
              await signIn("google");
            }}
            className="flex items-center justify-center w-1/2 h-12 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
          >
            <FaGoogle className="mr-10" />
          </button>
          <button
            key={2}
            onClick={async () => {
              await signIn("github");
            }}
            className="flex items-center justify-center w-1/2 h-12 text-white bg-blue-600 hover:bg-blue-700 rounded-md focus:outline-none"
          >
            <FaGithub className="mr-2" />
          </button>
          <button
            onClick={async () => {
              const res = await signIn("credentials", {
                username: "",
                password: "",
                redirect: false,
              });
              console.log(res);
              router.push("/");
            }}
          >
            Login with email
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
