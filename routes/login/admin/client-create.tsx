export default function ClientCreatePage() {
    return (
        <>
            <head>
                <title>顧客情報 登録</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/client-create.css"
                />
            </head>

            <div className="contact-form-container">
                <h2>情報登録</h2>
                <form action="/submit_inquiry" method="POST"></form>
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

                        <div className="form-group">
                            <label htmlFor="name">苗字(かな):</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="苗字(かな)を入力"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="name">名前(かな):</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                placeholder="名前(かなを入力)"
                            />
                        </div>

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
                            <label htmlFor="address">住所:</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                                placeholder="住所を入力"
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit">送信</button>
                    </div>
                
            </div>  
        </>
    );
}
