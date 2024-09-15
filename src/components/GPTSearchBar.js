import React from "react";

const GPTSearchBar = () => {
  return (
    <div>
      <form className=" pt-24 bg-black">
        <input 
        type="text" 
        className=" px-16 py-4 m-4 w-1/2" 
        placeholder="What would you like to watch today?"

        />
        <button className="">Search</button>
      </form>

    </div>
  );
};

export default GPTSearchBar;
