// src/util/api.ts

export async function get_llm_response(prompt: string): Promise<{ response: string }> {
  return new Promise((resolve) => {
    resolve({ response: prompt });
  });
}