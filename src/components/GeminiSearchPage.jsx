import { BG_URL } from "../utils/constants";
import GeminiSearchBar from "./GeminiSearchBar";

const GeminiSearchPage = () => {
  return (
    <>
      <div className="absolute">
        <img
          className="fixed h-screen object-none xl:h-auto xl:fixed"
          style={{ filter: "brightness(50%)" }}
          src={BG_URL}
          alt="logo"
        />
      </div>
      <div className="absolute w-full">
        <GeminiSearchBar />
      </div>
    </>
  );
};
export default GeminiSearchPage;
