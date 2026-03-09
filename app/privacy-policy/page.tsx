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
                        制定日：2025年12月1日<br />
                        最終更新日：2025年12月1日
                    </p>

                    <div className="legal-content">
                        <p style={{ marginBottom: '32px', lineHeight: 1.8 }}>
                            株式会社Anvia（以下「当社」）は、お客様の個人情報の保護を重要な責務と考えます。本ポリシーは、当社が運営するウェブサイトにおける個人情報の取り扱いを定めるものです。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第1条（個人情報の収集）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            当社は、お問い合わせやサービス利用の際に、氏名、メールアドレス、電話番号、お問い合わせ内容、アクセスログ等の個人情報を収集することがあります。当社は個人情報保護法に従い、適法かつ公正な手段で収集します。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第2条（利用目的）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            収集した個人情報は、お問い合わせへの対応、サービスの提供・改善、統計データの作成（個人を特定できない形式）、法令上の義務の履行に利用します。上記の目的範囲を超えて利用することはありません。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第3条（第三者提供）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            当社は、法令に基づく場合、人の生命・身体・財産の保護に必要な場合を除き、ご本人の同意なく第三者に個人情報を提供しません。業務委託先に提供する場合は、適切な管理監督を行います。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第4条（安全管理）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            当社は、SSL/TLSによる暗号化、アクセス権限の制限、定期的なセキュリティ点検などの安全管理措置を実施します。ただし、インターネット上での情報送信において完全なセキュリティを保証することはできません。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第5条（開示・訂正・削除）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            ご本人から自己の個人情報の開示、訂正、削除または利用停止のご要請があった場合、合理的な期間内に対応いたします。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第6条（Cookieの使用）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            当社のウェブサイトでは、利便性向上のためCookieを使用することがあります。
                        </p>

                        <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginTop: '40px', marginBottom: '16px' }}>第7条（ポリシーの変更）</h3>
                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            当社は、法令の改正等により本ポリシーを随時変更することがあります。
                        </p>

                        <p style={{ marginBottom: '24px', lineHeight: 1.8 }}>
                            株式会社Anvia<br />
                            所在地：東京都渋谷区円山町5-5 Navi渋谷V 3階
                        </p>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

