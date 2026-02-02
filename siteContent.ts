
/**
 * 山坂ホライゾン - サイトコンテンツ管理ファイル
 */

// --- 画像配信元設定 ---
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
      content: '2025年4月に開催される「デジタル・エンターテインメント・サミット」にて、弊社代表の洞井が登壇いたします。'
    },
    { 
      id: 'news-002',
      date: '2025.03.01', 
      category: 'CASE', 
      title: '推し活支援プラットフォームのコンサルティング事例公開',
      type: 'Case Study',
      image: `${ASSETS_BASE_URL}/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1200`,
      content: '特定のアーティストを応援する「推し活」をより豊かにするための新しいプラットフォームの設計支援を行いました。'
    },
    { 
      id: 'news-003',
      date: '2025.02.15', 
      category: 'INFO', 
      title: '大学講義「デジタル時代のファンビジネス」開講しました',
      type: 'Education',
      image: `${ASSETS_BASE_URL}/photo-1523050335456-c38a89b7ed14?auto=format&fit=crop&q=80&w=1200`,
      content: '昨年に引き続き、国内主要大学の経営学部にて寄付講座を担当することになりました。'
    },
    { 
      id: 'news-004',
      date: '2024.12.10', 
      category: 'UPDATE', 
      title: 'コーポレートサイトをリニューアルしました',
      type: 'Corporate',
      image: `${ASSETS_BASE_URL}/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200`,
      content: '山坂ホライゾンのブランドアイデンティティをより明確に伝えるため、ウェブサイトの全面リニューアルを行いました。'
    },
  ],

  services: [
    {
      id: 'marketing',
      title: 'Marketing Support',
      jpTitle: 'マーケティング支援',
      description: 'お客様の事業を拡大するためのマーケティング戦略の策定、実行、効果測定まで包括して支援します。ファン一人ひとりの熱量をデータ化し、持続可能なビジネスモデルを構築します。',
      longDescription: 'スポーツやエンターテインメントにおいて、ファンの「熱狂」は最大の資産です。私たちはその熱量を一過性のものにせず、持続的なビジネス価値へと昇華させるための伴走型支援を行います。市場調査からコンセプト設計、具体的なファン獲得施策まで、現場感覚とデータサイエンスを融合させたアプローチで、クライアントの事業成長を加速させます。',
      image: `${ASSETS_BASE_URL}/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200`, 
      features: [
        'マーケティング戦略・中長期ロードマップの策定',
        '「推し活」を加速させるファン作り施策の立案と実行支援',
        'SNS・コミュニティを通じたファンとの双方向コミュニケーション改善',
        '定量・定数調査に基づく詳細なマーケティングリサーチ',
        'ファンのインサイトを突く商品・サービスの企画設計',
        'ブランド価値を再定義するリブランディング・プロジェクト',
        'ファン層を拡大し、収益を最大化するための販路拡大支援'
      ]
    },
    {
      id: 'dx',
      title: 'DX Support',
      jpTitle: 'DX（IT活用）支援',
      description: 'ファンのエンゲージメント拡大、マーケティング業務効率化などに寄与するテクノロジーやサービスの導入を支援します。スタジアムからアプリまで、デジタルの力で「推し活」を滑らかにします。',
      longDescription: 'デジタルテクノロジーは、ファンとコンテンツの距離を劇的に縮める可能性を秘めています。私たちは、単なるシステムの導入にとどまらず、ユーザー体験（UX）を最優先に考えたDXを提案します。スタジアムでのスマート体験から、日常的なファンアプリの活用まで、オフラインとオンラインをシームレスに繋ぎ、運営の効率化とファンの満足度向上を同時に実現します。',
      image: `${ASSETS_BASE_URL}/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200`, 
      features: [
        'ファンデータを一元管理し、個別に最適化されたアプローチを可能にする CRM システム導入支援',
        'ファン同士やアーティストと繋がるファンコミュニケーションプラットフォームの選定と導入',
        'スタジアム・アリーナ・各施設における次世代型 DX 体験（キャッシュレス、モバイルオーダー等）の構築支援',
        'データ分析基盤の構築によるマーケティング・意思決定の高速化',
        '最新の Web3・NFT 技術を活用した新しいファン・リレーションシップの設計'
      ]
    },
    {
      id: 'education',
      title: 'Seminar & Education',
      jpTitle: 'セミナー・教育',
      description: 'B to C領域における豊富な事業経験やマーケティングに関する知見を活かし、業界を支える高度なビジネス力と専門性を伝えます。理論だけでなく、現場で活きる実践知を共有します。',
      longDescription: '次世代のスポーツ・エンタメ業界を担う人材を育成することは、業界全体の底上げに繋がります。私たちは、現役のプロフェッショナルとして培ってきた最新のマーケティング手法やビジネスの「勘所」を、大学の講義や企業研修を通じて惜しみなく提供します。単なる理論の解説ではなく、実際の成功・失敗事例を交えた実践的なカリキュラムが特徴です。',
      image: `${ASSETS_BASE_URL}/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1200`, 
      features: [
        '大学の経営学部やスポーツビジネス学科、各種セミナーでのマーケティング講義',
        '企業・団体向け：実務に直結する課題解決型ワークショップの開催',
        '社内マーケティング人材を自律させるための育成計画立案とメンタリング',
        'ファン心理や「推し活」文化をビジネスに活かすための独自セミナー',
        '業界最新トレンド（海外事例、テクノロジー動向）の解説・共有会'
      ]
    }
  ],

  portfolio: [
    {
      title: 'Pro Sports Marketing Strategy',
      jpTitle: 'プロスポーツ団体への包括的マーケティング支援',
      category: 'Marketing Support',
      description: '戦略立案からファンデータ基盤構築、リアルイベント、コミュニケーション制作までを統合。ファンLTVとエンゲージメントを最大化するマーケティング設計を実現しました。',
      image: `${ASSETS_BASE_URL}/photo-1504450758481-7338eba7524a?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Next-Gen Stadium DX',
      jpTitle: 'スタジアム・アリーナのDX化推進',
      category: 'Digital Transformation',
      description: 'AIカメラや高精度センサーを活用した人流・属性分析を導入。運営の効率化と、没入感の高いスマートな観戦エクスペリエンスを同時に実現しています。',
      image: `${ASSETS_BASE_URL}/photo-1522708323590-d248b6ddc2bb?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Food Logistics Marketing Education',
      jpTitle: '食品・食材宅配業界向けマーケティング教育',
      category: 'Seminar & Education',
      description: '組織階層別の専門講座を通じ、マーケティング志向型組織への転換を強力に支援。ブランディング再構築から広告運用改善まで、実務に即した伴走支援を行いました。',
      image: `${ASSETS_BASE_URL}/photo-1586762524444-80cd0020a59a?auto=format&fit=crop&q=80&w=800`
    },
    {
      title: 'Oshikatsu Infrastructure Dev',
      jpTitle: '「推し活」支援インフラ・サービスの開発',
      category: 'Tech & Service Support',
      description: '応援広告プラットフォームや聖地巡礼促進アプリを企画・開発。ファンの熱量を可視化し、地域移動や新たな経済活動を創出する新しいファン文化の基盤を提供します。',
      image: `${ASSETS_BASE_URL}/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=800`
    }
  ],

  about: {
    quote: "熱狂を日常に、ワクワクを未来に。",
    title: "ファンと業界の「新しい関係」を作る",
    description1: "私たちは、スポーツ・エンタメが大好きな一人の「ファン」の視点を忘れません。推しを想うエネルギーが、テクノロジーによって正しく還元され、より良いエンタメ体験として戻ってくる。そんな循環を作ることが私たちの使命です。",
    description2: "コンサルティングは手段にすぎません。その先にある「最高の笑顔」のために、私たちはデジタルとリアルの架け橋となります。",
    image: `https://lh3.googleusercontent.com/d/1zvanthuFvEiY_gbQNRR40KjfUEaWgUUa`,
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
