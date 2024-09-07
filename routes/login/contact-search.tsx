export default function ContactSearchPage() {
    return (
        <>
            <head>
                <title>問い合わせ情報 検索</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/contact-search.css"
                />
            </head>
            <div className="contact-form-container">
                <h2>総合問い合わせフォーム</h2>
                <form action="/submit_inquiry" method="POST">
                    {/* 顧客情報 */}
                    <div className="section">
                        <h3>顧客情報</h3>
                        
                        <div className="form-group">
                            <label htmlFor="name">氏名:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="氏名を入力"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">電話番号:</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                placeholder="電話番号を入力"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="history-date">日付:</label>
                            <input
                                type="date"
                                id="history-date"
                                name="history_date"
                                required
                            />
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
