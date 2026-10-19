// Bilim_Uz - Masalalar va boshqotirmalar moduli
window.BilimProblems = (function () {
    let activeFilter = 'all';
    let solvedProblems = JSON.parse(localStorage.getItem('bilim_solved_problems') || '[]');

    function init() {
        renderFilterTabs();
        renderProblemsList();
    }

    // Filtrlash tugmalari
    function renderFilterTabs() {
        const filterContainer = document.getElementById('problemsFilterContainer');
        if (!filterContainer) return;

        const filters = [
            { id: 'all', label: "Barchasi" },
            { id: 'matematika', label: "Matematika" },
            { id: 'ingliz_tili', label: "Ingliz tili" },
            { id: 'ona_tili', label: "Ona tili" },
            { id: 'tarix', label: "Tarix" }
        ];

        filterContainer.innerHTML = '';
        filters.forEach(f => {
            const btn = document.createElement('button');
            const isActive = activeFilter === f.id;
            btn.className = `px-4 py-2 rounded-xl text-sm font-semibold transition ${
                isActive 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
            }`;
            btn.textContent = f.label;
            btn.onclick = () => {
                activeFilter = f.id;
                window.BilimAudio.playClick();
                renderFilterTabs();
                renderProblemsList();
            };
            filterContainer.appendChild(btn);
        });
    }

    // Masalalar ro'yxatini chiqarish
    function renderProblemsList() {
        const container = document.getElementById('problemsCardsContainer');
        if (!container) return;

        let problems = window.BilimData.problems || [];
        if (activeFilter !== 'all') {
            problems = problems.filter(p => p.subject === activeFilter);
        }

        container.innerHTML = '';

        if (problems.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-12 text-slate-500">
                    <i class="fa-solid fa-folder-open text-4xl mb-3 opacity-40"></i>
                    <p>Ushbu bo'limda hozircha masalalar yo'q.</p>
                </div>
            `;
            return;
        }

        problems.forEach(p => {
            const isSolved = solvedProblems.includes(p.id);
            const card = document.createElement('div');
            card.className = `card-hover rounded-2xl p-6 bg-white dark:bg-slate-800 border ${
                isSolved ? 'border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/20' : 'border-slate-200 dark:border-slate-700'
            } shadow-sm flex flex-col justify-between`;

            // Qiyinlik ranglari
            let diffBadge = 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300';
            if (p.difficulty === 'O\'rta') diffBadge = 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300';
            if (p.difficulty === 'Qiyin') diffBadge = 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300';

            card.innerHTML = `
                <div>
                    <div class="flex items-center justify-between mb-3">
                        <span class="px-2.5 py-1 rounded-full text-xs font-semibold ${diffBadge}">
                            ${p.difficulty}
                        </span>
                        <div class="flex items-center gap-2">
                            <span class="text-xs font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2.5 py-1 rounded-full">
                                +${p.points} XP
                            </span>
                            ${isSolved ? '<span class="text-emerald-500 text-sm font-bold flex items-center gap-1"><i class="fa-solid fa-circle-check"></i> Yechilgan</span>' : ''}
                        </div>
                    </div>

                    <h4 class="text-lg font-bold text-slate-900 dark:text-white mb-2">${p.title}</h4>
                    <p class="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-4 leading-relaxed">${p.description}</p>
                </div>

                <div class="pt-4 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                    <span class="text-xs text-slate-500 font-medium">Turkum: ${p.category}</span>
                    <button onclick="BilimProblems.openProblemModal('${p.id}')" class="px-4 py-2 rounded-xl text-sm font-bold ${
                        isSolved 
                        ? 'bg-emerald-600 text-white hover:bg-emerald-700' 
                        : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/20'
                    } transition flex items-center gap-2">
                        <span>${isSolved ? 'Yechimni ko\'rish' : 'Masalani yechish'}</span>
                        <i class="fa-solid fa-arrow-right text-xs"></i>
                    </button>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Modal oynasini ochish
    function openProblemModal(problemId) {
        window.BilimAudio.playClick();
        const p = window.BilimData.problems.find(item => item.id === problemId);
        if (!p) return;

        const isSolved = solvedProblems.includes(p.id);
        const modal = document.getElementById('problemModal');
        const modalContent = document.getElementById('problemModalContent');

        modalContent.innerHTML = `
            <div class="p-6">
                <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div>
                        <span class="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">${p.category}</span>
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mt-1">${p.title}</h3>
                    </div>
                    <button onclick="BilimProblems.closeModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-center">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="py-5 space-y-4">
                    <div class="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 leading-relaxed text-base">
                        ${p.description}
                    </div>

                    <div class="font-semibold text-slate-800 dark:text-slate-200">
                        ${p.questionText}
                    </div>

                    <div id="problemHintBox" class="hidden p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-sm">
                        <i class="fa-solid fa-lightbulb mr-1"></i> <strong>Maslahat:</strong> ${p.hint}
                    </div>

                    ${!isSolved ? `
                        <div class="space-y-3">
                            <div class="flex gap-2">
                                <input id="problemAnswerInput" type="text" placeholder="Javobingizni shu yerga yozing..." class="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium">
                                <button onclick="BilimProblems.submitAnswer('${p.id}')" class="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold transition shadow-md shadow-blue-500/20">
                                    Tekshirish
                                </button>
                            </div>
                            <div class="flex justify-between items-center text-xs">
                                <button onclick="document.getElementById('problemHintBox').classList.toggle('hidden')" class="text-amber-600 hover:underline flex items-center gap-1 font-semibold">
                                    <i class="fa-regular fa-lightbulb"></i> Maslahat (yordam) olish
                                </button>
                                <span class="text-slate-400">Mukofot: +${p.points} XP</span>
                            </div>
                        </div>
                    ` : ''}

                    <div id="problemFeedbackAlert" class="hidden p-3 rounded-xl text-sm font-semibold"></div>

                    <div id="problemExplanationBox" class="${isSolved ? '' : 'hidden'} p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200 text-sm">
                        <h5 class="font-bold mb-1 flex items-center gap-1.5 text-emerald-800 dark:text-emerald-300">
                            <i class="fa-solid fa-circle-check"></i> To'liq yechim va tushuntirish:
                        </h5>
                        <p class="leading-relaxed">${p.explanation}</p>
                    </div>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    function closeModal() {
        window.BilimAudio.playClick();
        document.getElementById('problemModal').classList.add('hidden');
    }

    // Foydalanuvchi javobini tekshirish
    function submitAnswer(problemId) {
        const p = window.BilimData.problems.find(item => item.id === problemId);
        if (!p) return;

        const inputEl = document.getElementById('problemAnswerInput');
        const feedbackEl = document.getElementById('problemFeedbackAlert');
        const userText = (inputEl.value || '').trim().toLowerCase();

        if (!userText) {
            feedbackEl.className = "p-3 rounded-xl text-sm font-semibold bg-rose-100 text-rose-800 border border-rose-200";
            feedbackEl.textContent = "Iltimos, avval javobingizni kiriting!";
            feedbackEl.classList.remove('hidden');
            return;
        }

        // Qabul qilinadigan javoblar bilan solishtirish
        const isCorrect = p.acceptableAnswers.some(ans => ans.toLowerCase().trim() === userText);

        if (isCorrect) {
            window.BilimAudio.playVictory();
            if (window.confetti) {
                window.confetti({ particleCount: 80, spread: 60 });
            }

            feedbackEl.className = "p-3 rounded-xl text-sm font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200";
            feedbackEl.textContent = `Ajoyib! Javob mutlaqo to'g'ri! Sizga +${p.points} XP berildi!`;
            feedbackEl.classList.remove('hidden');

            document.getElementById('problemExplanationBox').classList.remove('hidden');

            if (!solvedProblems.includes(p.id)) {
                solvedProblems.push(p.id);
                localStorage.setItem('bilim_solved_problems', JSON.stringify(solvedProblems));

                if (window.BilimApp) {
                    window.BilimApp.addXP(p.points);
                    window.BilimApp.addCoins(10);
                    window.BilimApp.incrementDailyTask('masalalar', 1);
                }
            }

            // Ro'yxatni yangilash
            setTimeout(() => {
                renderProblemsList();
            }, 500);

        } else {
            window.BilimAudio.playWrong();
            feedbackEl.className = "p-3 rounded-xl text-sm font-semibold bg-rose-100 text-rose-800 border border-rose-200";
            feedbackEl.textContent = "Noto'g'ri javob. Maslahatdan foydalanib yana bir bor urinib ko'ring!";
            feedbackEl.classList.remove('hidden');
        }
    }

    return {
        init: init,
        openProblemModal: openProblemModal,
        closeModal: closeModal,
        submitAnswer: submitAnswer,
        renderProblemsList: renderProblemsList
    };
})();
