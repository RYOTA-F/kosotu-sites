export const PROFILE = {
  TITLE: 'プロフィール',
  DESCRIPTION: `「高卒Devlog」をご覧くださりありがとうございます。
    当ブログを運営している、RYOTAと申します。
    当ページでは運営者である私の自己紹介を簡単にさせていただきます。`,
  ABOUT: {
    TITLE: 'RYOTAについて',
    CONTENT: `現在は都内の教育系ベンチャー企業でWeb系エンジニアとして働いております。
      経歴は下記の通りです。`,
    LABEL: '経歴',
    LIST: [
      '高校卒業',
      '大手重工業：NCプログラマー/オペレーター(5年半)',
      '大手人材系：新規開拓営業(3年半)',
      'SNSマーケ：Webエンジニア/カスタマーサポート(1年半)',
      'IT教育　　：Webエンジニア(1年)',
      'フリーランスエンジニア(現在)',
    ],
  },
  PURPOSE: {
    TITLE: '高卒Devlog(当ブログ)の目的',
    CONTENT: `当ブログは日々の開発を通じての学びや、技術的なアウトプットを目的としています。
      元ブルーカラー → 営業 → エンジニアと経験をしてきた中で感じたことや、キャリア観についても発信していこうと思います。`,
  },
  SKILL: {
    TITLE: '技術スタック',
    FRONT_END: {
      LABEL: 'フロントエンド',
      LIST: [
        'TypeScript',
        'React',
        'Next.js',
        'Vue.js',
        'Svelte',
        'Astro',
        'Electron',
      ],
    },
    BACK_END: {
      LABEL: 'バックエンド',
      LIST: [
        'TypeScript / Node.js',
        'Express / NestJS',
        'Ruby / Ruby on Rails',
        'Golang / Echo',
        'Python / Flask',
      ],
    },
    INFRA: {
      LABEL: 'インフラ',
      LIST: [
        'AWS',
        'VPC / Route53 / CloudFront',
        'Lambda / ECS / S3',
        'RDS / DynamoDB',
        'CloudWatch / EventBridge',
        'Cloudflare',
        'Vercel',
      ],
    },
  },
} as const
