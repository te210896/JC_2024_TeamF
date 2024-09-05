export default function Search2Page() {
    return (
        <>
            {/* Helmetを使用して<meta>や<title>を設定するのが一般的 */}
            {/* Helmetはインストールが必要: npm install react-helmet */}
            {/* import { Helmet } from 'react-helmet'; */}
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>総合問い合わせフォーム</title>
                <link rel="search2" type = "text/css" href="/search2.css" />
            </head> 

            <div className="contact-form-container">
                <h2>総合問い合わせフォーム</h2>
                <form action="/submit_inquiry" method="POST">
                    {/* 顧客情報 */}
                    <div className="section">
                        <h3>顧客情報</h3>
                        <div className="form-group">
                            <label htmlFor="customer-id">顧客ID:</label>
                            <input type="text" id="customer-id" name="customer_id" required placeholder="顧客IDを入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">氏名:</label>
                            <input type="text" id="name" name="name" required placeholder="氏名を入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">電話番号:</label>
                            <input type="tel" id="phone" name="phone" required placeholder="電話番号を入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">住所:</label>
                            <input type="text" id="address" name="address" required placeholder="住所を入力" />
                        </div>
                    </div>

                    {/* 問い合わせタイプ */}
                    <div className="section">
                        <h3>問い合わせタイプ</h3>
                        <div className="form-group">
                            <label>
                                <input type="radio" name="inquiry_type" value="依頼" required /> 依頼
                            </label>
                            <label>
                                <input type="radio" name="inquiry_type" value="問い合わせ" /> 問い合わせ
                            </label>
                            <label>
                                <input type="radio" name="inquiry_type" value="サポート" /> サポート
                            </label>
                            <label>
                                <input type="radio" name="inquiry_type" value="クレーム" /> クレーム
                            </label>
                            <label>
                                <input type="radio" name="inquiry_type" value="その他" /> その他
                            </label>
                        </div>
                    </div>

                    {/* 問い合わせ履歴 */}
                    <div className="section">
                        <h3>問い合わせ履歴</h3>
                        <div className="form-group">
                            <label htmlFor="history-classification">分類:</label>
                            <input type="text" id="history-classification" name="history_classification" required placeholder="分類を入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="history-date">日付:</label>
                            <input type="date" id="history-date" name="history_date" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="history-content">内容:</label>
                            <textarea id="history-content" name="history_content" required placeholder="内容を入力"></textarea>
                        </div>
                    </div>

                    {/* 施工履歴 */}
                    <div className="section">
                        <h3>施工履歴</h3>
                        <div className="form-group">
                            <label htmlFor="work-id">施工番号:</label>
                            <input type="text" id="work-id" name="work_id" required placeholder="施工番号を入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="department-name">部署名:</label>
                            <input type="text" id="department-name" name="department_name" required placeholder="部署名を入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="responsible-person">責任者:</label>
                            <input type="text" id="responsible-person" name="responsible_person" required placeholder="責任者を入力" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="work-content">施工内容:</label>
                            <textarea id="work-content" name="work_content" required placeholder="施工内容を入力"></textarea>
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
