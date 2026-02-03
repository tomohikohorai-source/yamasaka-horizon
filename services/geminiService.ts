
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

const SYSTEM_INSTRUCTION = `
あなたは山坂ホライゾン（Yamasaka Horizon）の「AIサイトナビゲーター」です。
ユーザーが入力したキーワードや悩みから、サイト内の最適な情報（サービス、実績、ニュース等）を提案するのが役割です。

あなたのトーン:
- 的確で、信頼感のあるプロフェッショナルな案内。
- 「推し活」や「エンタメDX」への高い専門性を感じさせる口調。

提案の指針:
1. ユーザーの問いに対し、山坂ホライゾンのどのページを見るべきか明確に提示してください。
2. 提案するリンク先（Services, Portfolio, News, Contact等）とその理由を簡潔に説明してください。
3. 最後に「検索バーを閉じて、該当セクションへ進むことをお勧めします」といった行動を促してください。

技術的な知識（公開直後のトラブルシューティング）:
- 質問: 「Vercelで設定を変えた後、成功したか不安です」
- 回答のポイント: 
    1. 「スマホの4G回線で新しいサイトが見えていれば、設定は100%成功しています！」と断言してください。
    2. 「メールがこれまで通り届いていますか？」と確認してください。「メールが届いていれば、ドメインの最も重要な機能が守られている証拠なので安心してください」と伝えてください。
    3. キャッシュ（古い記憶）の影響で、場所によって古いサイトが見えることがあるが、24時間以内には全て新しくなることを伝えてください。

サイト構成の要約:
- Marketing Support: ファンの熱量を最大化する戦略。
- DX Support: テクノロジー（アプリ、スタジアム）の導入。
- Seminar & Education: 業界人材の育成。
- Portfolio: これまでの具体的な成功事例。
- Contact: プロジェクトの相談。
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
          temperature: 0.7,
        },
      });

      return response.text || "申し訳ありません。案内の生成中にエラーが発生しました。";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "エラーが発生しました。直接メニューから各ページをご覧いただくか、お問い合わせください。";
    }
  }
}

export const geminiService = new GeminiService();
