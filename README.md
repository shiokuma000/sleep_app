# 🌓 sleep_app – シンプル睡眠タイプ診断

🌏 言語切替: [日本語](README.md) | [English](README-en.md)

---

## 👩‍💻 使用技術
<p align="left">
  <img src="https://img.shields.io/badge/HTML-3A3A3A.svg?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS-3A3A3A.svg?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-3A3A3A.svg?style=for-the-badge&logoColor=white" />
  <img src="https://img.shields.io/badge/Python-1E1E1E.svg?style=for-the-badge&logo=python&logoColor=white" />
  <img src="https://img.shields.io/badge/Flask-1E1E1E.svg?style=for-the-badge&logo=flask&logoColor=white" />
  <img src="https://img.shields.io/badge/JSON-000000.svg?style=for-the-badge&logo=json&logoColor=white" />
  <img src="https://img.shields.io/badge/Git-000000.svg?style=for-the-badge&logo=git&logoColor=white" />
  <img src="https://img.shields.io/badge/GitHub-000000.svg?style=for-the-badge&logo=github&logoColor=white" />
</p>

---

## ✨ 概要

sleep_app は、質問に答えることで睡眠タイプと改善アドバイスを返す小さな診断アプリです。  
ユーザーの選択肢は Flask サーバーに JSON で送信され、集計結果が画面に表示されます。  

UIは淡く静かな雰囲気を意識し、操作に迷わない最小限の動線で構成しています。

---

## 🎯 主な特徴

| 機能 | 説明 |
|------|------|
| 🕯️ 質問ステップ形式 | 1問ずつ丁寧に進むシンプルUX |
| 📊 サーバー集計 | 選択内容を JSON で送信し結果を算出 |
| 📝 アドバイス表示 | タイプ別に短いコメントを返す |
| 🎨 落ち着いたUI | 静かな色調と操作のしやすさを重視 |

---

## ⚙️ セットアップ方法

- このアプリは以下の手順で遊んでいただけます

1. 任意のフォルダに移動してから、以下のコマンドを実行し、このリポジトリをクローンしてください。
  
  例: デスクトップに置きたい場合
  
  - `cd %USERPROFILE%\Desktop`

  クローンするコマンド（以下のコピーをお使いのgitに貼り付ければ実行可能です）
  
- `git clone https://github.com/shiokuma000/sleep_app.git 任意のフォルダ名`

2. 仮想環境の作成をお願いいたします。（こちらは任意ですが推奨です。）

- `python -m venv venv`

🖥 **macOS / Linux**

- `source venv/bin/activate`

🖥 **Windows (コマンドプロンプトの場合)**

- `venv\Scripts\activate.bat`

🖥 **Windows (PowerShellの場合)**

- `.\venv\Scripts\Activate.ps1`


3. 必要パッケージをインストールしてください。
- `pip install -r requirements.txt`

4. コマンドライン等でアプリを起動してください。

- ※コマンドを打つ前に、必ずこのフォルダがある場所にフォルダに移動してください
  cd 該当フォルダ名
  
- `python app.py`

- ターミナルに以下の表示が出たらアクセス可能です
- `* Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)`


5. 以下をコピーし、ブラウザでアクセスしてください。
- `http://127.0.0.1:5000`

6. 診断で遊んでみてください！


---

## 🚀 使い方の流れ

1. 睡眠時間（3〜11時間）を選びます。
2. 質問が 1 つずつ表示されます。  
3. 「はい / いいえ」を選択しながら進んでください。
4. 「診断する」ボタンでサーバーへ　→　JSON送信  
5. Flask 側で以下を行います。
   - 回答の集計  
   - 睡眠傾向の分析  
   - アドバイス作成  
6. 結果が JSON 形式で返却されます。
7. 画面に診断結果と小さなくまが表示されます。  
8. reset で最初に戻ります。  


---

## 🔧 技術的なポイント

| 項目 | 説明 |
|------|------|
| 🗄️ JSON通信 | フロントとサーバー間を軽量に繋ぐ |
| 🔍 バリデーション | 入力不備を避けるため簡易チェック |
| 🖥️ サーバー処理 | ルート `/check` で集計・判定 |
| 🎨 UI/UX | クリックしやすい大きめボタンと静かな配色 |

---

## 🔄 今後の改善予定

| 項目 | 説明 |
|------|------|
| 📈 結果の精度向上 | 質問内容・重み付けの調整 |
| 💾 データ保存 | 過去結果を記録できるようにする |
| 🎀 UI改善 | 夜の雰囲気を強めた柔らかいデザイン・くまのコメントの種類増加 |

---

## 📁 プロジェクト構成・画面遷移図

 - [🪄 プロジェクト構成](PROJECT.md)

- [🔍画面遷移図](docs/sleep.png)


---

## 💡ライセンスと著作権

- このプロジェクトは学習目的で作成したものであり、商用利用は想定しておりません。
- 各種ライブラリ・ツールのライセンスはそれぞれの作者に帰属します。

---


🌟 最終更新: 2025-11-25
