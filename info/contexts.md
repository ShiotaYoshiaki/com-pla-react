# context
## 技術要素
* `useContext`の使用

### 選定理由

* それほど複雑なデータ構造は持たない
* 多くのcontextを使用する煩雑さが懸念されるが、適切な分割方法を行うことで、可読性・可用性・パフォーマンス性が担保できる

#### Redux

* Reduxを制御するほどの大規模なシステムではない
* Reduxを導入するプロジェクトは10,000,000円予算以上のシステムでないとコスパが合わない

#### Recoil

* 経験が少ない
* 個別最適化は非常に魅力的だが、useContextの恩恵と簡易さと比較しても、同等である
* 別パッケージを入れるよりかは、reactそのままの機能のほうが軽く運用できる

## 規約
1. パフォーマンス低下は絶対的に避ける
2. 可読性・可用性を重視する

## 管理方法
### 初期ページ時
* `localStorage`を使用する
* 全体で共通するロード処理は、`context/Initial.js`にて管理する
  * 初期ロードしたものは、長らく変わらないため、ここにまとめておく。



