import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Terms of Service | Anvia',
};

export default function TermsOfService() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: 'var(--nav-height)' }}>
                <div className="container" style={{ maxWidth: '800px', padding: '120px 32px' }}>
                    <h1 className="text-4xl" style={{ fontWeight: 700, marginBottom: '24px' }}>利用規約</h1>
                    <p style={{ color: 'var(--color-gray-500)', marginBottom: '48px', fontSize: '0.9rem' }}>
                        制定日：2025年12月1日<br />
                        最終更新日：2025年12月1日
                    </p>

                    <div className="legal-content">
                        <p style={{ marginBottom: '32px', lineHeight: 1.8 }}>
                            本利用規約をよくお読みいただき、内容をご確認の上、本サービスをご利用ください。本サービスを利用された場合、本規約に同意されたものとみなします。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第1条（適用範囲）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            本利用規約（以下「本規約」といいます）は、株式会社Anvia（以下「当社」といいます）が運営するウェブサイト（https://anvia.co.jp、以下「本サイト」といいます）および当社が提供する一切のサービス（以下「本サービス」といいます）の利用に関して、利用者と当社との間の権利義務関係を定めるものです。
                        </p>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            本サービスをご利用になる場合、本規約に同意されたものとみなします。本規約に同意いただけない場合は、本サービスのご利用をお控えください。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第2条（定義）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>本規約において使用する用語の定義は、以下のとおりとします。</p>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>「利用者」：本サービスを利用するすべての方（個人・法人を問わない）</li>
                            <li>「コンテンツ」：本サイト上に掲載されている文章、画像、動画、ロゴ、デザイン等のすべての情報</li>
                            <li>「知的財産権」：著作権、特許権、実用新案権、商標権、意匠権その他一切の知的財産権</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第3条（サービスの変更・停止・終了）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>当社は、以下の場合において、事前の予告なく本サービスの全部または一部を変更、停止または終了することができるものとします。</p>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>システムの保守、メンテナンスを行う場合</li>
                            <li>火災、停電、自然災害、その他不可抗力により本サービスの提供が困難な場合</li>
                            <li>法令、規制の変更等により、本サービスの提供が困難または不適切になった場合</li>
                            <li>その他、当社が本サービスの停止・終了が必要と判断した場合</li>
                        </ul>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>当社は、本条に基づく本サービスの変更・停止・終了によって利用者に生じた損害について、一切の責任を負いません。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第4条（知的財産権）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            本サイトに掲載されているすべてのコンテンツ（文章、画像、ロゴ、デザイン、ソースコード等を含む）の知的財産権は、当社または正当な権限を有する第三者に帰属します。
                        </p>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            利用者は、本規約において明示的に許諾された場合を除き、当社の事前の書面による許可なく、本サイトのコンテンツを複製、転載、改変、公衆送信、販売等の目的で使用することはできません。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第5条（禁止事項）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>利用者は、本サービスの利用にあたり、以下の行為を行ってはなりません。</p>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>法令または公序良俗に反する行為</li>
                            <li>当社または第三者の知的財産権、プライバシー権、名誉権その他の権利を侵害する行為</li>
                            <li>当社または第三者を誹謗中傷する行為</li>
                            <li>本サービスの運営を妨害または支障をきたす行為</li>
                            <li>不正アクセス、ハッキング行為</li>
                            <li>コンピューターウイルス等の有害プログラムを送信する行為</li>
                            <li>スパム、フィッシングその他の迷惑行為</li>
                            <li>本サービスを通じて不正な商業的勧誘を行う行為</li>
                            <li>その他、当社が不適切と判断する行為</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第6条（お問い合わせフォームの利用）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>本サイトのお問い合わせフォームは、ビジネスに関する正当なお問い合わせを目的として設置されています。以下の目的でのご利用はお断りしています。</p>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>営業・売り込みを目的とした連絡</li>
                            <li>個人情報の収集を目的とした送信</li>
                            <li>自動送信ツール等を使用したフォームの送信</li>
                            <li>その他不正な目的での使用</li>
                        </ul>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>当社は、上記に該当すると判断した場合、返信を行わず、以降のアクセスを制限することができます。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第7条（免責事項）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>当社は、以下の事項について一切の責任を負いません。</p>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>本サイトに掲載されている情報の正確性・完全性・最新性</li>
                            <li>本サービスの利用により利用者に生じた損害（直接損害・間接損害・特別損害・逸失利益を含む）</li>
                            <li>外部リンク先のウェブサイトの内容・サービス</li>
                            <li>システム障害、通信回線の障害等による本サービスの利用不能</li>
                        </ul>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>ただし、当社の故意または重過失による場合はこの限りではありません。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第8条（リンクについて）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            本サイトへのリンクは、営利・非営利を問わず原則として自由とします。ただし、当社の社会的信用を損なうと判断されるウェブサイトや、法令・公序良俗に反するウェブサイトからのリンクはお断りします。
                        </p>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            本サイトは、第三者のウェブサイトへのリンクを含む場合があります。当社はリンク先のウェブサイトの内容について責任を負いません。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第9条（準拠法および管轄）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            本規約は日本法を準拠法とします。本サービスに関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第10条（規約の変更）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            当社は、必要と判断した場合には、利用者への事前通知なく本規約を変更することがあります。変更後の規約は本サイトに掲載した時点から効力を生じます。利用者が変更後も本サービスを継続してご利用された場合、変更後の規約に同意されたものとみなします。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>附則</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>本規約は2025年12月1日より施行します。</p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
