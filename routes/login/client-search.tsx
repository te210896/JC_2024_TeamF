export default function ClientSearchPage() {
    return (
        <>
            <head>
                <title>顧客情報 検索</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/client-search.css"
                />
            </head>
            <div className="client-form-container">
                <h2>顧客情報検索</h2>
                <form action="/login/client-search" method="POST">
                    <div className="section">
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
