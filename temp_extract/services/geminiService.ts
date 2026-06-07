import { GoogleGenAI } from "@google/genai";
import { BIO_CONTEXT } from "../constants";

let ai: GoogleGenAI | null = null;

// Initialize the client safely
try {
  if (process.env.API_KEY) {
    ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  } else {
    console.warn("Gemini API Key is missing. Chat features will not work.");
  }
} catch (error) {
  console.error("Error initializing Gemini client:", error);
}

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  if (!ai) {
    return "I'm sorry, my brain (API Key) is currently missing. Please contact the administrator.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: BIO_CONTEXT,
        temperature: 0.7,
      },
    });

    return response.text || "I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while thinking about that. Please try again later.";
  }
};