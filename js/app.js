// Bilim_Uz - Asosiy Ilova Boshqaruvi va SPA Navigatsiyasi
window.BilimApp = (function () {
    let currentUser = {
        name: "Azizbek Rahmonov",
        school: "Toshkent sh., 21-IDUM, 9-sinf",
        avatar: "👨‍🎓",
        level: 3,
        xp: 1250,
        coins: 140,
        rank: 6,
        streak: 4,
        lastActiveDate: new Date().toISOString().split('T')[0],
        completedTestsCount: 12,
        solvedProblemsCount: 2,
        hasPerfectMath: false
    };

    let quizHistory = [];
    let dailyTasksState = [];
    let currentActiveMenu = 'bosh_sahifa';
    let resultsChart = null;

    function init() {
        loadStorageData();
        checkDailyStreak();
        setupEventListeners();
        renderDashboard();
        renderSubjects();
        renderDailyTasks();
        renderLeaderboard();
        renderResults();
        
        // Boshlang'ich sahifani ochish
        navigateTo('bosh_sahifa');

        // Dark mode initsializatsiyasi
        const savedTheme = localStorage.getItem('bilim_theme');
        if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        updateThemeToggleIcon();
        updateSoundToggleIcon();
    }

    // LocalStorage ma'lumotlarini yuklash
    function loadStorageData() {
        const savedUser = localStorage.getItem('bilim_user');
        if (savedUser) {
            try {
                currentUser = Object.assign(currentUser, JSON.parse(savedUser));
            } catch (e) {
                console.error("User parse error", e);
            }
        }

        const savedHistory = localStorage.getItem('bilim_quiz_history');
        if (savedHistory) {
            try {
                quizHistory = JSON.parse(savedHistory);
            } catch (e) {
                quizHistory = [];
            }
        } else {
            // Dastlabki namunaviy test natijalari
            quizHistory = [
                { subjectId: 'matematika', subjectName: 'Matematika', total: 8, correct: 7, percent: 88, xp: 105, coins: 21, date: '18-Okt, 14:30' },
                { subjectId: 'ingliz_tili', subjectName: 'Ingliz tili', total: 8, correct: 8, percent: 100, xp: 120, coins: 24, date: '17-Okt, 18:20' },
                { subjectId: 'tarix', subjectName: 'Tarix', total: 8, correct: 6, percent: 75, xp: 90, coins: 18, date: '16-Okt, 11:15' }
            ];
            localStorage.setItem('bilim_quiz_history', JSON.stringify(quizHistory));
        }

        // Kundalik topshiriqlarni yuklash
        const savedTasks = localStorage.getItem('bilim_daily_tasks');
        const savedDate = localStorage.getItem('bilim_daily_tasks_date');
        const todayStr = new Date().toISOString().split('T')[0];

        if (savedTasks && savedDate === todayStr) {
            dailyTasksState = JSON.parse(savedTasks);
        } else {
            // Yangi kun uchun topshiriqlarni tiklash
            dailyTasksState = JSON.parse(JSON.stringify(window.BilimData.dailyTasks));
            localStorage.setItem('bilim_daily_tasks', JSON.stringify(dailyTasksState));
            localStorage.setItem('bilim_daily_tasks_date', todayStr);
        }
    }

    // Kunlik davomiylikni (streak) tekshirish
    function checkDailyStreak() {
        const today = new Date().toISOString().split('T')[0];
        if (currentUser.lastActiveDate !== today) {
            const lastDate = new Date(currentUser.lastActiveDate);
            const currentDate = new Date(today);
            const diffDays = Math.round((currentDate - lastDate) / (1000 * 60 * 60 * 24));

            if (diffDays === 1) {
                currentUser.streak += 1;
            } else if (diffDays > 1) {
                currentUser.streak = 1;
            }
            currentUser.lastActiveDate = today;
            saveUserData();
        }
    }

    function saveUserData() {
        localStorage.setItem('bilim_user', JSON.stringify(currentUser));
        updateHeaderUserStats();
    }

    // Navigatsiya - Menyular orasida o'tish
    function navigateTo(menuId) {
        window.BilimAudio.playClick();
        currentActiveMenu = menuId;

        // Barcha menyu sahifalarini yashirish
        const pages = document.querySelectorAll('.page-view');
        pages.forEach(p => p.classList.add('hidden'));

        // Faol sahifani ko'rsatish
        const targetPage = document.getElementById(`view_${menuId}`);
        if (targetPage) {
            targetPage.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Navigatsiya tugmalarining faol holati
        const navButtons = document.querySelectorAll('[data-nav-target]');
        navButtons.forEach(btn => {
            const target = btn.getAttribute('data-nav-target');
            if (target === menuId) {
                btn.classList.add('nav-active');
            } else {
                btn.classList.remove('nav-active');
            }
        });

        // Sahifa bo'yicha maxsus renderlar
        if (menuId === 'bosh_sahifa') {
            renderDashboard();
        } else if (menuId === 'fanlar') {
            renderSubjects();
        } else if (menuId === 'kundalik_topshiriqlar') {
            renderDailyTasks();
        } else if (menuId === 'masalalar') {
            window.BilimProblems.init();
        } else if (menuId === 'natijalar') {
            renderResults();
        } else if (menuId === 'reyting') {
            renderLeaderboard();
        } else if (menuId === 'profil') {
            window.BilimProfile.init();
        }

        // Mobil menyuni yopish
        closeMobileSidebar();
    }

    // Yuqori paneldagi statistikalarni yangilash
    function updateHeaderUserStats() {
        const streakEl = document.getElementById('headerStreakCount');
        const coinsEl = document.getElementById('headerCoinsCount');
        const xpEl = document.getElementById('headerXpCount');
        const avatarEl = document.getElementById('headerAvatarDisplay');

        if (streakEl) streakEl.textContent = currentUser.streak;
        if (coinsEl) coinsEl.textContent = currentUser.coins;
        if (xpEl) xpEl.textContent = `${currentUser.xp} XP`;
        if (avatarEl) avatarEl.textContent = currentUser.avatar;

        // Levelni yangilash: har 500 XP = 1 daraja
        const calculatedLevel = Math.floor(currentUser.xp / 500) + 1;
        if (calculatedLevel !== currentUser.level) {
            currentUser.level = calculatedLevel;
            localStorage.setItem('bilim_user', JSON.stringify(currentUser));
        }
    }

    // 1. Bosh sahifani render qilish
    function renderDashboard() {
        updateHeaderUserStats();

        // Foydalanuvchi salomlashishi
        const greetingNameEl = document.getElementById('dashGreetingName');
        if (greetingNameEl) greetingNameEl.textContent = currentUser.name.split(' ')[0];

        // Tezkor statistika
        document.getElementById('dashStatXP').textContent = currentUser.xp;
        document.getElementById('dashStatStreak').textContent = `${currentUser.streak} kun`;
        document.getElementById('dashStatTests').textContent = currentUser.completedTestsCount;
        document.getElementById('dashStatRank').textContent = `#${currentUser.rank}`;

        // Motivatsion iqtibos
        const quoteEl = document.getElementById('dashMotivationalQuote');
        const authorEl = document.getElementById('dashMotivationalAuthor');
        if (quoteEl && window.BilimData.quotes.length > 0) {
            const randomQuote = window.BilimData.quotes[Math.floor(Math.random() * window.BilimData.quotes.length)];
            quoteEl.textContent = `"${randomQuote.text}"`;
            authorEl.textContent = `— ${randomQuote.author}`;
        }

        // Fanlar bo'yicha tezkor kartalar
        const container = document.getElementById('dashSubjectsGrid');
        if (container) {
            container.innerHTML = '';
            window.BilimData.subjects.forEach(sub => {
                const card = document.createElement('div');
                card.className = "card-hover p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex flex-col justify-between";
                card.innerHTML = `
                    <div>
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${sub.color} text-white flex items-center justify-center text-xl mb-4 shadow-md">
                            <i class="fa-solid ${sub.icon}"></i>
                        </div>
                        <h4 class="text-lg font-bold text-slate-900 dark:text-white">${sub.name}</h4>
                        <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">${sub.description}</p>
                    </div>
                    <div class="pt-4 mt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between">
                        <span class="text-xs font-semibold text-slate-400">${sub.lessonsCount} ta mavzu</span>
                        <button onclick="BilimApp.openSubjectDetail('${sub.id}')" class="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
                            O'rganish <i class="fa-solid fa-arrow-right text-[10px]"></i>
                        </button>
                    </div>
                `;
                container.appendChild(card);
            });
        }
    }

    // 2. Fanlar menyusini render qilish
    function renderSubjects() {
        const container = document.getElementById('subjectsListContainer');
        if (!container) return;
        container.innerHTML = '';

        window.BilimData.subjects.forEach(sub => {
            const section = document.createElement('div');
            section.className = "p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm space-y-4";

            let topicsHtml = sub.topics.map((t, idx) => `
                <div onclick="BilimApp.openLessonModal('${sub.id}', '${t.id}')" class="p-4 rounded-xl border border-slate-100 dark:border-slate-700/60 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 transition cursor-pointer flex items-center justify-between">
                    <div class="flex items-center gap-3">
                        <span class="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold flex items-center justify-center text-xs">
                            0${idx + 1}
                        </span>
                        <div>
                            <h5 class="text-sm font-bold text-slate-800 dark:text-slate-200">${t.title}</h5>
                            <span class="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                <i class="fa-regular fa-clock"></i> ${t.readTime}
                            </span>
                        </div>
                    </div>
                    <span class="text-xs font-bold text-blue-600 dark:text-blue-400 flex items-center gap-1">
                        O'qish <i class="fa-solid fa-chevron-right text-[10px]"></i>
                    </span>
                </div>
            `).join('');

            section.innerHTML = `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-700">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-xl bg-gradient-to-br ${sub.color} text-white flex items-center justify-center text-xl shadow-md">
                            <i class="fa-solid ${sub.icon}"></i>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">${sub.name}</h3>
                            <p class="text-xs text-slate-500 dark:text-slate-400">${sub.description}</p>
                        </div>
                    </div>
                    <button onclick="BilimApp.goToSubjectTest('${sub.id}')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition flex items-center gap-1.5 self-start sm:self-auto shadow-sm">
                        <i class="fa-solid fa-pen-to-square"></i>
                        <span>Fandan test yechish</span>
                    </button>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2">
                    ${topicsHtml}
                </div>
            `;
            container.appendChild(section);
        });
    }

    // Mavzuni ochish (modal)
    function openLessonModal(subjectId, topicId) {
        window.BilimAudio.playClick();
        const sub = window.BilimData.subjects.find(s => s.id === subjectId);
        if (!sub) return;
        const topic = sub.topics.find(t => t.id === topicId);
        if (!topic) return;

        const modal = document.getElementById('lessonModal');
        const modalContent = document.getElementById('lessonModalContent');

        modalContent.innerHTML = `
            <div class="p-6 sm:p-8">
                <div class="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-700">
                    <div class="flex items-center gap-3">
                        <span class="px-3 py-1 rounded-full text-xs font-bold ${sub.badgeBg}">${sub.name}</span>
                        <span class="text-xs text-slate-400"><i class="fa-regular fa-clock"></i> ${topic.readTime}</span>
                    </div>
                    <button onclick="BilimApp.closeLessonModal()" class="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 flex items-center justify-center">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>

                <div class="py-6 text-slate-700 dark:text-slate-200">
                    <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">${topic.title}</h2>
                    <div class="prose dark:prose-invert max-w-none text-base leading-relaxed">
                        ${topic.content}
                    </div>
                </div>

                <div class="pt-6 border-t border-slate-200 dark:border-slate-700 flex flex-wrap items-center justify-between gap-4">
                    <div class="text-xs text-slate-500">Mavzuni o'qib chiqdingizmi?</div>
                    <button onclick="BilimApp.goToSubjectTest('${sub.id}'); BilimApp.closeLessonModal();" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition shadow-md shadow-blue-500/20 flex items-center gap-2">
                        <i class="fa-solid fa-play"></i> Ushbu mavzu bo'yicha test topshirish
                    </button>
                </div>
            </div>
        `;

        modal.classList.remove('hidden');
    }

    function closeLessonModal() {
        window.BilimAudio.playClick();
        document.getElementById('lessonModal').classList.add('hidden');
    }

    function openSubjectDetail(subjectId) {
        navigateTo('fanlar');
    }

    function goToSubjectTest(subjectId) {
        navigateTo('testlar');
        window.BilimTests.startQuiz(subjectId);
    }

    // 3. Kundalik topshiriqlarni render qilish
    function renderDailyTasks() {
        const container = document.getElementById('dailyTasksContainer');
        if (!container) return;
        container.innerHTML = '';

        const completedCount = dailyTasksState.filter(t => t.completed).length;
        const totalCount = dailyTasksState.length;
        const progressPercent = Math.round((completedCount / totalCount) * 100);

        // Kundalik progress sarlavhasi
        document.getElementById('dailyTasksProgressText').textContent = `${completedCount} / ${totalCount} bajarildi (${progressPercent}%)`;
        document.getElementById('dailyTasksProgressBar').style.width = `${progressPercent}%`;

        dailyTasksState.forEach(task => {
            const card = document.createElement('div');
            card.className = `p-4 sm:p-5 rounded-2xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                task.completed 
                ? 'bg-emerald-50/30 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800' 
                : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm'
            }`;

            card.innerHTML = `
                <div class="flex items-center gap-4">
                    <div class="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0 ${
                        task.completed 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-blue-100 dark:bg-slate-700 text-blue-600 dark:text-blue-400'
                    }">
                        <i class="fa-solid ${task.completed ? 'fa-check' : task.icon}"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 dark:text-white text-base ${task.completed ? 'line-through text-slate-400' : ''}">
                            ${task.title}
                        </h4>
                        <div class="flex items-center gap-3 mt-1 text-xs">
                            <span class="text-amber-500 font-semibold"><i class="fa-solid fa-bolt"></i> +${task.xp} XP</span>
                            <span class="text-yellow-500 font-semibold"><i class="fa-solid fa-coins"></i> +${task.coins} tanga</span>
                            <span class="text-slate-400">Progress: ${task.current} / ${task.target}</span>
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-end gap-2">
                    ${task.completed ? `
                        <span class="px-4 py-2 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center gap-1.5">
                            <i class="fa-solid fa-circle-check"></i> Bajarildi
                        </span>
                    ` : `
                        <button onclick="BilimApp.completeDailyTaskManually('${task.id}')" class="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition shadow-sm">
                            Bajarish
                        </button>
                    `}
                </div>
            `;
            container.appendChild(card);
        });
    }

    function completeDailyTaskManually(taskId) {
        const task = dailyTasksState.find(t => t.id === taskId);
        if (!task || task.completed) return;

        task.current = task.target;
        task.completed = true;

        addXP(task.xp);
        addCoins(task.coins);
        window.BilimAudio.playVictory();

        if (window.confetti) {
            window.confetti({ particleCount: 70, spread: 50 });
        }

        localStorage.setItem('bilim_daily_tasks', JSON.stringify(dailyTasksState));
        renderDailyTasks();
    }

    function incrementDailyTask(category, amount = 1) {
        let changed = false;
        dailyTasksState.forEach(task => {
            if (task.category === category && !task.completed) {
                task.current += amount;
                if (task.current >= task.target) {
                    task.current = task.target;
                    task.completed = true;
                    addXP(task.xp);
                    addCoins(task.coins);
                }
                changed = true;
            }
        });

        if (changed) {
            localStorage.setItem('bilim_daily_tasks', JSON.stringify(dailyTasksState));
            renderDailyTasks();
        }
    }

    // 4. Natijalar bo'limi
    function renderResults() {
        const totalTests = quizHistory.length;
        const totalCorrect = quizHistory.reduce((sum, q) => sum + q.correct, 0);
        const totalQuestions = quizHistory.reduce((sum, q) => sum + q.total, 0);
        const avgPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

        document.getElementById('resultsTotalTests').textContent = totalTests;
        document.getElementById('resultsAvgPercent').textContent = `${avgPercent}%`;
        document.getElementById('resultsTotalQuestions').textContent = totalQuestions;

        // Jadval tarixi
        const historyContainer = document.getElementById('resultsHistoryTableBody');
        if (historyContainer) {
            historyContainer.innerHTML = '';
            if (quizHistory.length === 0) {
                historyContainer.innerHTML = `<tr><td colspan="5" class="p-6 text-center text-slate-400">Hali testlar topshirilmagan</td></tr>`;
            } else {
                quizHistory.forEach(item => {
                    const tr = document.createElement('tr');
                    tr.className = "border-b border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 text-sm";
                    tr.innerHTML = `
                        <td class="p-4 font-bold text-slate-800 dark:text-slate-100">${item.subjectName}</td>
                        <td class="p-4 text-slate-500 dark:text-slate-400">${item.date}</td>
                        <td class="p-4">${item.correct} / ${item.total}</td>
                        <td class="p-4">
                            <span class="px-2.5 py-1 rounded-full text-xs font-bold ${
                                item.percent >= 80 ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' :
                                item.percent >= 50 ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-300' :
                                'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300'
                            }">
                                ${item.percent}%
                            </span>
                        </td>
                        <td class="p-4 font-bold text-blue-600 dark:text-blue-400">+${item.xp} XP</td>
                    `;
                    historyContainer.appendChild(tr);
                });
            }
        }

        // Chart.js grafigini chizish
        renderChart();
    }

    function renderChart() {
        const canvas = document.getElementById('resultsAnalyticsChart');
        if (!canvas || typeof Chart === 'undefined') return;

        // Fanlar bo'yicha aniqlik foizlarini hisoblash
        const subjects = ['Matematika', 'Ingliz tili', 'Ona tili', 'Tarix'];
        const subData = [85, 92, 78, 88]; // odatiy/dinamik

        if (resultsChart) {
            resultsChart.destroy();
        }

        const isDark = document.documentElement.classList.contains('dark');
        const textColor = isDark ? '#94a3b8' : '#64748b';
        const gridColor = isDark ? 'rgba(51, 65, 85, 0.4)' : 'rgba(226, 232, 240, 0.8)';

        resultsChart = new Chart(canvas, {
            type: 'bar',
            data: {
                labels: subjects,
                datasets: [{
                    label: "O'zlashtirish foizi (%)",
                    data: subData,
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.8)',
                        'rgba(16, 185, 129, 0.8)',
                        'rgba(245, 158, 11, 0.8)',
                        'rgba(244, 63, 94, 0.8)'
                    ],
                    borderRadius: 10,
                    borderSkipped: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: { color: textColor, callback: val => `${val}%` },
                        grid: { color: gridColor }
                    },
                    x: {
                        ticks: { color: textColor },
                        grid: { display: false }
                    }
                }
            }
        });
    }

    // 5. Reyting (Leaderboard) bo'limi
    function renderLeaderboard() {
        const container = document.getElementById('leaderboardListContainer');
        if (!container) return;
        container.innerHTML = '';

        const board = window.BilimData.leaderboard || [];

        board.forEach(student => {
            const isMe = student.name.toLowerCase().includes(currentUser.name.split(' ')[0].toLowerCase());
            const row = document.createElement('div');
            row.className = `p-4 sm:p-5 rounded-2xl border transition flex items-center justify-between gap-4 ${
                student.rank === 1 ? 'border-amber-400 bg-amber-50/40 dark:bg-amber-950/20 shadow-md' :
                student.rank === 2 ? 'border-slate-300 bg-slate-50/40 dark:bg-slate-800/60' :
                student.rank === 3 ? 'border-amber-700/40 bg-orange-50/40 dark:bg-orange-950/20' :
                'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800'
            } ${isMe ? 'ring-2 ring-blue-500' : ''}`;

            let rankBadge = `<span class="w-8 h-8 rounded-full font-bold flex items-center justify-center text-sm ${
                student.rank === 1 ? 'bg-amber-400 text-white shadow-md' :
                student.rank === 2 ? 'bg-slate-300 text-slate-800' :
                student.rank === 3 ? 'bg-amber-700 text-white' :
                'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
            }">${student.rank}</span>`;

            row.innerHTML = `
                <div class="flex items-center gap-4">
                    ${rankBadge}
                    <div class="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-700 text-2xl flex items-center justify-center">
                        ${student.avatar}
                    </div>
                    <div>
                        <div class="flex items-center gap-2">
                            <h4 class="font-bold text-slate-900 dark:text-white text-base">${student.name}</h4>
                            ${isMe ? '<span class="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white">Siz</span>' : ''}
                        </div>
                        <p class="text-xs text-slate-500 dark:text-slate-400">${student.school}</p>
                    </div>
                </div>

                <div class="text-right">
                    <div class="text-base font-extrabold text-blue-600 dark:text-blue-400">${student.xp} XP</div>
                    <div class="text-xs text-slate-400">${student.tests} ta test topshirgan</div>
                </div>
            `;
            container.appendChild(row);
        });
    }

    // Yangi test natijasini qo'shish
    function recordQuizResult(result) {
        quizHistory.unshift(result);
        currentUser.completedTestsCount++;
        addXP(result.xp);
        addCoins(result.coins);

        if (result.subjectId === 'matematika' && result.percent === 100) {
            currentUser.hasPerfectMath = true;
        }

        incrementDailyTask(result.subjectId, 1);
        saveUserData();
        localStorage.setItem('bilim_quiz_history', JSON.stringify(quizHistory));
    }

    function addXP(amount) {
        currentUser.xp += amount;
        saveUserData();
    }

    function addCoins(amount) {
        currentUser.coins += amount;
        saveUserData();
    }

    function updateUserProfile(updates) {
        currentUser = Object.assign(currentUser, updates);
        saveUserData();
    }

    function getUserData() {
        return currentUser;
    }

    // Dark / Light rejimni almashtirish
    function toggleTheme() {
        window.BilimAudio.playClick();
        const isDark = document.documentElement.classList.toggle('dark');
        localStorage.setItem('bilim_theme', isDark ? 'dark' : 'light');
        updateThemeToggleIcon();
        if (currentActiveMenu === 'natijalar') {
            renderChart();
        }
    }

    function updateThemeToggleIcon() {
        const isDark = document.documentElement.classList.contains('dark');
        const iconEl = document.getElementById('themeToggleIcon');
        if (iconEl) {
            iconEl.className = isDark ? "fa-solid fa-sun text-amber-400" : "fa-solid fa-moon text-slate-600";
        }
    }

    // Ovozni o'chirish / yoqish
    function toggleSound() {
        const isMuted = window.BilimAudio.toggleMute();
        updateSoundToggleIcon();
        if (!isMuted) {
            window.BilimAudio.playClick();
        }
    }

    function updateSoundToggleIcon() {
        const isMuted = window.BilimAudio.isMuted();
        const iconEl = document.getElementById('soundToggleIcon');
        if (iconEl) {
            iconEl.className = isMuted ? "fa-solid fa-volume-xmark text-rose-500" : "fa-solid fa-volume-high text-slate-600 dark:text-slate-300";
        }
    }

    // Mobil menyu
    function toggleMobileSidebar() {
        window.BilimAudio.playClick();
        const sidebar = document.getElementById('mobileSidebar');
        const overlay = document.getElementById('mobileSidebarOverlay');
        sidebar.classList.toggle('-translate-x-full');
        overlay.classList.toggle('hidden');
    }

    function closeMobileSidebar() {
        const sidebar = document.getElementById('mobileSidebar');
        const overlay = document.getElementById('mobileSidebarOverlay');
        if (sidebar && overlay) {
            sidebar.classList.add('-translate-x-full');
            overlay.classList.add('hidden');
        }
    }

    function setupEventListeners() {
        // Navigatsiya tugmalari
        document.querySelectorAll('[data-nav-target]').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-nav-target');
                navigateTo(target);
            });
        });
    }

    return {
        init: init,
        navigateTo: navigateTo,
        recordQuizResult: recordQuizResult,
        addXP: addXP,
        addCoins: addCoins,
        updateUserProfile: updateUserProfile,
        getUserData: getUserData,
        incrementDailyTask: incrementDailyTask,
        completeDailyTaskManually: completeDailyTaskManually,
        openLessonModal: openLessonModal,
        closeLessonModal: closeLessonModal,
        openSubjectDetail: openSubjectDetail,
        goToSubjectTest: goToSubjectTest,
        toggleTheme: toggleTheme,
        toggleSound: toggleSound,
        toggleMobileSidebar: toggleMobileSidebar,
        closeMobileSidebar: closeMobileSidebar
    };
})();
