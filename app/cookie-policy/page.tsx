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

当社はGoogle AnalyticsにおいてIPアドレスの匿名化（IPマスキング）を有効化しています。収集されたデータはGoogleのプライバシーポリシーに従い処理されます。

Googleプライバシーポリシー：https://policies.google.com/privacy
Google Analytics利用規約：https://marketingplatform.google.com/about/analytics/terms/jp/`,
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

なお、Cookieを無効化した場合、本サイトの一部機能が正常に動作しない場合があります。

【Google Analyticsのオプトアウト】

Google Analytics オプトアウトアドオン：https://tools.google.com/dlpage/gaoptout`,
  },
  {
    title: "第6条（第三者によるCookieの使用）",
    content: `本サイトには、Google Analytics以外の第三者サービスへのリンクが含まれる場合があります。これらの第三者サービスは、それぞれ独自のCookieポリシーに基づいてCookieを設定・使用することがあります。当社は、第三者によるCookieの使用について責任を負いません。`,
  },
  {
    title: "第7条（ポリシーの変更）",
    content: `当社は、法令の改正、サービス内容の変更等に伴い、本Cookieポリシーを随時変更することがあります。変更後のポリシーは本ページに掲載した時点から効力を生じます。`,
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
      <div className="max-w-[760px] mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-12 jp">
          <Link href="/" className="hover:text-[#1E3A8A] transition-colors link-hover">Home</Link>
          <span>›</span>
          <span>Cookieポリシー</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
          style={{ background: "rgba(232,238,255,0.9)", border: "1px solid rgba(30,58,138,0.12)" }}>
          Legal
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4 jp" style={{ letterSpacing: "-0.025em" }}>
          Cookieポリシー
        </h1>
        <p className="text-slate-400 text-sm jp mb-12">制定日：2025年12月1日　最終更新日：2025年12月1日</p>

        <div className="p-6 rounded-2xl mb-14" style={{ background: "#F5F7FB", border: "1px solid rgba(30,58,138,0.07)" }}>
          <p className="text-slate-500 text-sm leading-relaxed jp">
            株式会社Anvia（以下「当社」といいます）は、当社が運営するウェブサイト（https://anvia.co.jp）において、ユーザーエクスペリエンスの向上およびサービス改善を目的としてCookieを使用しています。本CookieポリシーはCookieの種類、目的、管理方法について説明します。
          </p>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="pb-10 border-b border-[#F5F7FB]">
              <h2 className="text-base font-bold text-[#0F172A] mb-3 jp">{section.title}</h2>
              <div className="text-slate-500 text-sm leading-relaxed jp whitespace-pre-line">{section.content}</div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#F5F7FB]">
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1E3A8A] transition-colors jp">
            <span>←</span><span>トップページへ戻る</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
