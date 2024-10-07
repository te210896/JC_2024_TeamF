import { Handlers, PageProps } from "$fresh/server.ts";
import { Contact } from "../../utils/Contact.ts";

export const handler: Handlers = {
    GET(_req, ctx) {
        return ctx.render({
            clientId: "",
            inquiryType: "",
            contacts: [],
            hasError: false,
            isPost: false,
        });
    },
    async POST(req, ctx) {
        // サーバーサイドの検証ではCookieとRedirect
        const formData = await req.formData();
        const clientId = String(formData.get("clientId"));
        const inquiryType = String(formData.get("inquiryType"));
        let contacts: Contact[] = [];

        // 接続自体に失敗したらcatch, 顧客情報なしはthen
        const response = (await fetch(
            `${new URL(req.url).origin}/api/contacts/list`,
        )).json();
        const hasError = await (response.then((newContacts) => {
            contacts = newContacts;
            // console.log(newContacts);
            // console.log("clientId", clientId === "" ? ".*" : clientId, "inquiryType", inquiryType === "null" ? ".*" : inquiryType);
            contacts = contacts.filter((contact) =>
                new RegExp(clientId === "" ? ".*" : clientId).test(
                    contact.clientId,
                )
            );
            contacts = contacts.filter((contact) =>
                new RegExp(inquiryType === "null" ? ".*" : inquiryType).test(
                    contact.inquiryType,
                )
            );
            return false;
        }).catch((_e) => true));
        // console.log(hasError);
        return hasError
            ? ctx.render({
                clientId,
                inquiryType,
                contacts,
                hasError,
                isPost: true,
            })
            : ctx.render({
                clientId: "",
                inquiryType: "",
                contacts,
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

            <div class="flex flex-col">
                <div className="contact-form-container">
                    <h2>問い合わせ情報 検索</h2>
                    <form action="/login/contact-search" method="POST">
                        <div className="section">
                            <h3>問い合わせ情報 検索</h3>
                            {data.isPost && (
                                <p
                                    class={data.hasError
                                        ? "text-red-500"
                                        : "text-green-500"}
                                >
                                    {data.hasError
                                        ? "使用できない文字が含まれています。"
                                        : "正常に検索できました。"}
                                </p>
                            )}
                            <div className="form-group">
                                <label htmlFor="customer-id">顧客ID:</label>
                                <input
                                    id="name"
                                    type="text"
                                    name="clientId"
                                    value={data.clientId}
                                    placeholder="顧客ID"
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
                                            checked={data.inquiryType ===
                                                "isClaim"}
                                        />{" "}
                                        クレーム
                                    </label>
                                    <label>
                                        <input
                                            type="radio"
                                            name="inquiryType"
                                            value="isEtc"
                                            checked={data.inquiryType ===
                                                "isEtc"}
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
                <ul>
                    <h2 class="font-bold">問い合わせ情報 検索結果</h2>
                    <li class="flex flex-row flex-wrap *:p-2">
                        <p>問い合わせID</p>
                        <p>問い合わせタイプ</p>
                        <p>問い合わせ年月日</p>
                        <p>問い合わせ内容</p>
                        <p>施工番号</p>
                        <p>部署</p>
                        <p>責任者</p>
                        <p>施工内容</p>
                        <p>顧客ID</p>
                    </li>
                    {data.contacts.map((contact: Contact) => (
                        <li class="flex flex-row flex-wrap *:p-2">
                            <p>{contact.id}</p>
                            <p>{contact.inquiryType}</p>
                            <p>{contact.contactDate}</p>
                            <p>{contact.contactDetails}</p>
                            <p>{contact.constructionNumber}</p>
                            <p>{contact.department}</p>
                            <p>{contact.responsiblePerson}</p>
                            <p>{contact.constructionDetails}</p>
                            <p>{contact.clientId}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
