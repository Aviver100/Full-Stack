import nlp from "compromise";

function extractScripts(text) {
  const doc = nlp(text);
  const scripts = doc.sentences().out('array');
  return scripts;
}

export default extractScripts;
