# デザインルール
## 共通
* パフォーマンスを絶対に低下させない

## api接続
### 初期ロード
#### OK
* [skeleton](https://mui.com/components/skeleton/)を使用する
#### NG
* [progress](https://mui.com/components/progress/)を使用する

### ボタン押下からのロード
#### OK
* [loadingButton](https://mui.com/components/buttons/#loading-button)を使用する
#### NG
* [loadingOverlay](https://mui.com/components/data-grid/components/#loading-overlay)を使用する

### セレクトボックスのロード
#### OK
* ページの初期ロード時に終了させる
#### NG
* [loadOnOpen](https://mui.com/components/autocomplete/#load-on-open)を使用する
  * ただし、初期ロードだけで選択項目の表示が対応できない場合は、使用OK

