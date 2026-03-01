import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookieポリシー | Anvia",
  description: "株式会社AnviaのCookieポリシーです。",
};

const sections = [
  {
    title: "第1条（Cookieとは）",
    content: `Cookieとは、ウェブサイトがお使いのコンピューターやスマートフォン等のデバイスのブラウザに保存する小さなテキストファイルです。Cookieには、ウェブサイトの設定、セッション情報、行動履歴等が記録されます。

Cookieは悪意のあるプログラムではなく、個人を直接特定する情報（氏名、住所等）を含むものではありません。しかし、Cookieを通じて収集されたデータが他のデータと組み合わされた場合には、間接的に個人を特定できる場合があります。`,
  },
  {
    title: "第2条（当社が使用するCookieの種類）",
    content: `当社のウェブサイトでは、以下の種類のCookieを使用することがあります。

【必須Cookie（Strictly Necessary Cookies）】
ウェブサイトが正常に機能するために不可欠なCookieです。これらのCookieなしでは、サービスの一部を提供できません。ユーザーの同意なく設定されますが、個人情報の収集を目的とするものではありません。

【機能Cookie（Functional Cookies）】
ユーザーが以前に設定した言語、地域設定等を記憶するためのCookieです。これらを拒否した場合、一部の機能が正常に動作しなくなる可能性があります。

【分析・計測Cookie（Analytics Cookies）】
ウェブサイトの利用状況を把握し、コンテンツ改善や利便性向上を目的として使用するCookieです。当社ではGoogle Analyticsを使用しており、匿名化された形でアクセス数、訪問ページ、滞在時間等の情報を収集します。

【マーケティングCookie（Marketing Cookies）】
現在、当社では広告目的のCookieは使用していません。将来的に使用する場合は、本ポリシーを更新します。`,
  },
  {
    title: "第3条（Google Analyticsの使用について）",
    content: `当社はウェブサイトのアクセス解析を目的として、Google LLC（以下「Google」）が提供するGoogle Analyticsを使用しています。

Google Analyticsは、Cookieを使用して以下の情報を収集します。
・ページの閲覧数およびセッション数
・訪問者の地域（都市・国レベル）
・使用デバイス、ブラウザ、OS
・参照元URL
・サイト内での行動パターン

当社はGoogle Analyticsにおいて、IPアドレスの匿名化（IPマスキング）を有効化しています。収集されたデータはGoogleのプライバシーポリシーに従い処理されます。詳細は以下をご参照ください。

Googleのプライバシーポリシー：https://policies.google.com/privacy
Google Analyticsの利用規約：https://marketingplatform.google.com/about/analytics/terms/jp/`,
  },
  {
    title: "第4条（Cookieの保存期間）",
    content: `Cookieの保存期間は種類によって異なります。

・セッションCookie：ブラウザを閉じると自動的に削除されます。
・永続的Cookie：有効期限が設定されており、デバイスに一定期間保存されます。Google Analyticsで使用されるCookieは最大2年間保存されます。

保存期間が経過したCookieは自動的に削除されます。`,
  },
  {
    title: "第5条（Cookieの無効化・オプトアウト方法）",
    content: `【ブラウザの設定からCookieを管理する方法】

お使いのブラウザの設定から、Cookieの受け入れを拒否したり、Cookieを削除したりすることができます。各ブラウザでの設定方法は以下をご参照ください。

・Google Chrome：設定 → プライバシーとセキュリティ → Cookieと他のサイトデータ
・Mozilla Firefox：設定 → プライバシーとセキュリティ → Cookieとサイトデータ
・Apple Safari：環境設定 → プライバシー → Cookieとウェブサイトのデータ
・Microsoft Edge：設定 → Cookieとサイトのアクセス許可

なお、Cookieを無効化した場合、本サイトの一部機能が正常に動作しない場合がありますのでご了承ください。

【Google Analyticsのオプトアウト】

Google Analyticsによるデータ収集を無効化したい場合は、Google Analytics オプトアウトアドオン（ブラウザプラグイン）をご利用ください。

オプトアウトアドオンのダウンロード：https://tools.google.com/dlpage/gaoptout

【Do Not Track（DNT）】

お使いのブラウザでDo Not Track機能を有効にすることで、一部のトラッキングを制限することができます。ただし、すべてのウェブサイトがDNT信号に対応しているわけではありません。`,
  },
  {
    title: "第6条（第三者によるCookieの使用）",
    content: `本サイトには、Google Analytics以外の第三者サービスへのリンクが含まれる場合があります。これらの第三者サービスは、それぞれ独自のCookieポリシーおよびプライバシーポリシーに基づいてCookieを設定・使用することがあります。当社は、第三者によるCookieの使用について責任を負いません。`,
  },
  {
    title: "第7条（ポリシーの変更）",
    content: `当社は、法令の改正、サービス内容の変更等に伴い、本Cookieポリシーを随時変更することがあります。変更後のポリシーは本ページに掲載した時点から効力を生じます。重要な変更を行う場合は、ウェブサイト上でお知らせします。`,
  },
  {
    title: "第8条（お問い合わせ）",
    content: `本CookieポリシーおよびCookieの取り扱いに関するご質問・ご不明点は、以下までお問い合わせください。

株式会社Anvia 個人情報管理担当
所在地：東京都渋谷区円山町5-5 Navi渋谷V3階
メールアドレス：privacy@anvia.co.jp`,
  },
];

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-secondary/50 mb-12 jp-text">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>›</span>
          <span>Cookieポリシー</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-accent mb-6 jp-text"
          style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
        >
          Cookieポリシー
        </h1>
        <p className="text-secondary text-sm jp-text mb-16">
          制定日：2025年12月1日
          <br />
          最終更新日：2025年12月1日
        </p>

        {/* Intro */}
        <div className="mb-16 p-6 bg-surface rounded-sm">
          <p className="text-secondary text-sm leading-relaxed jp-text">
            株式会社Anvia（以下「当社」といいます）は、当社が運営するウェブサイト（https://anvia.co.jp）において、ユーザーエクスペリエンスの向上およびサービス改善を目的としてCookieを使用しています。本CookieポリシーはCookieの種類、目的、管理方法について説明します。
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2
                className="text-lg font-bold text-accent mb-4 jp-text"
                style={{ fontFamily: "DM Serif Display, Georgia, serif" }}
              >
                {section.title}
              </h2>
              <div className="text-secondary text-sm leading-relaxed jp-text whitespace-pre-line">
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* Back */}
        <div className="mt-20 pt-10 border-t border-gray-100">
          <Link
            href="/"
            className="inline-flex items-center gap-3 text-sm text-secondary hover:text-primary transition-colors jp-text"
          >
            <span>←</span>
            <span>トップページへ戻る</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
