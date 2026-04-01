# Truth Social 日本語化 + 手動翻訳（Chrome拡張機能）

Truth Social のUIラベルをローカル辞書で日本語化し、投稿本文・コメント本文はDeepl APIかMicrosoft Translate APIを用いて翻訳する Manifest V3 対応の Chrome 拡張機能です。

# 使い方

このリポジトリをzipで丸ごとダウンロードして、Chromeのchrome://extensions/にてパッケージ化されていない拡張機能を読み込みで展開したフォルダを指定してください。
APIキーは自身で取得し、この拡張機能の設定画面で入力してください。
追加辞書（JSON）機能にて英語 → 日本語の辞書を自身で追加できます。
JSONオブジェクト形式での入力が必要です。
例は以下の通りです。
{
  "ReTruth": "リトゥルース",
  "ReTruths": "リトゥルース",
  "Truth": "トゥルース",
  "Truths": "トゥルース",
  "Groups": "グループ"
}


## License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

You are free to use, modify, and redistribute this software under the terms of the GPL-3.0.
See the LICENSE file for details.
