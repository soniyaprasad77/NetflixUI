import { BG_URL } from "../utils/constants";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen object-cover" src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <GPTSearchBar />
        
      </div>
    </>
  );
};
export default GPTSearch;
