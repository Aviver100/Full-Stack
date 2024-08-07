import * as tf from '@tensorflow/tfjs';
import * as use from '@tensorflow-models/universal-sentence-encoder';

let model;

async function loadModel() {
  if (!model) {
    model = await use.load();
  }
  return model;
}

export async function generateScenarios(content) {
  const model = await loadModel();
  const sentences = content.split(/[.!?]+/);
  const embeddings = await model.embed(sentences);

  const scenarios = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i].trim();
    if (isTestScenario(sentence, embeddings.arraySync()[i])) {
      scenarios.push({
        id: `TS${scenarios.length + 1}`,
        title: sentence,
        steps: generateSteps(sentence),
        expectedResult: generateExpectedResult(sentence)
      });
    }
  }

  return scenarios;
}

function isTestScenario(sentence, embedding) {
  // This is a simplified check. In a real-world scenario, you'd want to train a
  // classifier to determine if a sentence describes a test scenario.
  const keywords = ['test', 'verify', 'check', 'ensure', 'validate'];
  return keywords.some(keyword => sentence.toLowerCase().includes(keyword));
}

function generateSteps(scenario) {
  // This is a placeholder. In a real-world scenario, you'd want to use a more
  // sophisticated NLP model to generate realistic steps.
  return [
    'Open the application',
    `Perform the action: ${scenario}`,
    'Verify the result'
  ];
}

function generateExpectedResult(scenario) {
  // This is a placeholder. In a real-world scenario, you'd want to use a more
  // sophisticated NLP model to generate realistic expected results.
  return `The system should successfully ${scenario.toLowerCase()}`;
}