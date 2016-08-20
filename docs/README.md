## Guide


1 Create Login page

まずログインページを作ります。
`app/components/Login.jsx`

`Sample.jsx`の実装を参考にフォーム等を作ってみましょう。
公式サイトのこちら(https://facebook.github.io/react/docs/forms.html )により詳しい説明があるので参考にしてみてください。

送信ができるようになったらAPIを叩いて登録orログインします。
AJAX通信用のライブラリとしては下記があるので自由に選択してください。
[superagent](https://github.com/visionmedia/superagent)
[axios](https://github.com/mzabriskie/axios)
もちろん`JQuery.ajax()`でも構いません。

ユーザを登録orログインできたらメインであるダッシュボードページに遷移する必要があります。

ここではReact Routerをコンポーネントから呼び出すことで遷移させてみます。
React RouterではReactの[Context](https://facebook.github.io/react/docs/context.html)という機能によって、ルーターインスタンスをコンポーネントから取り出すことができます。

```
class Login extends React.Component {
	// コンポーネントで特定のコンテキストオブジェクトを取り出すための指定
	static contextTypes = {
		router: React.PropTypes.object.isRequired
	}

	// コンストラクタでcontextを受け取るようにする
	constructor(props, context) {
		...
	}

	anyMethod() {
		// this.context.router でルーターインスタンスを参照
		this.context.router.push({
			pathname: '/'
		})
	}
}
```

これで`/`に遷移できるので、あとは認証周りを設定し、メインページへの遷移を完了させます。

※ ちなみにここでの`router`の持つAPIは[ここ](https://github.com/reactjs/react-router/blob/master/docs/API.md#contextrouter)にのってます。

※ 認証等の複雑な仕組みは大変なので、たとえばセッションストレージ等を使って簡易的に判別するなどで良いです。

---

2 Create Dashboard page

ダッシュボードでも各部品ごとにどんどんコンポーネントを作っていきます。
最初のうち適当なモックデータを用意して、それをインポートしてデータ表示するところからはじめると進めやすいです。

```
// mockTweets.js
const mockTweets = [
	{ ... },
	{ ... }
]
export default mockTweets;
```

```
// someComponent.jsx
import mockTweets from 'mockTweets.js';
class someComponent {
	componentDidMount() {
		this.setState({
			tweets: mockTweets
		})
	}
}
```


配列データの表示などは`Sample.jsx`のコンポーネント実装を参考にしてください。

各部品をある程度作っていると、同じデータを何回も使っていることに気づくと思います。そこで各コンポーネントでそれぞれデータを取得するのではなく、上位のコンポーネントでデータを取得し、それを受け渡す形に変更します。

特にログイン中のユーザ情報などは色々なところで必要になるので、これもReact Routerのところで出たContextを使って、アプリケーション内の各コンポーネントで使えるようにします。

```
// 上位のコンポーネント(たとえば`Dashboard.jsx`)で
class Dashboard extends React.Component {
	// `childContextTypes`を指定することで子コンポーネントが下記コンテクストにアクセスできる
	static childContextTypes = {
		user: React.PropTypes.object
	}

	// 実際に子コンポーネントから参照されたときに返すコンテクストオブジェクト
	getChildContext() {
		return {
			user: user // 任意のユーザーオブジェクト
		}
	}
}
```

```
// 下位のコンポーネントで
class SubComponent extends React.Component {
	static contextTypes = {
		user: React.PropTypes.object
	}

	someMethod() {
		console.log(this.context.user) // { id: 1, ... }
	}
}

```
