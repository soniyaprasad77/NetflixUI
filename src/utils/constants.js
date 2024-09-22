export const LOGO =
  "https://businessmodelnavigator.com/img/case-firms-logos/18.png";
export const FOOTER_LOGO =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Blockbuster_logo.svg/640px-Blockbuster_logo.svg.png";
export const USER_AVTAR =
  "https://preview.redd.it/sgfxdosc4qo81.png?width=338&format=png&auto=webp&s=68081fe5673ff6ac567a531ae01a786ca80695f6";
export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: process.env.REACT_APP_TOKEN,
  },
};

export const CDN_IMG_URL = "https://image.tmdb.org/t/p/w500/";
export const BG_URL = "";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_API_KEY;
export const GEMINI_KEY = process.env.REACT_APP_GEMINI_API_KEY;
