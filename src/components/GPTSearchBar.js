import React from "react";

const GPTSearchBar = () => {
  return (
    <div>
      <form className=" bg-black my-24 mx-auto w-1/2 border-black">
        <div className="flex my-4">
          <input
            type="text"
            className="w-full p-4 "
            placeholder="What would you like to watch today?"
          />
          <button className="text-white px-8">Search</button>
        </div>
      </form>
    </div>
  );
};

export default GPTSearchBar;
