// import OpenAI from "openai";
// const openai = new OpenAI({
//   apiKey:
//     "",
// });

// export default openai;

import OpenAI from "openai";
import { OPENAI_KEY } from "./constants";

const openai = new OpenAI({
  apiKey: OPENAI_KEY,
  dangerouslyAllowBrowser: true,
});

export default openai;

