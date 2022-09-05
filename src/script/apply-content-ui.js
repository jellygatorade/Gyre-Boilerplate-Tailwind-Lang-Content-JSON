import * as domVars from "./global-vars-dom.js";

function applyContent(data) {
  domVars.enHomeHeading.innerHTML = data.en.main.heading;
  domVars.esHomeHeading.innerHTML = data.es.main.heading;
  domVars.enHomeIntroText.innerHTML = data.en.main.body;
  domVars.esHomeIntroText.innerHTML = data.es.main.body;
}

export { applyContent };
