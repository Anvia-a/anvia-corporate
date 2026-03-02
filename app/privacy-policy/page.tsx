import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "プライバシーポリシー | Anvia" };

const LegalLayout = ({ title, date, children }: { title: string; date: string; children: React.ReactNode }) => (
  <div className="min-h-screen bg-white">
    <div className="max-w-[760px] mx-auto px-6 lg:px-8 pt-32 pb-24">
      <div className="flex items-center gap-2 text-xs text-slate-400 mb-10 jp">
        <Link href="/" className="hover:text-[#1E3A8A] transition-colors">Home</Link>
        <span>›</span><span>{title}</span>
      </div>
      <div className="pill-tag">Legal</div>
      <h1 className="text-4xl md:text-5xl font-black text-[#0F172A] mb-3 jp" style={{ letterSpacing: "-0.025em" }}>
        {title}
      </h1>
      <p className="text-slate-400 text-xs jp mb-10">制定日：{date}　最終更新日：{date}</p>
      <div className="p-5 rounded-2xl mb-12 jp text-slate-500 text-sm leading-relaxed"
        style={{ background: "#F5F7FB", border: "1px solid #E6E8EB" }}>
        株式会社Anvia（以下「当社」）は、お客様の個人情報の保護を重要な責務と考えます。
        本ポリシーは、当社が運営するウェブサイトにおける個人情報の取り扱いを定めるものです。
      </div>
      <div className="space-y-8">{children}</div>
      <div className="mt-14 pt-8 border-t border-[#F5F7FB]">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-[#1E3A8A] transition-colors jp">
          ← トップページへ戻る
        </Link>
      </div>
    </div>
  </div>
);

const Sec = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="pb-8 border-b border-[#F5F7FB]">
    <h2 className="text-sm font-bold text-[#0F172A] mb-2 jp">{title}</h2>
    <div className="text-slate-500 text-sm leading-relaxed jp whitespace-pre-line">{children}</div>
  </div>
);

export default function Page() {
  return (
    <LegalLayout title="プライバシーポリシー" date="2025年12月1日">
      <Sec title="第1条（個人情報の収集）">
        当社は、お問い合わせやサービス利用の際に、氏名、メールアドレス、電話番号、お問い合わせ内容、アクセスログ等の個人情報を収集することがあります。
        当社は個人情報保護法に従い、適法かつ公正な手段で収集します。
      </Sec>
      <Sec title="第2条（利用目的）">
        収集した個人情報は、お問い合わせへの対応、サービスの提供・改善、統計データの作成（個人を特定できない形式）、法令上の義務の履行に利用します。
        上記の目的範囲を超えて利用することはありません。
      </Sec>
      <Sec title="第3条（第三者提供）">
        当社は、法令に基づく場合、人の生命・身体・財産の保護に必要な場合を除き、ご本人の同意なく第三者に個人情報を提供しません。
        業務委託先に提供する場合は、適切な管理監督を行います。
      </Sec>
      <Sec title="第4条（安全管理）">
        当社は、SSL/TLSによる暗号化、アクセス権限の制限、定期的なセキュリティ点検などの安全管理措置を実施します。
        ただし、インターネット上での情報送信において完全なセキュリティを保証することはできません。
      </Sec>
      <Sec title="第5条（開示・訂正・削除）">
        ご本人から自己の個人情報の開示、訂正、削除または利用停止のご要請があった場合、合理的な期間内に対応いたします。
        お問い合わせは下記窓口までお申し出ください。
      </Sec>
      <Sec title="第6条（Cookieの使用）">
        当社のウェブサイトでは、利便性向上のためCookieを使用することがあります。
        Cookieを無効化した場合、一部機能が正常に動作しない場合があります。
        詳細はCookieポリシーをご参照ください。
      </Sec>
      <Sec title="第7条（ポリシーの変更）">
        当社は、法令の改正等により本ポリシーを随時変更することがあります。
        変更後のポリシーは本サイトに掲載した時点から効力を生じます。
      </Sec>
      <Sec title="第8条（お問い合わせ）">
        {`株式会社Anvia 個人情報管理担当
所在地：東京都渋谷区円山町5-5 Navi渋谷V3階
Email：privacy@anvia.co.jp`}
      </Sec>
    </LegalLayout>
  );
}
