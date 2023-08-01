require('dotenv').config();

export function ENV(variableName:string) : string {
  if (process.env.GITHUB_ACTIONS) {
    const githubVariable = process.env[`INPUT_${variableName}`];
    if (githubVariable) {
      return githubVariable;
    }
  }

  return String(process.env[variableName]);
}