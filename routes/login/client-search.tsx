import { Handlers, PageProps } from "$fresh/server.ts";
import { Client } from "./../../utils/Client.ts";

export const handler: Handlers = {
    GET(_req, ctx) {
        return ctx.render({
            lastNameHiragana: "",
            firstNameHiragana: "",
            tel: "",
            birthday: "",
            clients: [],
            hasError: false,
            isPost: false,
        });
    },
    async POST(req, ctx) {
        // サーバーサイドの検証ではCookieとRedirect
        const formData = await req.formData();
        const lastNameHiragana = String(formData.get("lastNameHiragana"));
        const firstNameHiragana = String(formData.get("firstNameHiragana"));
        const tel = String(formData.get("tel"));
        const birthday = String(formData.get("birthday"));
        let clients: Client[] = [];

        // 接続自体に失敗したらcatch, 顧客情報なしはthen
        const response = (await fetch(
            `${new URL(req.url).origin}/api/clients/list`,
        )).json();
        const hasError = await (response.then((newClients) => {
            clients = newClients;
            clients = clients.filter((client) =>
                new RegExp(lastNameHiragana === "" ? ".*" : lastNameHiragana)
                    .test(
                        client.lastNameHiragana,
                    )
            );
            clients = clients.filter((client) =>
                new RegExp(firstNameHiragana === "" ? ".*" : firstNameHiragana)
                    .test(
                        client.firstNameHiragana,
                    )
            );
            clients = clients.filter((client) =>
                new RegExp(tel === "" ? ".*" : tel)
                    .test(
                        client.tel,
                    )
            );
            clients = clients.filter((client) =>
                new RegExp(birthday === "" ? ".*" : birthday)
                    .test(
                        String(client.birthday),
                    )
            );
            // console.log(clients);
            return false;
        }).catch((_e) => true));
        // console.log(hasError);
        return hasError
            ? ctx.render({
                lastNameHiragana,
                firstNameHiragana,
                tel,
                birthday,
                clients,
                hasError,
                isPost: true,
            })
            : ctx.render({
                lastName: "",
                firstName: "",
                tel: "",
                birthday: "",
                clients,
                hasError,
                isPost: true,
            });
    },
};

export default function ClientSearchPage({ data }: PageProps) {
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
            <div class="flex flex-col">
                <div className="client-form-container">
                    <h2>顧客情報 検索</h2>
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
                    <form action="/login/client-search" method="POST">
                        <div className="section">
                            <div className="form-group">
                                <label htmlFor="name">苗字(かな):</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="lastNameHiragana"
                                    placeholder="苗字(かな)を入力"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">名前(かな):</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="firstNameHiragana"
                                    placeholder="名前(かな)を入力"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">電話番号:</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="tel"
                                    placeholder="電話番号を入力"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="birthday">誕生日:</label>
                                <input
                                    type="date"
                                    id="birthday"
                                    name="birthday"
                                />
                            </div>
                        </div>

                        {/* 送信ボタン */}
                        <div className="form-group">
                            <button type="submit">送信</button>
                        </div>
                    </form>
                </div>
                <ul>
                    <h2 class="font-bold">顧客情報 検索結果</h2>
                    <li class="flex flex-row flex-wrap *:p-2">
                        <p>顧客ID</p>
                        <p>苗字(かな)</p>
                        <p>氏名(かな)</p>
                        <p>苗字</p>
                        <p>氏名</p>
                        <p>電話番号</p>
                        <p>誕生日</p>
                        <p>住所</p>
                    </li>
                    {data.clients.map((client: Client) => (
                        <li class="flex flex-row flex-wrap *:p-2">
                            <p>{client.id}</p>
                            <p>{client.lastNameHiragana}</p>
                            <p>{client.firstNameHiragana}</p>
                            <p>{client.lastName}</p>
                            <p>{client.firstName}</p>
                            <p>{client.tel}</p>
                            <p>{client.birthday}</p>
                            <p>{client.address}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
