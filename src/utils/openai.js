import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;
