import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー | Anvia",
  description: "株式会社Anviaのプライバシーポリシーです。",
};

const sections = [
  {
    title: "第1条（個人情報の収集について）",
    content: `株式会社Anvia（以下「当社」といいます）は、お問い合わせフォームの利用、サービスのお申し込み、その他当社との取引において、以下の個人情報を収集することがあります。

・氏名
・メールアドレス
・電話番号（任意）
・お問い合わせ内容
・ウェブサイトのアクセスログ（IPアドレス、ブラウザ情報、アクセス日時等）
・Cookieおよび類似技術によって取得される情報

当社は、個人情報保護法その他関連法令に従い、適法かつ公正な手段によって個人情報を収集します。`,
  },
  {
    title: "第2条（個人情報の利用目的）",
    content: `当社は、収集した個人情報を以下の目的のために利用します。

・お問い合わせへの対応および回答
・サービス提供およびサポートの実施
・契約の締結・履行・管理
・サービスの改善、新サービスの開発および品質向上
・統計データの作成（個人を特定できない形式に加工した上で利用）
・マーケティング分析およびウェブサイトの利便性向上
・法令上の義務の履行

当社は、上記に定める利用目的の範囲を超えて個人情報を利用することはありません。`,
  },
  {
    title: "第3条（個人情報の保管・管理）",
    content: `当社は、個人情報を正確かつ最新の状態に保つよう努め、不正アクセス・紛失・破損・改ざん・漏洩等を防止するための適切な技術的・組織的安全管理措置を講じます。

個人情報の保管期間は、利用目的に照らして必要な期間とします。お問い合わせに関連する情報は、対応完了後3年間保管し、その後速やかに削除または匿名化します。法令上の義務がある場合は、当該法令が定める期間保管します。`,
  },
  {
    title: "第4条（第三者への提供・共有）",
    content: `当社は、以下の場合を除き、ご本人の同意なく個人情報を第三者に提供しません。

・法令に基づく場合
・人の生命、身体または財産の保護のために必要な場合
・公衆衛生の向上または児童の健全な育成の推進のために特に必要な場合
・国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合

なお、当社は業務委託先に対して必要な範囲で個人情報を提供する場合がありますが、その際は適切な管理監督を行います。`,
  },
  {
    title: "第5条（第三者ツールおよびサービスの利用）",
    content: `当社のウェブサイトでは、サービスの改善・分析を目的として以下のような第三者ツール・サービスを利用する場合があります。

・Google Analytics（アクセス解析）：ウェブサイトの利用状況を分析するために使用します。Google Analyticsは匿名化されたデータを収集します。詳細はGoogleのプライバシーポリシーをご参照ください。
・Vercel（ホスティング）：当社ウェブサイトのインフラを提供しています。

これらの第三者サービスは、それぞれ独自のプライバシーポリシーに基づいてデータを処理します。当社はこれらの第三者サービスによるデータ処理について責任を負いません。`,
  },
  {
    title: "第6条（Cookieの使用について）",
    content: `当社のウェブサイトでは、ユーザーエクスペリエンスの向上を目的としてCookieを使用することがあります。Cookieとは、ウェブサイトがお使いのブラウザに送信する小さなテキストファイルです。

当社が使用するCookieの種類：
・必須Cookie：ウェブサイトの基本的な機能を提供するために必要なCookie
・分析Cookie：サイトの利用状況を理解するためのCookie（Google Analytics等）
・機能Cookie：ユーザーの設定や言語を記憶するためのCookie

Cookieの使用を拒否する場合は、ブラウザの設定からCookieを無効化することができます。ただし、Cookieを無効化した場合、ウェブサイトの一部機能が正常に動作しない場合があります。`,
  },
  {
    title: "第7条（アクセス解析ツールのオプトアウト）",
    content: `当社のウェブサイトではGoogle Analyticsを使用しています。Google Analyticsによるデータ収集を希望されない場合は、Google Analytics オプトアウトアドオン（https://tools.google.com/dlpage/gaoptout）をご利用ください。

また、ブラウザのDo Not Track機能を有効にすることで、一部の追跡を制限することができます。`,
  },
  {
    title: "第8条（個人情報の開示・訂正・削除等）",
    content: `ご本人から自己の個人情報の開示、訂正、削除または利用停止のご要請があった場合、当社は合理的な期間内に対応いたします。ご要請の際は、本ポリシー末尾に記載の連絡先まで書面またはメールにてお申し出ください。

なお、法令に基づき開示できない場合や、開示によって第三者の権利利益が侵害されるおそれがある場合は、開示をお断りする場合があります。その際は理由を添えてご通知いたします。`,
  },
  {
    title: "第9条（セキュリティ対策）",
    content: `当社は、個人情報への不正アクセス、個人情報の紛失・破損・改ざん・漏洩等を防止するため、SSL/TLSによる通信の暗号化、アクセス権限の制限、定期的なセキュリティ点検等の安全管理措置を実施しています。

ただし、インターネット上での情報送信に際し、完全なセキュリティを保証することはできません。当社は適切な措置を講じますが、セキュリティに関するリスクを完全に排除することは不可能であることをご了承ください。`,
  },
  {
    title: "第10条（プライバシーポリシーの変更）",
    content: `当社は、法令の改正、事業内容の変更等に伴い、本プライバシーポリシーを随時変更することがあります。重要な変更がある場合は、ウェブサイト上で告知します。変更後も引き続き当社のサービスをご利用された場合、変更後のプライバシーポリシーに同意されたものとみなします。`,
  },
  {
    title: "第11条（お問い合わせ窓口）",
    content: `個人情報の取り扱いに関するお問い合わせ、開示・訂正・削除等のご請求は、以下の窓口までお申し出ください。

株式会社Anvia 個人情報管理担当
所在地：東京都渋谷区円山町5-5 Navi渋谷V3階
メールアドレス：privacy@anvia.co.jp

当社は、ご請求内容を確認した上で、合理的な期間内に回答いたします。`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-[760px] mx-auto px-6 lg:px-8 pt-32 pb-24">
        <div className="flex items-center gap-2 text-xs text-slate-400 mb-12 jp">
          <Link href="/" className="hover:text-[#1E3A8A] transition-colors link-hover">Home</Link>
          <span>›</span>
          <span>プライバシーポリシー</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-[#1E3A8A] mb-6"
          style={{ background: "rgba(232,238,255,0.9)", border: "1px solid rgba(30,58,138,0.12)" }}>
          Legal
        </div>

        <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-4 jp" style={{ letterSpacing: "-0.025em" }}>
          プライバシーポリシー
        </h1>
        <p className="text-slate-400 text-sm jp mb-12">制定日：2025年12月1日　最終更新日：2025年12月1日</p>

        <div className="p-6 rounded-2xl mb-14" style={{ background: "#F5F7FB", border: "1px solid rgba(30,58,138,0.07)" }}>
          <p className="text-slate-500 text-sm leading-relaxed jp">
            株式会社Anvia（以下「当社」といいます）は、お客様の個人情報の保護を重要な責務と考えています。本プライバシーポリシーは、当社が運営するウェブサイト（https://anvia.co.jp）およびそれに付随するサービスにおける個人情報の取り扱いについて定めるものです。
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
