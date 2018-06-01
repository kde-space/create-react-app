# Presentational and Container Components

There’s a simple pattern I find immensely useful when writing React applications. If you’ve been doing React for a while, you have probably already discovered it. This article explains it well, but I want to add a few more points.

Reactアプリケーションを書くときには非常に便利なパターンがあります。あなたがしばらくの間、Reactをやっていたら、すでにそれを発見したでしょう。この記事では説明していますが、いくつかの点を追加したいと思います。

You’ll find your components much easier to reuse and reason about if you divide them into two categories.

コンポーネントを再利用するのがはるかに簡単で、コンポーネントを2つのカテゴリに分けた場合、その理由が分かります。

I call them Container and Presentational components* but I also heard Fat and Skinny, Smart and Dumb, Stateful and Pure, Screens and Components, etc. These all are not exactly the same, but the core idea is similar.

私はそれらをコンテナとプレゼンテーションのコンポーネントと呼んでいます*しかし、私はまた脂肪とスキニー、スマートとダム、ステートフルと純粋な、画面とコンポーネントなどを聞いたこれらはすべて正確に同じではありませんが、コアのアイデアは似ています。

My presentational components:

- Are concerned with how things look.  
  物事がどのように見えるかに関係しています。
- May contain both presentational and container components** inside, and usually have some DOM markup and styles of their own.  
  プレゼンテーションコンポーネントとコンテナコンポーネントの両方を内部に含むことができ、通常は独自のDOMマークアップとスタイルを持っています。
- Often allow containment via this.props.children.  
  多くの場合、この.props.childrenを介して封じ込めることができます。
- Have no dependencies on the rest of the app, such as Flux actions or stores.  
  Fluxのアクションやストアなど、アプリの残りの部分に依存しないでください。
- Don’t specify how the data is loaded or mutated.  
  データのロード方法や変更方法は指定しないでください。
- Receive data and callbacks exclusively via props.  
  データとコールバックを専ら小道具を介して受信します。
- Rarely have their own state (when they do, it’s UI state rather than data).  
  まれに独自の状態を持つことができます（そうしたときは、データではなくUIの状態です）。
- Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.  
  状態、ライフサイクルフック、またはパフォーマンスの最適化が必要な場合を除き、機能コンポーネントとして記述されています。
- Examples: Page, Sidebar, Story, UserInfo, List.  
  例：ページ、サイドバー、ストーリー、UserInfo、リスト

