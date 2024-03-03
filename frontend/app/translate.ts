// import translate from "google-translate-api"
// import { resourceLimits } from "worker_threads";

// export const translation = async (inp: string, lang: string) => {
//     // translate(inp, {to: lang}).then(res => {
//     //     return res.text;
//     // }).catch(err => {
//     //     return inp;
//     // });
//     // const res = await translate(inp, {to: lang});
//     // return res.text;
// }

import translations from "./translation.json";
import translation_main from "./translation_main.json";

export function translation(statement: string | number, lang: string | number) {
  // Default to English if the language is not found
  // @ts-ignore
  const language = translations[lang] || translations['en'];

  // Retrieve the translated string or use the original string if not found
  const translatedString = language[statement] || statement;

  return translatedString;
}

export function translation_main_page(statement: string | number, lang: string | number) {
  // Default to English if the language is not found
  // @ts-ignore
  const language = translation_main[lang] || translation_main['en'];

  // Retrieve the translated string or use the original string if not found
  const translatedString = language[statement] || statement;

  return translatedString;
}