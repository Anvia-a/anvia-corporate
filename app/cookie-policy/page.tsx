import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Cookie Policy | Anvia',
};

export default function CookiePolicy() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: 'var(--nav-height)' }}>
                <div className="container" style={{ maxWidth: '800px', padding: '120px 32px' }}>
                    <h1 className="text-4xl" style={{ fontWeight: 700, marginBottom: '24px' }}>Cookieポリシー</h1>
                    <p style={{ color: 'var(--color-gray-500)', marginBottom: '48px', fontSize: '0.9rem' }}>
                        制定日：2025年12月1日<br />
                        最終更新日：2025年12月1日
                    </p>

                    <div className="legal-content">
                        <p style={{ marginBottom: '32px', lineHeight: 1.8 }}>
                            株式会社Anvia（以下「当社」といいます）は、当社が運営するウェブサイト（https://anvia.co.jp）において、ユーザーエクスペリエンスの向上およびサービス改善を目的としてCookieを使用しています。本CookieポリシーはCookieの種類、目的、管理方法について説明します。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第1条（Cookieとは）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            Cookieとは、ウェブサイトがお使いのコンピューターやスマートフォン等のデバイスのブラウザに保存する小さなテキストファイルです。Cookieには、ウェブサイトの設定、セッション情報、行動履歴等が記録されます。
                        </p>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            Cookieは悪意のあるプログラムではなく、個人を直接特定する情報（氏名、住所等）を含むものではありません。しかし、Cookieを通じて収集されたデータが他のデータと組み合わされた場合には、間接的に個人を特定できる場合があります。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第2条（当社が使用するCookieの種類）</h3>
                        <p style={{ marginBottom: '16px', lineHeight: 1.8 }}><strong>【必須Cookie（Strictly Necessary Cookies）】</strong><br />ウェブサイトが正常に機能するために不可欠なCookieです。</p>
                        <p style={{ marginBottom: '16px', lineHeight: 1.8 }}><strong>【機能Cookie（Functional Cookies）】</strong><br />ユーザーが以前に設定した言語、地域設定等を記憶するためのCookieです。</p>
                        <p style={{ marginBottom: '16px', lineHeight: 1.8 }}><strong>【分析・計測Cookie（Analytics Cookies）】</strong><br />Google Analyticsを使用し、匿名化された形でアクセス数、訪問ページ、滞在時間等の情報を収集します。</p>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}><strong>【マーケティングCookie（Marketing Cookies）】</strong><br />現在、当社では広告目的のCookieは使用していません。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第3条（Google Analyticsの使用について）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>Google Analyticsは、Cookieを使用して以下の情報を収集します。</p>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>ページの閲覧数およびセッション数</li>
                            <li>訪問者の地域（都市・国レベル）</li>
                            <li>使用デバイス、ブラウザ、OS</li>
                            <li>参照元URL</li>
                            <li>サイト内での行動パターン</li>
                        </ul>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>当社はIPアドレスの匿名化（IPマスキング）を有効化しています。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第4条（Cookieの保存期間）</h3>
                        <ul style={{ paddingLeft: '24px', marginBottom: '24px', lineHeight: 1.8 }}>
                            <li>セッションCookie：ブラウザ終了時に削除</li>
                            <li>永続的Cookie：最大2年間保存</li>
                        </ul>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第5条（Cookieの無効化方法）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>各ブラウザ設定よりCookie管理が可能です。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第6条（第三者Cookie）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>Google Analytics以外の第三者サービスについて、当社は責任を負いません。</p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第7条（ポリシーの変更）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>本ポリシーは随時変更される場合があります。</p>

                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            株式会社Anvia 個人情報管理担当<br />
                            所在地：東京都渋谷区円山町5-5 Navi渋谷V 3階
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
