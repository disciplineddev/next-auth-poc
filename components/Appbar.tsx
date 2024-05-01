"use Client";

import { signIn, signOut } from "next-auth/react";

const AppBar = () => {
  return (
    <header className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Disciplined Dev</div>
        <div>
          <button
            onClick={() => signOut()}
            className="text-white hover:text-gray-300 mr-4"
          >
            Logout
          </button>
          <button
            onClick={() => signIn()}
            className="text-white hover:text-gray-300"
          >
            Login
          </button>
        </div>
      </div>
    </header>
  );
};

export default AppBar;
