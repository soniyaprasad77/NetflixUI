import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute">
        <img
          className=""
          style={{ filter: "brightness(50%)" }}
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="absolute w-full">
        <GPTSearchBar />
      </div>
    </>
  );
};
export default GPTSearch;
