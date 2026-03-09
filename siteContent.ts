
/**
 * 山坂ホライゾン - サイトコンテンツ管理ファイル
 */

// --- 画像配信元設定 ---
const ASSETS_BASE_URL = "https://images.unsplash.com"; 
// Google Driveの画像を表示するための安定したベースURL
const GOOGLE_DRIVE_BASE = "https://lh3.googleusercontent.com/d/";

export const siteContent = {
  brand: {
    name: "YAMASAKA",
    nameAccent: "HORIZON",
    description: "ファンの熱狂を価値に変える、\nファン中心のマーケティング企業。"
  },
  
  hero: {
    tag: "CONNECTING PASSION",
    titleLine1: "その「熱狂」を、",
    titleAccent: "価値",
    titleLine2: "に変える。",
    description: "ファンとビジネスの架け橋となり、\nファンの暮らしをもっと楽しく、もっと自由に。",
    image: `${ASSETS_BASE_URL}/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2000`
  },

  news: [
    {
      id: 'news-012',
      date: '2026.02.03',
      category: 'INFO',
      title: 'コーポレートサイトをリニューアルしました',
      type: 'Announcement',
      image: `${ASSETS_BASE_URL}/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&q=80&w=2000`,
      content: 'いつも株式会社ヤマサカホライゾンのウェブサイトをご覧いただき、誠にありがとうございます。\n\nこの度、より快適にサイトをご利用いただけるよう、コーポレートサイトのUI/UXを一部更新いたしました。\n\n引き続きよろしくお願い申し上げます。'
    },
    {
      id: 'news-014',
      date: '2026.02.01',
      category: 'INFO',
      title: 'Turing Japan株式会社と次世代チケットプラットフォームの開発に関する業務委託契約を締結しました',
      type: 'Announcement',
      image: `${GOOGLE_DRIVE_BASE}1Ge2JTjAqkUX5ZPH9M1noPzcMLYQIgRJG`,
      content: '2026年2月1日付で、Turing Japan株式会社と次世代チケットプラットフォームの開発に関する業務委託契約を締結いたしました。\n当社は、本開発においてこれまで培った知見を活かし、チケットの購入、発券、表示、入場などに至る一連のプロセスに関する設計や課題抽出・評価を行い、セキュリティの強化、ユーザー体験の向上、新たな価値創出を目指した支援を行います。'
    },
    {
      id: 'news-011',
      date: '2025.12.23',
      category: 'EVENT',
      title: '1月14日（水）「ひょうごオープンイノベーションチャレンジ2025〜スポーツテック×オープンイノベーション〜」に代表取締役社長の洞井が登壇します',
      type: 'Announcement',
      image: `${GOOGLE_DRIVE_BASE}1mSEtuqsm_ztiFmDQVrrydWUQvgC6-tFI`,
      content: '2026年1月14日（水） 17:30-20:00、起業プラザひょうごにて開催される「ひょうごオープンイノベーションチャレンジ2025〜スポーツテックxオープンイノベーション〜」に代表取締役社長の洞井知彦が登壇します。\n\nひょうごオープンイノベーションチャレンジは、兵庫県内企業とスタートアップ企業のオープンイノベーションを目的としたプログラムです。\n当日は、スポーツxオープンイノベーションの可能性を追求すべく、メーカー、チーム、ステークホルダーという多様な立場でスポーツ産業に貢献してきたゲスト登壇者を招き、スポーツビジネス独特の参入障壁やそれを乗り越えた際のイノベーションの爆発力について、ディスカッションを展開していきます。\n\n詳細のご確認および参加の申込は下記ページよりご確認ください。\nhttps://hyogo-oi-challenge20260114.peatix.com/?_fsi=OcprSFeT'
    },
    {
      id: 'news-010',
      date: '2025.12.17',
      category: 'INFO',
      title: 'THE DOJO - TOKYOSPORTSTECHSTUDIOのメンターに就任しました',
      type: 'Information',
      image: `${GOOGLE_DRIVE_BASE}1LutuIm86qqOPLiIlCzzwXh1DTz7oX-sO`,
      content: 'THE DOJO - TOKYOSPORTSTECHSTUDIO' + 'のメンターに代表取締役社長の洞井が就任しました。\n\nTOKYOSPORTSTECHSTUDIOは、東京というフィールドを土台にプロチーム、メーカー、専門家など多様なサポーターとともに仮説検証から社会実装までを一貫して支援します。\n\nなお洞井は、2026年3月5日（木） 13:00-15:00に、プロスポーツチームでサービス選定に携わった最前線の知見から、チームとのビジネスの進め方のポイントを学べる「現場最前線に学ぶ！プロスポーツチームとのビジネスの進め方」というセッションを行います。\n\n詳細のご確認および参加の申込は下記ページよりご確認ください。\nhttps://spot.creww.me/the-dojo-2026'
    },
    {
      id: 'news-009',
      date: '2025.09.22',
      category: 'INFO',
      title: '宝塚医療大学 観光学部にて非常勤講師としてスポーツツーリズムに関する講義を担当することになりました',
      type: 'Education',
      image: `${GOOGLE_DRIVE_BASE}1ymeWJOGXCIcLXDeK8I3DzgL5DxL-rVJm`,
      content: '2025年9月22日（月）より、代表取締役社長の洞井が宝塚医療大学 観光学部にて、非常勤講師としてスポーツツーリズムに関する講義を担当することになりました。'
    },
    {
      id: 'news-013',
      date: '2025.08.01',
      category: 'INFO',
      title: '福岡県大刀洗町とのアドバイザー契約を締結しました',
      type: 'Announcement',
      image: `${GOOGLE_DRIVE_BASE}1SuUapu-34ogUEXbniz63fIdfXTWTz9Pc`,
      content: '2025年8月、福岡県大刀洗町とのアドバイザー契約を締結しました。\n\n大刀洗町にある公共施設予約システムのオンライン化に向けて、当社は、現状の予約・運用フローの分析や、オンライン化に向けた設計の支援を通じて、生活者の利便性向上や業務の効率化を目指します。'
    },
    {
      id: 'news-008',
      date: '2025.07.07',
      category: 'EVENT',
      title: '「新たな応援のカタチ！スポーツ×ビジネスで共創を巻き起こそう」に代表取締役社長 洞井が登壇しました',
      type: 'Report',
      image: `${GOOGLE_DRIVE_BASE}1mDtjLLIikN3SncF5cBGlGef_a2jg4H5G`,
      content: '2025年7月7日（月）、大阪産業創造館にて開催された「新たな応援のカタチ！スポーツxビジネスで共創を巻きオペレーションを分析し、具体的な提案を行っていく予定です。'
    },
    {
      id: 'news-007',
      date: '2025.05.27',
      category: 'INFO',
      title: '摂南大学にて大阪ブルテオンと連携した特別講義を行いました',
      type: 'Education',
      image: `${GOOGLE_DRIVE_BASE}1Zi9W-5aCAdmUoGC7kjE-zUnOztTR4qSW`,
      content: '2025年5月27日（火）に代表取締役社長の洞井が摂南大学でのパナソニック パンサーズ連携プログラム（現：大阪ブルテオン連携プログラム）にて、「スポーツビジネスの概要」の特別講義を行いました。\n\n今後、学生たちによるブルテオンの試合観戦や会場での来場者アンケート調査などを通じて、顧客の消費動向やチームの課題を分析し、具体的な提案を行っていく予定です。'
    },
    {
      id: 'news-006',
      date: '2025.05.22',
      category: 'EVENT',
      title: '7月7日（月）「新たな応援のカタチ！スポーツ×ビジネスで共創を巻き起こそう」に代表取締役社長の洞井が登壇します',
      type: 'Announcement',
      image: `${GOOGLE_DRIVE_BASE}1ymeWJOGXCIcLXDeK8I3DzgL5DxL-rVJm`,
      content: '2025年7月7日（月）、大阪産業創造館17階 ルームABにて開催される「新たな応援のカタチ！スポーツxビジネスで共創を巻き起こそう」に代表取締役社長の洞井知彦がファシリテーターとして登壇します。\n\n本イベントでは、第一部にてスポーツを活用したビジネスに成功している企業が、トークセッションでリアルな視点を紹介。\nその後の第二部交流パートでは、トークセッションの登壇者も交え、「パートナー探し」「ビジネスのヒント・きっかけ探し」「情報交換」の場として、事業者同士で「スポーツxビジネス」について考え連携する場としてご活用いただけます。\n\n詳細のご確認および参加の申込は下記ページよりご確認ください。\nhttps://www.sansokan.jp/events/eve_detail.san?H_A_NO=46388'
    },
    {
      id: 'news-005',
      date: '2024.09.01',
      category: 'CASE',
      title: '西日本旅客鉄道株式会社と大規模施設管理DXパートナー契約を締結しました',
      type: 'Case Study',
      image: `${GOOGLE_DRIVE_BASE}1XOkAKOUfa9wuEOxqnQUWIP_2jc93xxt2`,
      content: '2024年9月1日（日）付で、西日本旅客鉄道株式会社との大規模施設管理DXパートナー戦略の具体化に向けたコンサルティング契約を締結いたしました。\n西日本旅客鉄道株式会社が持つケイパビリティを活用した大規模施設管理DXの実現を目指します。'
    },
    {
      id: 'news-004',
      date: '2024.05.07',
      category: 'INFO',
      title: '摂南大学にてパナソニック　パンサーズと連携した特別講義を行いました',
      type: 'Education',
      image: `${GOOGLE_DRIVE_BASE}1jkDJfrNrsylr_Sg2Trc4-WyrmL6BVWHJ`,
      content: '2024年5月7日（火）に代表取締役社長の洞井が摂南大学でのパナソニック パンサーズ連携プログラムにて、「スポーツビジネスの概要」の特別講義を行いました。'
    },
    {
      id: 'news-003',
      date: '2024.01.12',
      category: 'EVENT',
      title: '1月12日（金）「第3回 スポーツ・エンタメ交流会」を開催しました',
      type: 'Report',
      image: `${GOOGLE_DRIVE_BASE}1ymeWJOGXCIcLXDeK8I3DzgL5DxL-rVJm`,
      content: '2024年1月12日（金）に「第3回 スポーツ・エンタメ交流会」をβ本町橋にて開催しました。\n\n当日は、スポーツ団体関係者、スポーツ選手、スポーツビジネス、経営者、海外テック企業経営者、アジア野球振興財団理事、スポーツエージェント、大手企業スポーツテック部門責任者、大学教授など、スポーツ・エンタメビジネスに関わる多岐に渡る職種、専門分野、立場の方々にご参加いただき、これからのスポーツ・エンタメ界の更なる発展と可能性を議論する交流の場となりました。'
    },
    {
      id: 'news-002',
      date: '2023.11.25',
      category: 'EVENT',
      title: '11月25日（土）【ウェブ解析士会議2023in大阪】よっしゃ、やろか！Transformation！に代表取締役社長の洞井が登壇します',
      type: 'Announcement',
      image: `${GOOGLE_DRIVE_BASE}1f3ggFT2RIUWVwQeJ3kIu1Hlt-xBfPHFo`,
      content: '2023年11月25日（土）、グランフロントナレッジキャピタルにて開催される【ウェブ解析士会議2023in大阪】よっしゃ、やろか！Transformation！に代表取締役社長の洞井知彦が登壇します。\n\n詳細は下記ページよりご確認ください。\nhttps://www.waca.associates/jp/news/81406/'
    },
    {
      id: 'news-001',
      date: '2023.11.16',
      category: 'INFO',
      title: '大阪産業大学にて代表取締役社長 洞井が特別講義を行いました',
      type: 'Education',
      image: `${GOOGLE_DRIVE_BASE}1AsSGN3JF5IZajL-8wexj2-KCMcd526Xf`,
      content: '2023年11月16日（木）に大阪産業大学 経営学部 商学科の「サービス産業論」にて、代表取締役社長の洞井が特別講義を行いました。'
    }
  ],

  services: [
    {
      id: 'marketing',
      title: 'Marketing Support',
      jpTitle: 'マーケティング支援',
      description: 'お客様の事業を拡大するためのマーケティング戦略の策定、実行、効果測定まで包括して支援します。ファン一人ひとりの熱量をデータ化し、持続可能なビジネスモデルを構築します。',
      longDescription: 'スポーツやエンターテインメントにおいて, ファンの「熱狂」は最大の資産です. 私たちはその熱量を一過性のものにせず, 持続的なビジネス価値へと昇華させるための伴走型支援を行います. 市場調査からコンセプト設計, 具体的なファン獲得施策まで, 現場感覚とデータサイエンスを融合させたアプローチで, クライアントの事業成長を加速させます.',
      image: `${ASSETS_BASE_URL}/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200`, 
      features: [
        '市場・競合分析に基づく中長期マーケティング戦略の策定',
        'ファンコミュニティの設計と運営を通じたエンゲージメント向上',
        '広告・SNSなどを活用したコミュニケーション施策の立案・実行支援',
        'ブランドアイデンティティの再定義とリブランディング',
        'データを活用したチケット・物販収益の最大化支援',
        '各種イベント・プロモーションの企画・実行支援'
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
        'ファンデータを活用した CRM 基盤の要件定義と導入支援',
        'スタジアム・施設におけるDX化推進',
        'オフィシャルアプリ・WebサイトのUX/UI改善コンサルティング',
        '業務効率化を実現するITツールの導入・定着支援',
        '現場のオペレーションとデジタルを融合させるDXロードマップ策定'
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
        '大学、各種セミナーでのマーケティング講義',
        '企業・団体向け：実務に直結する課題解決型ワークショップの開催',
        '社内マーケティング人材を自律させるための育成計画立案 and メンタリング',
        'ファン心理や「ファンベース」の考え方をビジネスに活かすための独自セミナー',
        '業界最新トレンドの解説・共有会'
      ]
    }
  ],

  portfolio: [
    {
      title: 'Pro Sports Marketing Strategy',
      jpTitle: 'プロスポーツ団体への包括的マーケティング支援',
      category: 'Marketing Support',
      description: '戦略立案からファンデータ基盤構築、リアルイベント、コミュニケーション制作までを統合. ファンLTVとエンゲージメントを最大化するマーケティング設計を実現しました。',
      image: `${GOOGLE_DRIVE_BASE}1h8IilmfyPaAoM6Qh4vUuZ-u1UAL6Zxkt`
    },
    {
      title: 'Next-Gen Stadium DX',
      jpTitle: 'スタジアム・アリーナのDX化推進',
      category: 'Digital Transformation',
      description: 'AIカメラや高精度センサーを活用した人流-属性分析を導入。運営の効率化と、没入感の高いスマートな観戦エクスペリエンスを同時に実現しています。',
      image: `${GOOGLE_DRIVE_BASE}1sSE3Ikm3Da0DCZorPQ7gwwOLY0WLxaAU`
    },
    {
      title: 'Food Logistics Marketing Education',
      jpTitle: '食品・食材宅配業界向けマーケティング教育',
      category: 'Seminar & Education',
      description: '組織階層別の専門講座を通じ、マーケティング志向型組織への転換を強力に支援。ブランディング再構築から広告運用改善まで、実務に即した伴走支援を行いました。',
      image: `${GOOGLE_DRIVE_BASE}1e89aXB4EN4F65MiLRfBuHr6Ml9e_ItrF`
    },
    {
      title: 'Oshikatsu Infrastructure Dev',
      jpTitle: '「推し活」支援インフラ・サービスの開発',
      category: 'Tech & Service Support',
      description: '応援広告プラットフォームや聖地巡礼促進アプリを企画・開発。ファンの熱量を可視化し、地域移動や新たな経済活動を創出する新しいファン文化の基盤を提供します。',
      image: `${GOOGLE_DRIVE_BASE}1mZbxcRpLu_YloPqJmPSqwU7TuKpRJIsu`
    }
  ],

  about: {
    quote: "熱狂を日常に、ワクワクを未来に。",
    title: "ファンの熱量で\n世界を変える",
    description1: "私たちは、一人の「ファン」の視点を忘れません。「推す」ことのエネルギーが正しく還元され、より良い暮らし体験として戻ってくる。そんな循環を作ることが私たちの使命です。",
    description2: "私たちが支援したその先にある「最高の笑顔」のために、私たちはファンとビジネスの架け橋となります。",
    image: `${GOOGLE_DRIVE_BASE}1zvanthuFvEiY_gbQNRR40KjfUEaWgUUa`,
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
