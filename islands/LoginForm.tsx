import { useRef } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function LoginForm() {
  // リレンダーする必要がないのでuseRef
  const id = useRef<string>("");
  const password = useRef<string>("");
  const hasError = useSignal<boolean>(false);

  async function submitHandler(e: SubmitEvent) {
    e.preventDefault();
    const response =
      (await fetch(`http://15.168.7.69:8000/api/users/${id.current}`))
        .json();
    response.then((user) => {
      if (password.current === user.password) {
        console.log("login ok");
        return new Response(null, {
          status: 307,
          statusText: "Temporary Redirect",
          headers: { "Location": "/client-search" },
        });
      } else {
        console.log("login ng");
        hasError.value = true;
      }
    }).catch((_e) => {
      console.log("user doesn't exists");
      hasError.value = true;
    });
  }

  return (
    <>
      <head>
        <title>ログイン</title>
        <link rel="stylesheet" type="text/css" href="/index.css" />
      </head>
      <div class="login-box">
        <h2>ログイン</h2>
        <form
          id="loginForm"
          action="/"
          method="GET"
          onSubmit={submitHandler}
        >
          {hasError.value && (
            <p class="text-red-500">IDかパスワードが間違っています。</p>
          )}
          <input
            type="text"
            name="name"
            placeholder="ID"
            onChange={(e) => id.current = e.currentTarget.value}
            required
          />
          <br />
          <input
            type="password"
            name="password"
            placeholder="パスワード"
            onChange={(e) => password.current = e.currentTarget.value}
            required
          />
          <br />
          <input type="submit" value="ログイン" />
        </form>
        <div class="forgot-password.html">
          <a href="forgot-password.html">パスワードを忘れた場合</a>
        </div>
      </div>
    </>
  );
}
