
/**
 * 山坂ホライゾン - サイトコンテンツ管理ファイル
 * 
 * 【Googleドライブの画像を表示させる方法】
 * 1. ドライブ上の画像を「リンクを知っている全員が閲覧可」に設定します。
 * 2. 共有URLからID部分（例: https://drive.google.com/file/d/[この部分]/view...）をコピーします。
 * 3. 下記の ASSETS_BASE_URL を "https://drive.google.com/uc?export=view&id=" に設定します。
 * 4. 各項目の image に、コピーしたIDを記述してください。
 *    例: image: `${ASSETS_BASE_URL}1ABC1234567890XYZ`
 * 
 * ※Google Cloud Storage (GCS) を使う場合は、URLをバケットのパス（https://storage.googleapis.com/バケット名/）に書き換えてください。
 */

// --- 画像配信元設定 ---
// デフォルトはUnsplash（デモ用）です。
const ASSETS_BASE_URL = "https://images.unsplash.com";

export const siteContent = {
  brand: {
    name: "YAMASAKA",
    nameAccent: "HORIZON",
    description: "スポーツ・エンタメの熱狂をデジタルで価値に変える、ファン中心のDXコンサルティング。"
  },

  hero: {
    tag: "CONNECTING PASSION",
    titleLine1: "その「熱狂」を、",
    titleAccent: "価値",
    titleLine2: "に変える。",
    description: "スポーツ・エンタメ界のマーケティングDXを支援する。ファンとビジネスをデジタルで繋ぎ、推し活をもっと楽しく、もっと自由に。",
    image: `${ASSETS_BASE_URL}/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2000`
  },

  news: [
    {
      id: 'news-001',
      date: '2025.03.20',
      category: 'EVENT',
      title: '次世代エンタメDXセミナー登壇のお知らせ',
      type: 'Seminar',
      image: `${ASSETS_BASE_URL}/photo-1540575861501-7ad0582373f3?auto=format&fit=crop&q=80&w=1200`,
      content: '2025年4月に開催される「デジタル・エンターテインメント・サミット」にて、弊社代表の洞井が登壇いたします。スポーツチームがいかにしてデジタル技術を活用し、ファンのエンゲージメントを高めるか、最新事例を交えてお話しします。オンライン配信も予定しておりますので、ぜひご参加ください。'
    },
    {
      id: 'news-002',
      date: '2025.03.01',
      category: 'CASE',
      title: '推し活支援プラットフォームのコンサルティング事例公開',
      type: 'Case Study',
      image: `${ASSETS_BASE_URL}/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200`,
      content: '特定のアーティストを応援する「推し活」をより豊かにするための新しいプラットフォームの設計支援を行いました。ファンの行動データを分析し、コミュニティ内での貢献を可視化する仕組みを導入した結果、アクティブユーザー数が前年比150%を記録。デジタルギフトや会員限定コンテンツの展開についても詳しく解説しています。'
    },
    {
      id: 'news-003',
      date: '2025.02.15',
      category: 'INFO',
      title: '大学講義「デジタル時代のファンビジネス」開講しました',
      type: 'Education',
      image: `${ASSETS_BASE_URL}/photo-1523050335456-c38a89b7ed14?auto=format&fit=crop&q=80&w=1200`,
      content: '昨年に引き続き、国内主要大学の経営学部にて寄付講座を担当することになりました。ファン心理とデータ分析を融合させた「ファン・セントリック・マーケティング」の実践について、15回の講義を通じて次世代のエンタメ業界を担うリーダーたちに伝えていきます。学生たちの熱意あるディスカッションが楽しみです。'
    },
    {
      id: 'news-004',
      date: '2024.12.10',
      category: 'UPDATE',
      title: 'コーポレートサイトをリニューアルしました',
      type: 'Corporate',
      image: `${ASSETS_BASE_URL}/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`,
      content: '山坂ホライゾンのブランドアイデンティティをより明確に伝えるため、ウェブサイトの全面リニューアルを行いました。私たちのビジョンである「熱狂を価値に変える」をテーマに、最新のポートフォリオや活動情報をより見やすく、そしてスタイリッシュにお届けします。'
    },
  ],

  services: [
    {
      title: 'Consulting',
      jpTitle: 'DX・マーケティング支援',
      description: '「推したい」気持ちをデータで可視化。ライブ会場のDX化からファンコミュニティの構築支援まで、最高のエンタメ体験を創造します。',
      image: `${ASSETS_BASE_URL}/photo-1540039155733-5bb30b53aa14?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Tech Support',
      jpTitle: '新事業・テック支援',
      description: '最先端のテクノロジーをエンタメ市場へ。テック企業と業界を繋ぎ、ファンが喜ぶ新しいサービスの構築とスケールを支援します。',
      image: `${ASSETS_BASE_URL}/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Education',
      jpTitle: 'セミナー・教育',
      description: '次世代のエンタメリーダー育成。大学での講義や実践的なワークショップを通じ、業界を支える高度なビジネス力と専門性を伝えます。',
      image: `${ASSETS_BASE_URL}/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800`
    }
  ],

  portfolio: [
    {
      title: 'Fan Engagement App',
      jpTitle: 'ファンエンゲージメントアプリ',
      category: 'Digital Strategy',
      description: 'プロ球団向けアプリの企画・開発。データ分析に基づきファンの熱量を可視化し、リピート率向上を実現。',
      year: '2023',
      image: `${ASSETS_BASE_URL}/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Digital Arena Project',
      jpTitle: '次世代スマートアリーナ構築',
      category: 'Consulting',
      description: 'スタジアムのDX化を支援。高速Wi-Fi基盤の整備とモバイルオーダー導入により、観戦体験をアップデート。',
      year: '2024',
      image: `${ASSETS_BASE_URL}/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Entertainment Seminar',
      jpTitle: 'エンタメビジネスセミナー',
      description: '音楽・芸能業界のDX人材育成。デジタルマーケティングとファン心理を組み合わせた実践的な講義を提供。',
      category: 'Education',
      year: '2023',
      image: `${ASSETS_BASE_URL}/photo-1505373630103-89d00c2a5dc5?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Web3 Solution Design',
      jpTitle: 'Web3ファンコミュニティ設計',
      category: 'Tech Support',
      description: 'NFTやトークンを活用した新しい推し活の形を提案。アーティストとファンの直接的な繋がりを技術で支援。',
      year: '2023',
      image: `${ASSETS_BASE_URL}/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800`
    }
  ],

  about: {
    quote: "熱狂を日常に、ワクワクを未来に。",
    title: "ファンと業界の「新しい関係」を作る",
    description1: "私たちは、スポーツ・エンタメが大好きな一人の「ファン」の視点を忘れません。推しを想うエネルギーが、テクノロジーによって正しく還元され、より良いエンタメ体験として戻ってくる。そんな循環を作ることが私たちの使命です。",
    description2: "コンサルティングは手段にすぎません。その先にある「最高の笑顔」のために、私たちはデジタルとリアルの架け橋となります。",
    image: `https://drive.google.com/file/d/1rYZoRojQLxNSBJ2EIcywn8e9zCx5uP1I/view?usp=drive_link`,
    companyProfile: [
      { label: "会社名", value: "株式会社ヤマサカホライズン" },
      { label: "代表取締役社長", value: "洞井 知彦" },
      { label: "所在地", value: "大阪府大阪市東住吉区山坂5-15-12" },
      { label: "設立", value: "2023年10月2日" }
    ],
    stats: [
      { label: "Empower", sub: "Fan Base" },
      { label: "Innovation", sub: "Solutions" }
    ]
  },

  contact: {
    email: "support@yamasakahorizon.com",
    address: "大阪府大阪市東住吉区山坂5-15-12"
  }
};
