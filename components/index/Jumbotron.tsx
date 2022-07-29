import React from "react";
import { useState } from "react";

function jumbotron() {
  const [hidden, setHidden] = useState("hidden");

  const handleLogin = () => {
    setHidden("");
    setTimeout(() => {
      setHidden("hidden");
    }, 1500);
  };

  return (
    <div className="bg-cyan-200 w-full h-[80vh] flex flex-col justify-center items-center gap-y-2 lg:gap-y-4">
      <div className="index-heading font-semibold">Emoji Journal</div>
      <div className="index-heading mb-10">😁</div>
      <input
        type="text"
        className="w-1/2 rounded-md h-10 sm:h-12 lg:h-13 p-2 md:p-3 lg:p-4"
        placeholder="Email"
      />
      <div className={`bg-green-200 p-2 sm:p-4 sm:font-medium rounded-md ${hidden}`}>
        An email was sent to you! Check it now!
      </div>
      <button
        className="bg-gray-200 rounded-md p-2 lg:p-3 font-medium sm:text-lg"
        onClick={e => handleLogin()}
      >
        Signup/Login Now
      </button>
    </div>
  );
}

export default jumbotron;
