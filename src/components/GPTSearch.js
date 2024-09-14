import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="absolute">
        <img className="" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GPTSearchBar />
      </div>
    </>
  );
};
export default GPTSearch;
