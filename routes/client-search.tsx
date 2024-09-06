export default function ClientSearchPage() {
    return (
        <>
            {/* Helmetを使用して<meta>や<title>を設定するのが一般的 */}
            {/* Helmetはインストールが必要: npm install react-helmet */}
            {/* import { Helmet } from 'react-helmet'; */}
            <head>
                <title>顧客情報 検索・</title>
                <link
                    rel="client-search"
                    type="text/css"
                    href="/client-search.css"
                />
            </head>

            <div className="contact-form-container">
                <h2>総合問い合わせフォーム</h2>
                <form action="/submit_inquiry" method="POST">
                    {/* 顧客情報 */}
                    <div className="section">
                        <h3>顧客情報</h3>
                        <div className="form-group">
                            <label htmlFor="customer-id">顧客ID:</label>
                            <input
                                type="text"
                                id="customer-id"
                                name="customer_id"
                                required
                                placeholder="顧客IDを入力"
                            />
                        </div>

                       
                    </div>
                    {/* 問い合わせタイプ */}
                    <div className="section">
                        <h3>問い合わせタイプ</h3>
                        <div className="form-group">
                            <label>
                                <input
                                    type="radio"
                                    name="inquiry_type"
                                    value="依頼"
                                    required
                                />{" "}
                                依頼
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="inquiry_type"
                                    value="問い合わせ"
                                />{" "}
                                問い合わせ
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="inquiry_type"
                                    value="サポート"
                                />{" "}
                                サポート
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="inquiry_type"
                                    value="クレーム"
                                />{" "}
                                クレーム
                            </label>
                            <label>
                                <input
                                    type="radio"
                                    name="inquiry_type"
                                    value="その他"
                                />{" "}
                                その他
                            </label>
                        </div>
                    </div>

                   

                    {/* 送信ボタン */}
                    <div className="form-group">
                        <button type="submit">送信</button>
                    </div>
                </form>
            </div>
        </>
    );
}
