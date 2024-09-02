import { FreshContext } from "$fresh/server.ts";
import { Handlers } from "$fresh/server.ts";

interface User {
  name: string;
  password: string;
}

export const handler: Handlers<User> = {
  GET(_req: Request, ctx: FreshContext) {
    return ctx.render();
  },

  POST(_req: Request, ctx: FreshContext) {
    return ctx.render();
  }
}

export default function LoginPage() {
  const user: User = {name: "abc", password: "qwerty"};
  const { name, password } = user;

  return(<>
  <head>
    <title>ログイン</title>
    <link rel="stylesheet"type = "text/css" href="/index.css" />
  </head>
  <div class="login-box">
    <h2>ログイン</h2>
    <form id="loginForm" action="/" method="POST">
      <input type="text" name="name" value={name} placeholder="ユーザー名" required /><br />
      <input type="password" name="password" value={password} placeholder="パスワード" required /><br />
      <input type="submit" value="ログイン" />
    </form>
    <div class="forgot-password.html">
      <a href="forgot-password.html">パスワードを忘れた場合</a>
    </div>
  </div>
  </>)
  {/* うんこ 
    8/30 ２コマ分 松永 無断欠勤
               /\
              /  \
             /____\
          /\         /\
         /  \       /  \
        /____\     /____\
        */}
}
