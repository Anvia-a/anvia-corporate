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
                        制定日: 2025年12月1日<br />
                        最終更新日: 2025年12月1日
                    </p>

                    <div className="legal-content">
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            株式会社Anvia（以下「当社」）は、サービス改善および利用状況分析のためにCookieを使用する場合があります。
                            本ポリシーはCookieの種類、利用目的、無効化方法について説明するものです。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>1. Cookieとは</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            Cookieは、ウェブサイト利用時にブラウザへ保存される小さなデータファイルです。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>2. 利用目的</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            サイトの利便性向上、アクセス解析、品質改善のために利用します。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>3. 第三者サービス</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            Google Analytics等の第三者サービスを利用する場合があります。詳細は各サービス提供者のポリシーをご確認ください。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>4. 無効化方法</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            ブラウザ設定によりCookieを無効化できます。ただし、一部機能が利用できなくなる場合があります。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>5. お問い合わせ窓口</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            株式会社Anvia<br />
                            東京都渋谷区神南1-5-5 Navi神南V 3F
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
