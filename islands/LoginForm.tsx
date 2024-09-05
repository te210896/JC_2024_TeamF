import { useRef } from "preact/hooks";

export default function LoginForm() {
  // リレンダーする必要がないのでuseRef
  const name = useRef<string>("");
  const password = useRef<string>("");
  const user = { name: "test", password: "qwerty" };

  function submitHandler(e: SubmitEvent) {
    e.preventDefault();
    if (name.current === user.name && password.current === user.password) {
      console.log("success login!");
    }
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
          <input
            type="text"
            name="name"
            placeholder="ユーザー名"
            onChange={(e) => name.current = e.currentTarget.value}
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
