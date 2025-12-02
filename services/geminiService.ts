import { GoogleGenAI } from "@google/genai";
import { RESUME_CONTEXT } from "../constants";

// Initialize the client. 
// NOTE: In a real production build, ensure your API key is restricted.
// Since this is a client-side app, users can technically see the key if they dig.
// Ideally, use a backend proxy. For this portfolio demo, we assume process.env usage.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const sendChatToVirtualCFO = async (userMessage: string): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Demo Mode: API Key missing. Please set REACT_APP_API_KEY or configure process.env.API_KEY.";
  }

  try {
    const systemInstruction = `
      You are an AI Assistant representing John Gu, a CFO.
      Your goal is to impress potential employers or clients by answering questions about his experience accurately based on the provided CONTEXT.
      
      CONTEXT:
      ${RESUME_CONTEXT}
      
      GUIDELINES:
      - Be professional, concise, and confident.
      - If the answer is not in the context, say "I don't have the specific details on that in my current database, but John would be happy to discuss it personally."
      - Do not make up facts.
      - If asked about "Excel" or "Samples", direct them to the Work Samples section.
      - Keep answers under 100 words unless asked for elaboration.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: userMessage }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    return response.text || "I apologize, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am currently experiencing high traffic. Please try asking again in a moment.";
  }
};