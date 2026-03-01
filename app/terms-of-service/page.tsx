import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約 | Anvia",
  description: "株式会社Anviaの利用規約です。",
};

const sections = [
  {
    title: "第1条（適用範囲）",
    content: `本利用規約（以下「本規約」といいます）は、株式会社Anvia（以下「当社」といいます）が運営するウェブサイト（https://anvia.co.jp、以下「本サイト」といいます）および当社が提供する一切のサービス（以下「本サービス」といいます）の利用に関して、利用者と当社との間の権利義務関係を定めるものです。

本サービスをご利用になる場合、本規約に同意されたものとみなします。本規約に同意いただけない場合は、本サービスのご利用をお控えください。`,
  },
  {
    title: "第2条（定義）",
    content: `本規約において使用する用語の定義は、以下のとおりとします。

「利用者」：本サービスを利用するすべての方（個人・法人を問わない）
「コンテンツ」：本サイト上に掲載されている文章、画像、動画、ロゴ、デザイン等のすべての情報
「知的財産権」：著作権、特許権、実用新案権、商標権、意匠権その他一切の知的財産権`,
  },
  {
    title: "第3条（サービスの変更・停止・終了）",
    content: `当社は、以下の場合において、事前の予告なく本サービスの全部または一部を変更、停止または終了することができるものとします。

・システムの保守、メンテナンスを行う場合
・火災、停電、自然災害、その他不可抗力により本サービスの提供が困難な場合
・法令、規制の変更等により、本サービスの提供が困難または不適切になった場合
・その他、当社が本サービスの停止・終了が必要と判断した場合

当社は、本条に基づく本サービスの変更・停止・終了によって利用者に生じた損害について、一切の責任を負いません。`,
  },
  {
    title: "第4条（知的財産権）",
    content: `本サイトに掲載されているすべてのコンテンツ（文章、画像、ロゴ、デザイン、ソースコード等を含む）の知的財産権は、当社または正当な権限を有する第三者に帰属します。

利用者は、本規約において明示的に許諾された場合を除き、当社の事前の書面による許可なく、本サイトのコンテンツを複製、転載、改変、公衆送信、販売等の目的で使用することはできません。`,
  },
  {
    title: "第5条（禁止事項）",
    content: `利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。

・法令または公序良俗に反する行為
・当社または第三者の知的財産権、プライバシー権、名誉権その他の権利を侵害する行為
・当社または第三者を誹謗中傷する行為
・本サービスの運営を妨害または支障をきたす行為
・不正アクセス、ハッキング行為
・コンピューターウイルス等の有害プログラムを送信する行為
・スパム、フィッシングその他の迷惑行為
・本サービスを通じて不正な商業的勧誘を行う行為
・その他、当社が不適切と判断する行為`,
  },
  {
    title: "第6条（お問い合わせフォームの利用）",
    content: `本サイトのお問い合わせフォームは、ビジネスに関する正当なお問い合わせを目的として設置されています。以下の目的でのご利用はお断りしています。

・営業・売り込みを目的とした連絡
・個人情報の収集を目的とした送信
・自動送信ツール等を使用したフォームの送信
・その他不正な目的での使用

当社は、上記に該当すると判断した場合、返信を行わず、以降のアクセスを制限することができます。`,
  },
  {
    title: "第7条（免責事項）",
    content: `当社は、以下の事項について一切の責任を負いません。

・本サイトに掲載されている情報の正確性・完全性・最新性
・本サービスの利用により利用者に生じた損害（直接損害・間接損害・特別損害・逸失利益を含む）
・外部リンク先のウェブサイトの内容・サービス
・システム障害、通信回線の障害等による本サービスの利用不能

ただし、当社の故意または重過失による場合はこの限りではありません。`,
  },
  {
    title: "第8条（リンクについて）",
    content: `本サイトへのリンクは、営利・非営利を問わず原則として自由とします。ただし、当社の社会的信用を損なうと判断されるウェブサイトや、法令・公序良俗に反するウェブサイトからのリンクはお断りします。

本サイトは、第三者のウェブサイトへのリンクを含む場合があります。当社はリンク先のウェブサイトの内容について責任を負いません。`,
  },
  {
    title: "第9条（準拠法および管轄）",
    content: `本規約は日本法を準拠法とします。本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。`,
  },
  {
    title: "第10条（規約の変更）",
    content: `当社は、必要と判断した場合には、利用者への事前通知なく本規約を変更することがあります。変更後の規約は本サイトに掲載した時点から効力を生じます。利用者が変更後も本サービスを継続してご利用された場合、変更後の規約に同意されたものとみなします。`,
  },
  {
    title: "附則",
    content: `本規約は2025年12月1日より施行します。`,
  },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-10 pt-32 pb-24">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-secondary/50 mb-12 jp-text">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>›</span>
          <span>利用規約</span>
        </div>

        {/* Title */}
        <h1
          className="text-4xl md:text-5xl font-bold text-accent mb-6 jp-text"
          style={{ fontFamily: "DM Serif Display, Georgia, serif", letterSpacing: "-0.02em" }}
        >
          利用規約
        </h1>
        <p className="text-secondary text-sm jp-text mb-16">
          制定日：2025年12月1日
          <br />
          最終更新日：2025年12月1日
        </p>

        {/* Intro */}
        <div className="mb-16 p-6 bg-surface rounded-sm">
          <p className="text-secondary text-sm leading-relaxed jp-text">
            本利用規約をよくお読みいただき、内容をご確認の上、本サービスをご利用ください。本サービスを利用された場合、本規約に同意されたものとみなします。
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
