package jp.te4a.spring.boot.mybootapp14;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

 /* ～アーキテクチャ周りの話～
  * サーバ3層アーキテクチャ(サーバの分割: Web-App-DB)
  * アプリ3層アーキテクチャ(アプリの分割: プレゼンテーション層(表示), ビジネスロジック層(処理), データアクセス層(保存))
  * MVC(Model: アプリ内データと処理, View: 画面生成, Controller: 画面遷移制御)
  * Tomcatはサーバ3層アーキテクチャのAppの部分。
  * プレゼンテーション層はViewやControllerに該当し, ビジネスロジック層はModel等に該当するようだ。
  * データアクセス層はO/R(Object/RDB)マッピングのライブラリの中身などが該当するらしい。
  * この関係上, データアクセス層はあまり意識することがないため, MVCには該当部分がないようだ。
  */

 /* ～SpringBootFrameworkのDIの概念の話～
  * WebApp用の機能やライブラリを提供するフレームワーク。
  * 該当するアノテーションによってクラス/インスタンスをBeanとしてDIコンテナに登録/取得し, 疎結合にできる。
  * ApplicationContext: DIコンテナそのもの
  * @Controller, @RestController: MVCのController
  * @Service, @Repository, @Data等: MVCのModel
  * 使役関係: @Controller -> @Service -> @Repository -> @Data
  * @Controller: リクエスト/レスポンスの処理。
  * @Service: アプリ内の処理。
  * @Repository: アプリ内のDB操作。データをDBにCRUDする。
  * @Data: アプリ内のデータ。フィールド, getter/setter, コンストラクタを持つ。
  */

 /* ～SpringBootFrameworkのDIの機能の話～
  * SpringApplication.run: DIコンテナに登録したクラスがインスタンス化されてアプリ開始。
  * @Autowired: DIコンテナからインスタンスを取得。
  * 	フィールドインジェクション, セッターインジェクション, コンストラクタインジェクションの3つがあるが,
  * 	取得したインスタンスの変数をfinalにできたりするのでコンストラクタインジェクションが推奨されている。
  * @Controller: DIコンテナにクラスを登録, リクエスト/レスポンスを扱う機能を利用できるようになる。
  * @Service: DIコンテナにクラスを登録。
  * @Repository: DIコンテナにクラスを登録, DBアクセスの例外を投げられるようにする。
  * @Data: getter, setterを自動生成する。
  * @AllArgsConstructor: 引数全指定コンストラクタを自動生成する。
  * @NoArgsConstructor: 引数なしコンストラクタを自動生成する。
  */

/* ～SpringBootFrameworkのリクエスト/レスポンスの話～
 * メソッド内でURLの文字列を返す必要がある。
 * @RequestMapping("/path"): URL(ドキュメントルート)
 * @GetMapping/@PostMapping: 該当メソッドのURL(ドキュメントルート)
 * @GetMapping(path)/@PostMapping(path): 該当メソッドのURL(サブリソース)
 * @ModelAttribute: リクエストを処理するメソッドのたびにこのメソッドが呼ばれる
 */

/* ～SpringDataJPAの話～
 * @Table, @Entity(name = "tableName"): DBのテーブルと紐づけ
 * @Id: 主キー
 * @GeneratedValue: DB側のオートインクリメント
 * @Columns(strict = true/false): 列の制約(not null等)
 */

@SpringBootApplication
public class BookApplication {
	public static void main(String[] args) {
		SpringApplication.run(BookApplication.class, args);
	}
}
