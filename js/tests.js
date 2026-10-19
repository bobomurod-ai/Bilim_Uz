// Bilim_Uz - Testlar tizimi
window.BilimTests = (function () {
    let currentQuiz = null;
    let currentQuestionIndex = 0;
    let userAnswers = []; // { questionId, selectedOption, isCorrect }
    let timerInterval = null;
    let timeLeft = 30; // har bir savolga 30 soniya
    let isAnswered = false;

    // Testni boshlash
    function startQuiz(subjectId) {
        const questions = window.BilimData.quizzes[subjectId];
        if (!questions || questions.length === 0) {
            alert("Ushbu fandan hozircha testlar mavjud emas!");
            return;
        }

        const subject = window.BilimData.subjects.find(s => s.id === subjectId);

        currentQuiz = {
            subjectId: subjectId,
            subjectName: subject ? subject.name : subjectId,
            subjectColor: subject ? subject.color : 'from-blue-500 to-indigo-600',
            questions: JSON.parse(JSON.stringify(questions)) // klonlash
        };

        currentQuestionIndex = 0;
        userAnswers = [];
        isAnswered = false;

        // Test oynasini ko'rsatish
        document.getElementById('testSelectionView').classList.add('hidden');
        document.getElementById('testRunnerView').classList.remove('hidden');
        document.getElementById('testResultView').classList.add('hidden');

        // Fan nomi sarlavhasi
        document.getElementById('testRunnerSubjectName').textContent = currentQuiz.subjectName;

        renderCurrentQuestion();
    }

    // Savolni ekranga chiqarish
    function renderCurrentQuestion() {
        if (!currentQuiz) return;
        isAnswered = false;
        clearInterval(timerInterval);

        const q = currentQuiz.questions[currentQuestionIndex];
        const total = currentQuiz.questions.length;

        // Progress bar va raqamlar
        const progressPercent = ((currentQuestionIndex + 1) / total) * 100;
        document.getElementById('quizProgressBar').style.width = `${progressPercent}%`;
        document.getElementById('quizProgressText').textContent = `Savol: ${currentQuestionIndex + 1} / ${total}`;

        // Savol matni
        document.getElementById('quizQuestionText').textContent = q.question;

        // Izoh blokini yashirish
        const explanationBox = document.getElementById('quizExplanationBox');
        explanationBox.classList.add('hidden');
        explanationBox.innerHTML = '';

        // Variantlar ro'yxatini tozalab yangitdan chizish
        const optionsContainer = document.getElementById('quizOptionsContainer');
        optionsContainer.innerHTML = '';

        const letters = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, idx) => {
            const btn = document.createElement('div');
            btn.className = `quiz-option p-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-between text-slate-800 dark:text-slate-100 font-medium select-none shadow-sm transition`;
            btn.innerHTML = `
                <div class="flex items-center gap-3">
                    <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 font-bold flex items-center justify-center text-slate-600 dark:text-slate-300 text-sm">${letters[idx]}</span>
                    <span class="text-base">${opt}</span>
                </div>
                <span class="option-icon text-lg"></span>
            `;
            btn.onclick = () => handleSelectOption(idx);
            optionsContainer.appendChild(btn);
        });

        // Keyingi savol tugmasini yashirish
        document.getElementById('quizNextBtn').classList.add('hidden');

        // Taymerni boshlash
        timeLeft = 30;
        updateTimerDisplay();
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                handleTimeOut();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const timerEl = document.getElementById('quizTimer');
        if (!timerEl) return;
        timerEl.textContent = `${timeLeft}s`;
        if (timeLeft <= 5) {
            timerEl.className = "text-rose-500 font-bold animate-pulse text-base";
        } else {
            timerEl.className = "text-blue-600 dark:text-blue-400 font-bold text-base";
        }
    }

    // Vaqt tugaganda
    function handleTimeOut() {
        if (isAnswered) return;
        isAnswered = true;
        window.BilimAudio.playWrong();

        const q = currentQuiz.questions[currentQuestionIndex];
        userAnswers.push({
            questionId: q.id,
            questionText: q.question,
            selectedOption: -1,
            correctOption: q.correct,
            isCorrect: false,
            explanation: q.explanation
        });

        highlightAnswers(q.correct, -1);
        showExplanation("Vaqt tugadi! Ushbu savolga belgilangan vaqt ichida javob berilmadi.", q.explanation);
        showNextButton();
    }

    // Variant tanlanganda
    function handleSelectOption(selectedIndex) {
        if (isAnswered) return;
        isAnswered = true;
        clearInterval(timerInterval);

        const q = currentQuiz.questions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.correct;

        if (isCorrect) {
            window.BilimAudio.playCorrect();
        } else {
            window.BilimAudio.playWrong();
        }

        userAnswers.push({
            questionId: q.id,
            questionText: q.question,
            options: q.options,
            selectedOption: selectedIndex,
            correctOption: q.correct,
            isCorrect: isCorrect,
            explanation: q.explanation
        });

        highlightAnswers(q.correct, selectedIndex);
        showExplanation(
            isCorrect ? "Barakalla, to'g'ri javob!" : "Noto'g'ri javob tanlandi.",
            q.explanation
        );
        showNextButton();
    }

    // Javoblarni vizual ko'rsatish
    function highlightAnswers(correctIndex, selectedIndex) {
        const optionsContainer = document.getElementById('quizOptionsContainer');
        const buttons = optionsContainer.querySelectorAll('.quiz-option');

        buttons.forEach((btn, idx) => {
            btn.classList.add('disabled', 'pointer-events-none');
            const iconSpan = btn.querySelector('.option-icon');

            if (idx === correctIndex) {
                btn.classList.add('correct');
                iconSpan.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-500"></i>';
            } else if (idx === selectedIndex) {
                btn.classList.add('wrong');
                iconSpan.innerHTML = '<i class="fa-solid fa-circle-xmark text-rose-500"></i>';
            }
        });
    }

    // Izohni ko'rsatish
    function showExplanation(title, text) {
        const explanationBox = document.getElementById('quizExplanationBox');
        explanationBox.classList.remove('hidden');
        explanationBox.innerHTML = `
            <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm">
                <div class="font-semibold text-slate-800 dark:text-slate-100 flex items-center gap-2 mb-1">
                    <i class="fa-solid fa-circle-info text-blue-500"></i>
                    <span>${title}</span>
                </div>
                <p class="text-slate-600 dark:text-slate-300 leading-relaxed">${text}</p>
            </div>
        `;
    }

    function showNextButton() {
        const nextBtn = document.getElementById('quizNextBtn');
        const total = currentQuiz.questions.length;
        if (currentQuestionIndex < total - 1) {
            nextBtn.innerHTML = `<span>Keyingi savol</span> <i class="fa-solid fa-arrow-right"></i>`;
        } else {
            nextBtn.innerHTML = `<span>Natijalarni ko'rish</span> <i class="fa-solid fa-flag-checkered"></i>`;
        }
        nextBtn.classList.remove('hidden');
    }

    // Keyingi savolga o'tish
    function nextQuestion() {
        window.BilimAudio.playClick();
        if (currentQuestionIndex < currentQuiz.questions.length - 1) {
            currentQuestionIndex++;
            renderCurrentQuestion();
        } else {
            finishQuiz();
        }
    }

    // Testni yakunlash
    function finishQuiz() {
        clearInterval(timerInterval);
        document.getElementById('testRunnerView').classList.add('hidden');
        document.getElementById('testResultView').classList.remove('hidden');

        const total = currentQuiz.questions.length;
        const correctCount = userAnswers.filter(a => a.isCorrect).length;
        const wrongCount = total - correctCount;
        const scorePercent = Math.round((correctCount / total) * 100);
        const earnedXP = correctCount * 15;
        const earnedCoins = Math.floor(correctCount * 3);

        // Natijalar ko'rsatkichlari
        document.getElementById('resultSubjectTitle').textContent = currentQuiz.subjectName;
        document.getElementById('resultScorePercent').textContent = `${scorePercent}%`;
        document.getElementById('resultCorrectCount').textContent = correctCount;
        document.getElementById('resultWrongCount').textContent = wrongCount;
        document.getElementById('resultEarnedXP').textContent = `+${earnedXP} XP`;
        document.getElementById('resultEarnedCoins').textContent = `+${earnedCoins} tanga`;

        // Baholash xabari
        const feedbackEl = document.getElementById('resultFeedbackMessage');
        if (scorePercent >= 80) {
            feedbackEl.innerHTML = `<span class="text-emerald-500 font-bold">Ajoyib natija!</span> Siz mavzuni chuqur o'zlashtiribsiz!`;
            if (window.confetti) {
                window.confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
            }
            window.BilimAudio.playVictory();
        } else if (scorePercent >= 50) {
            feedbackEl.innerHTML = `<span class="text-amber-500 font-bold">Yaxshi harakat!</span> Xatolar ustida ishlab yana sinab ko'ring.`;
            window.BilimAudio.playCorrect();
        } else {
            feedbackEl.innerHTML = `<span class="text-rose-500 font-bold">Yana ozroq mashq qiling!</span> Darslik materiallarini takrorlab chiqishni tavsiya qilamiz.`;
            window.BilimAudio.playWrong();
        }

        // Tizimga saqlash
        if (window.BilimApp) {
            window.BilimApp.recordQuizResult({
                subjectId: currentQuiz.subjectId,
                subjectName: currentQuiz.subjectName,
                total: total,
                correct: correctCount,
                percent: scorePercent,
                xp: earnedXP,
                coins: earnedCoins,
                date: new Date().toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
            });
        }

        // Xatolar tahlilini tayyorlash
        renderQuizReview();
    }

    // Xatolarni ko'rib chiqish ro'yxati
    function renderQuizReview() {
        const reviewContainer = document.getElementById('quizReviewContainer');
        reviewContainer.innerHTML = '';

        userAnswers.forEach((ans, idx) => {
            const item = document.createElement('div');
            item.className = `p-4 rounded-xl border ${ans.isCorrect ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20' : 'border-rose-200 dark:border-rose-800 bg-rose-50/50 dark:bg-rose-950/20'} space-y-2`;
            
            const selectedText = (ans.options && ans.selectedOption >= 0) ? ans.options[ans.selectedOption] : "Javob berilmadi";
            const correctText = ans.options ? ans.options[ans.correctOption] : "";

            item.innerHTML = `
                <div class="flex items-start justify-between gap-3">
                    <span class="font-bold text-slate-800 dark:text-slate-100">${idx + 1}-savol: ${ans.questionText}</span>
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold ${ans.isCorrect ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300' : 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300'} whitespace-nowrap">
                        ${ans.isCorrect ? 'To\'g\'ri' : 'Xato'}
                    </span>
                </div>
                <div class="text-sm space-y-1">
                    <p class="${ans.isCorrect ? 'text-emerald-700 dark:text-emerald-300' : 'text-rose-600 dark:text-rose-400'}">
                        <strong>Sizning javobingiz:</strong> ${selectedText}
                    </p>
                    ${!ans.isCorrect ? `<p class="text-emerald-700 dark:text-emerald-400"><strong>To'g'ri javob:</strong> ${correctText}</p>` : ''}
                </div>
                <div class="text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200/60 dark:border-slate-700/60">
                    <strong>Tushuntirish:</strong> ${ans.explanation}
                </div>
            `;
            reviewContainer.appendChild(item);
        });
    }

    // Test tanlash oynasiga qaytish
    function backToSelection() {
        clearInterval(timerInterval);
        document.getElementById('testSelectionView').classList.remove('hidden');
        document.getElementById('testRunnerView').classList.add('hidden');
        document.getElementById('testResultView').classList.add('hidden');
        window.BilimAudio.playClick();
    }

    return {
        startQuiz: startQuiz,
        nextQuestion: nextQuestion,
        backToSelection: backToSelection
    };
})();
