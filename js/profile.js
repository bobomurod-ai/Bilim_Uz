// Bilim_Uz - Profil, Yutuqlar va Sertifikat moduli
window.BilimProfile = (function () {

    const AVATARS = ["👨‍🎓", "👩‍🎓", "🧑‍💻", "👩‍🏫", "👨‍🔬", "🚀", "💡", "🦁", "⚡", "🌟"];

    function init() {
        renderProfileInfo();
        renderBadgesList();
        renderAvatarSelector();
    }

    // Profil ma'lumotlarini sahifaga joylash
    function renderProfileInfo() {
        const user = window.BilimApp.getUserData();

        // Profil sarlavhalari va maydonlar
        const nameEl = document.getElementById('profileDisplayName');
        const schoolEl = document.getElementById('profileDisplaySchool');
        const avatarEl = document.getElementById('profileAvatarDisplay');
        const levelBadgeEl = document.getElementById('profileLevelBadge');
        const xpTextEl = document.getElementById('profileXpText');
        const coinsTextEl = document.getElementById('profileCoinsText');
        const rankTextEl = document.getElementById('profileRankText');

        if (nameEl) nameEl.textContent = user.name || "Bilimdon O'quvchi";
        if (schoolEl) schoolEl.textContent = user.school || "Maktab / Litsey o'quvchisi";
        if (avatarEl) avatarEl.textContent = user.avatar || "👨‍🎓";
        if (levelBadgeEl) levelBadgeEl.textContent = `${user.level}-daraja (${getLevelTitle(user.level)})`;
        if (xpTextEl) xpTextEl.textContent = `${user.xp} XP`;
        if (coinsTextEl) coinsTextEl.textContent = `${user.coins} tanga`;
        if (rankTextEl) rankTextEl.textContent = `#${user.rank || 5}-o'rin`;

        // Tahrirlash formasi maydonlari
        const inputName = document.getElementById('inputProfileName');
        const inputSchool = document.getElementById('inputProfileSchool');
        if (inputName) inputName.value = user.name || "";
        if (inputSchool) inputSchool.value = user.school || "";

        // Progress darajasi
        const nextLevelXp = user.level * 500;
        const currentLevelProgress = user.xp % 500;
        const percent = Math.min(100, Math.round((currentLevelProgress / 500) * 100));
        const progressBar = document.getElementById('profileLevelProgressBar');
        if (progressBar) progressBar.style.width = `${percent}%`;

        const levelInfoText = document.getElementById('profileLevelInfoText');
        if (levelInfoText) levelInfoText.textContent = `${currentLevelProgress} / 500 XP (Keyingi darajagacha ${500 - currentLevelProgress} XP)`;
    }

    function getLevelTitle(level) {
        const titles = {
            1: "Boshlang'ich",
            2: "Izlanuvchi",
            3: "Bilimdon",
            4: "Zukko",
            5: "Daho",
            6: "Ustoz"
        };
        return titles[level] || "Alloma";
    }

    // Avatar tanlash tugmalari
    function renderAvatarSelector() {
        const container = document.getElementById('avatarSelectorContainer');
        if (!container) return;
        const user = window.BilimApp.getUserData();

        container.innerHTML = '';
        AVATARS.forEach(av => {
            const btn = document.createElement('button');
            const isSelected = (user.avatar || '👨‍🎓') === av;
            btn.className = `w-12 h-12 rounded-xl text-2xl flex items-center justify-center transition border ${
                isSelected 
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/40 ring-2 ring-blue-400' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-100'
            }`;
            btn.textContent = av;
            btn.onclick = () => {
                window.BilimAudio.playClick();
                window.BilimApp.updateUserProfile({ avatar: av });
                renderProfileInfo();
                renderAvatarSelector();
            };
            container.appendChild(btn);
        });
    }

    // Yutuqlar (Badges) ro'yxatini chiqarish
    function renderBadgesList() {
        const container = document.getElementById('profileBadgesContainer');
        if (!container) return;

        const badges = window.BilimData.badges || [];
        const user = window.BilimApp.getUserData();

        // Shartlarga ko'ra ochish
        badges.forEach(b => {
            if (b.id === 'first_step' && (user.completedTestsCount > 0)) b.unlocked = true;
            if (b.id === 'math_wizard' && user.hasPerfectMath) b.unlocked = true;
            if (b.id === 'streak_master' && user.streak >= 5) b.unlocked = true;
            if (b.id === 'problem_solver' && (user.solvedProblemsCount >= 3)) b.unlocked = true;
        });

        container.innerHTML = '';
        badges.forEach(b => {
            const card = document.createElement('div');
            card.className = `p-4 rounded-2xl border transition flex items-center gap-4 ${
                b.unlocked 
                ? 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 shadow-sm' 
                : 'bg-slate-50 dark:bg-slate-900/40 border-dashed border-slate-200 dark:border-slate-800 opacity-60'
            }`;

            card.innerHTML = `
                <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl ${b.color} shrink-0 ${b.unlocked ? 'shimmer' : 'grayscale'}">
                    <i class="fa-solid ${b.icon}"></i>
                </div>
                <div>
                    <div class="flex items-center gap-2">
                        <h5 class="font-bold text-slate-900 dark:text-white text-base">${b.title}</h5>
                        ${b.unlocked 
                            ? '<span class="text-xs font-bold text-emerald-600 bg-emerald-100 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full">Ochilgan</span>' 
                            : '<span class="text-xs text-slate-400"><i class="fa-solid fa-lock"></i> Qulflangan</span>'}
                    </div>
                    <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">${b.description}</p>
                </div>
            `;
            container.appendChild(card);
        });
    }

    // Profilni saqlash
    function saveProfile() {
        window.BilimAudio.playClick();
        const inputName = document.getElementById('inputProfileName').value.trim();
        const inputSchool = document.getElementById('inputProfileSchool').value.trim();

        if (!inputName) {
            alert("Iltimos, ismingizni kiriting!");
            return;
        }

        window.BilimApp.updateUserProfile({
            name: inputName,
            school: inputSchool
        });

        renderProfileInfo();
        
        const alertEl = document.getElementById('profileSaveAlert');
        if (alertEl) {
            alertEl.classList.remove('hidden');
            setTimeout(() => alertEl.classList.add('hidden'), 3000);
        }
    }

    // Sertifikat modalini ochish va to'ldirish
    function openCertificateModal() {
        window.BilimAudio.playVictory();
        const user = window.BilimApp.getUserData();
        const modal = document.getElementById('certificateModal');

        document.getElementById('certStudentName').textContent = user.name || "Bilimdon O'quvchi";
        document.getElementById('certStudentSchool').textContent = user.school || "Maktab o'quvchisi";
        document.getElementById('certLevelTitle').textContent = `${user.level}-daraja: ${getLevelTitle(user.level)}`;
        document.getElementById('certTotalXP').textContent = `${user.xp} XP to'plagan`;
        document.getElementById('certDate').textContent = new Date().toLocaleDateString('uz-UZ', { year: 'numeric', month: 'long', day: 'numeric' });

        modal.classList.remove('hidden');
    }

    function closeCertificateModal() {
        window.BilimAudio.playClick();
        document.getElementById('certificateModal').classList.add('hidden');
    }

    function printCertificate() {
        window.print();
    }

    return {
        init: init,
        renderProfileInfo: renderProfileInfo,
        saveProfile: saveProfile,
        openCertificateModal: openCertificateModal,
        closeCertificateModal: closeCertificateModal,
        printCertificate: printCertificate
    };
})();
