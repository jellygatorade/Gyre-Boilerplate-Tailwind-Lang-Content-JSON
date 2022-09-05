import { callFetchCreateUI } from "./fetch.js";
import { applyLanguage, setLanguage, lang } from "./language-switcher.js";

callFetchCreateUI();

// Determine if there was a language previously set
if (localStorage.getItem("langState")) {
  setLanguage(localStorage.getItem("langState"));
}

// Apply the language specified in current "langState"
applyLanguage(lang.langState);
