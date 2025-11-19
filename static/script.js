const questions = document.querySelectorAll(".question");
let currentIndex = 0;
let answers = [];

function showQuestion(index) {
    questions.forEach((q, i) => {
        q.style.display = i === index ? "block" : "none";
    });
}

// 次へボタン作成
let nextBtn = document.getElementById("nextBtn");
if (!nextBtn) {
    nextBtn = document.createElement("button");
    nextBtn.textContent = "次へ";
    nextBtn.id = "nextBtn";
    nextBtn.classList.add("btns");
    document.querySelector(".btns").prepend(nextBtn);  // リセットボタンの左に配置
}

// 診断ボタンとリセットボタン取得
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");

// 初期状態
showQuestion(currentIndex);
checkBtn.style.display = "none"; // 診断ボタンは非表示

nextBtn.addEventListener("click", () => {
    const selected = document.querySelector(`input[name="q${currentIndex}"]:checked`);
    if (!selected) return alert("回答を選択してください");

    answers.push(selected.value);
    currentIndex++;

    if (currentIndex < questions.length) {
        showQuestion(currentIndex);
        // 最後の質問手前までは診断ボタン非表示
        checkBtn.style.display = "none";
        nextBtn.style.display = "inline-block";
    } else {
        // 最後の質問が終わったら「次へ」を消して「診断する」を表示
        nextBtn.style.display = "none";
        checkBtn.style.display = "inline-block";
    }
});

checkBtn.addEventListener("click", async () => {
    const sleep_hours = document.getElementById("sleepSelect").value;
    const res = await fetch("/check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sleep_hours, answers })
    });
    const data = await res.json();

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <div class="bear-container">
            <img src="/static/bear.jpg" alt="Bear" class="bear-img">
            <div class="bear-bubble">
                ${data.status}<br>
                ● 睡眠時間： ${data.sleep_hours} 時間<br>
                ● Yes の数： ${data.yes_count}<br><br>
                — アドバイス —<br>${data.advice}
            </div>
        </div>
    `;

    questions.forEach(q => q.style.display = "none");
    checkBtn.style.display = "none";
});

resetBtn.addEventListener("click", () => {
    // 質問と状態を初期化
    currentIndex = 0;
    answers = [];
    showQuestion(currentIndex);

    nextBtn.style.display = "inline-block";
    checkBtn.style.display = "none";
    document.getElementById("result").innerHTML = "";
    document.getElementById("sleepSelect").value = "7"; // デフォルト値
    document.querySelectorAll('input[type="radio"]').forEach(r => r.checked = false);
});
