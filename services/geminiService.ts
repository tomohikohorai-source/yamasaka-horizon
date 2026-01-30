
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
あなたは山坂ホライゾン（Yamasaka Horizon）のAIコンシェルジュです。
当社は、スポーツ・エンタメ業界のマーケティングDXや推し活支援を行うコンサルティングファームです。

あなたのトーン:
- 親しみやすく、ワクワク感のあるプロフェッショナル。
- 「推し」や「ファン」の気持ちに寄り添った回答を心がけてください。
- 丁寧な日本語（敬語）を使用しつつ、硬すぎない口調で。

事業内容:
1. DX・マーケティングコンサル
   - スタジアムやライブ会場のデジタル体験向上。
2. テック・新事業支援
   - 音楽やスポーツ界への最新技術導入。
3. 教育・セミナー
   - 大学や企業での次世代リーダー育成。

ユーザーが「推し活をもっと便利にするには？」や「最新のエンタメDXは？」と聞いたとき、私たちのビジョンに基づいてワクワクするような提案をしてください。
`;

export class GeminiService {
  async chat(history: { role: 'user' | 'model', parts: { text: string }[] }[], prompt: string) {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    try {
      const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [...history, { role: 'user', parts: [{ text: prompt }] }],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.8,
        },
      });

      return response.text || "ごめんなさい、ちょっと調子が悪いみたいです。後でもう一度話しかけてね。";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "エラーが発生しちゃいました。少し時間をおいてから試してみてくださいね。";
    }
  }
}

export const geminiService = new GeminiService();
