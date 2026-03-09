import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
    title: 'Privacy Policy | Anvia',
};

export default function PrivacyPolicy() {
    return (
        <>
            <Header />
            <main style={{ paddingTop: 'var(--nav-height)' }}>
                <div className="container" style={{ maxWidth: '800px', padding: '120px 32px' }}>
                    <h1 className="text-4xl" style={{ fontWeight: 700, marginBottom: '24px' }}>プライバシーポリシー</h1>
                    <p style={{ color: 'var(--color-gray-500)', marginBottom: '48px', fontSize: '0.9rem' }}>
                        制定日: 2025年12月1日<br />
                        最終更新日: 2025年12月1日
                    </p>

                    <div className="legal-content">
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            株式会社Anvia（以下「当社」）は、お客様の個人情報の保護を重要な責務と考えます。
                            本ポリシーは、当社が運営するウェブサイトにおける個人情報の取扱いを定めるものです。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>1. 取得する情報</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            お問い合わせ時に入力された氏名・メールアドレス・所属・連絡先・お問い合わせ内容等を取得する場合があります。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>2. 利用目的</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            お問い合わせ対応、サービス改善、重要なお知らせのために必要な範囲で利用します。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>3. 安全管理</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            不正アクセス、漏えい、改ざん、滅失等を防止するため、合理的な安全管理措置を講じます。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '36px', marginBottom: '14px' }}>4. 開示・訂正・削除等</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            ご本人からの請求があった場合は、法令に基づき適切に対応します。
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
