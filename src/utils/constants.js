import bg_image from "../assets/images/backgroundImage.webp";
import IMG_URL from "../assets/images/Blockbuster-Emblem.png";

export const LOGO = IMG_URL;

export const FOOTER_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/640px-Blockbuster_logo.svg.png";
export const USER_AVTAR =
  "https://cdn-icons-png.flaticon.com/512/9385/9385289.png";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TOKEN,
  },
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL = bg_image;

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_API_KEY;
