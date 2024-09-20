import { Handlers, PageProps } from "$fresh/server.ts";

export const handler: Handlers = {
    GET(_req, ctx) {
        return ctx.render({
            id: 0,
            inquiryType: "",
        });
    },
    async POST(req, ctx) {
        // サーバーサイドの検証ではCookieとRedirect
        const formData = await req.formData();
        const id = formData.get("id");
        const inquiryType = formData.get("inquiryType");

        // 接続自体に失敗したらcatch, 顧客情報なしはthen
        const response = (await fetch(
            `${new URL(req.url).origin}/api/clients`,
            {
                method: "POST",
                body: JSON.stringify({
                    id,
                    lastNameHiragana,
                    firstNameHiragana,
                    lastName,
                    firstName,
                    tel,
                    birthday,
                    address,
                }),
            },
        )).json();
        const hasError = await (response.then((_client) => false)
            .catch((_e) => true));
        console.log(hasError);
        return hasError
            ? ctx.render({
                lastNameHiragana,
                firstNameHiragana,
                lastName,
                firstName,
                tel,
                birthday,
                address,
                hasError,
                isPost: true,
            })
            : ctx.render({
                lastNameHiragana: "",
                firstNameHiragana: "",
                lastName: "",
                firstName: "",
                tel: "",
                birthday: "",
                address: "",
                hasError,
                isPost: true,
            });
    },
};

export default function ContactSearchPage({ data }: PageProps) {
    return (
        <>
            {/* Helmetを使用して<meta>や<title>を設定するのが一般的 */}
            {/* Helmetはインストールが必要: npm install react-helmet */}
            {/* import { Helmet } from 'react-helmet'; */}
            <head>
                <title>問い合わせ情報 検索</title>
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="/contact-search.css"
                />
            </head>

            <div className="contact-form-container">
                <h2>問い合わせ情報検索</h2>
                <form action="/login/contact-search" method="POST">
                    <div className="section">
                        <h3>問い合わせ情報</h3>
                        <div className="form-group">
                            <label htmlFor="customer-id">顧客ID:</label>
                            <input
                                id="name"
                                type="text"
                                name="id"
                                value={data.id}
                                placeholder="顧客ID"
                                required
                            />
                        </div>
                    </div>
                    {/* 問い合わせタイプ */}
                    <div className="section">
                        <h3>問い合わせタイプ</h3>
                        <div className="form-group">
                            <fieldset>
                                <label>
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="isRequest"
                                        checked={data.inquiryType ===
                                            "isRequest"}
                                    />{" "}
                                    依頼
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="isContact"
                                        checked={data.inquiryType ===
                                            "isContact"}
                                    />{" "}
                                    問い合わせ
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="isSupport"
                                        checked={data.inquiryType ===
                                            "isSupport"}
                                    />{" "}
                                    サポート
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="isClaim"
                                        checked={data.inquiryType === "isClaim"}
                                    />{" "}
                                    クレーム
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="inquiryType"
                                        value="isEtc"
                                        checked={data.inquiryType === "isEtc"}
                                    />{" "}
                                    その他
                                </label>
                            </fieldset>
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
