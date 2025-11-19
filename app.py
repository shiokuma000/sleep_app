from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# 質問リスト
questions = [
    "夜中に目が覚めることはあった？",
    "寝付きに時間はかかった？",
    "入眠前にスマホを30分以上見ちゃった？",
    "朝起きた時に疲れは残ってた？",
    "ストレスで寝つきにくかったりした？",
    "睡眠リズム、普段とずれてた？",
    "夢が多く眠りが浅い感じ？"
]

# 睡眠スコア計算関数
def calc_sleep_score(hours):
    hours = float(hours)
    if 7 <= hours <= 8:
        return 0
    elif 6 <= hours < 7 or 8 < hours <= 9:
        return 2
    else:
        return 4

@app.route("/")
def index():
    return render_template("index.html", questions=questions)

@app.route("/check", methods=["POST"])
def check():
    data = request.json
    hours = data.get("sleep_hours")
    answers = data.get("answers")  # yes/no のリスト

    sleep_score = calc_sleep_score(hours)
    yes_count = answers.count("yes")

    # Yes数をスコアに変換
    if yes_count <= 1:
        yes_score = 0
    elif yes_count <= 3:
        yes_score = 2
    elif yes_count <= 5:
        yes_score = 4
    else:
        yes_score = 6

    total = sleep_score + yes_score

    if total <= 2:
        status = "睡眠状態：良好"
        advice = "今日は頭が冴えてるみたい。いつも通りで大丈夫。"
    elif total <= 5:
        status = "睡眠状態：やや低下"
        advice = "午前はゆっくり、集中作業は午後からにできたらいいかも。"
    elif total <= 8:
        status = "睡眠状態：低め"
        advice = "無理のある作業は避けて、軽めの作業でやっていくといいかも。"
    else:
        status = "睡眠状態：かなり低下"
        advice = "本日はおやすみ優先。いつもがんばっててえらい。"

    return jsonify({
        "status": status,
        "advice": advice,
        "sleep_hours": hours,
        "yes_count": yes_count
    })

if __name__ == "__main__":
    app.run(debug=True)
