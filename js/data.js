// Bilim_Uz platformasi uchun asosiy ma'lumotlar bazasi
window.BilimData = {
    // Fanlar ro'yxati va ularning o'quv materiallari
    subjects: [
        {
            id: 'matematika',
            name: 'Matematika',
            icon: 'fa-calculator',
            color: 'from-blue-500 to-indigo-600',
            badgeBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
            description: 'Mantiqiy fikrlash, hisob-kitob, algebra va geometriya qonuniyatlari.',
            lessonsCount: 5,
            topics: [
                {
                    id: 'm1',
                    title: "Tub va murakkab sonlar. EKUB va EKUK",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Tub va murakkab sonlar</h4>
                        <p class="mb-3 leading-relaxed">Faqat 1 ga va o'ziga bo'linadigan 1 dan katta natural sonlar <strong>tub sonlar</strong> deyiladi. Masalan: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29...</p>
                        <p class="mb-3 leading-relaxed">Ikkitadan ortiq bo'luvchiga ega bo'lgan sonlar <strong>murakkab sonlar</strong> deyiladi. 1 soni tub ham, murakkab ham emas!</p>
                        
                        <div class="p-4 bg-blue-50 dark:bg-blue-950/40 border-l-4 border-blue-500 rounded my-4">
                            <h5 class="font-bold text-blue-800 dark:text-blue-300">Asosiy qoidalar:</h5>
                            <ul class="list-disc pl-5 mt-2 space-y-1">
                                <li><strong>EKUB(a, b)</strong> — a va b sonlarining eng katta umumiy bo'luvchisi.</li>
                                <li><strong>EKUK(a, b)</strong> — a va b sonlarining eng kichik umumiy karralisi.</li>
                                <li>Muhim xossa: <code>a × b = EKUB(a, b) × EKUK(a, b)</code></li>
                            </ul>
                        </div>

                        <h5 class="font-semibold text-lg mt-4 mb-2">Misol:</h5>
                        <p>12 va 18 sonlari uchun:</p>
                        <ul class="list-disc pl-5 space-y-1">
                            <li>12 ning bo'luvchilari: 1, 2, 3, 4, 6, 12</li>
                            <li>18 ning bo'luvchilari: 1, 2, 3, 6, 9, 18</li>
                            <li>Umumiy bo'luvchilari: 1, 2, 3, 6 &rarr; <strong>EKUB(12, 18) = 6</strong></li>
                            <li><strong>EKUK(12, 18) = (12 × 18) / 6 = 36</strong></li>
                        </ul>
                    `
                },
                {
                    id: 'm2',
                    title: "Chiziqli va kvadrat tenglamalar",
                    readTime: "8 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Kvadrat tenglamalar va Viyet teoremasi</h4>
                        <p class="mb-3 leading-relaxed">Kvadrat tenglama umumiy ko'rinishi: <code>ax² + bx + c = 0</code> (bunda a ≠ 0).</p>
                        
                        <div class="p-4 bg-indigo-50 dark:bg-indigo-950/40 border-l-4 border-indigo-500 rounded my-4">
                            <h5 class="font-bold text-indigo-800 dark:text-indigo-300">Diskriminant formulasi:</h5>
                            <p class="mt-1 font-mono text-lg">D = b² - 4ac</p>
                            <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                                <li>Agar <code>D > 0</code> bo'lsa, 2 ta turli haqiqiy ildiz mavjud: <code>x₁,₂ = (-b ± &radic;D) / (2a)</code></li>
                                <li>Agar <code>D = 0</code> bo'lsa, 1 ta karrali ildiz mavjud: <code>x = -b / (2a)</code></li>
                                <li>Agar <code>D < 0</code> bo'lsa, haqiqiy ildizlar mavjud emas.</li>
                            </ul>
                        </div>

                        <h5 class="font-semibold text-lg mt-4 mb-2">Viyet teoremasi keltirilgan kvadrat tenglama uchun (x² + px + q = 0):</h5>
                        <ul class="list-disc pl-5 space-y-1">
                            <li><code>x₁ + x₂ = -p</code></li>
                            <li><code>x₁ × x₂ = q</code></li>
                        </ul>
                    `
                },
                {
                    id: 'm3',
                    title: "Foizlar, nisbat va proporsiya",
                    readTime: "5 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Foiz tushunchasi</h4>
                        <p class="mb-3 leading-relaxed">Sonning 1/100 (yuzdan bir) qismiga <strong>foiz</strong> deyiladi va <code>%</code> belgisi bilan yoziladi.</p>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 my-4">
                            <div class="bg-blue-50 dark:bg-slate-800 p-3 rounded border text-center">
                                <div class="font-bold text-blue-600">A ning p% ini topish</div>
                                <code class="text-sm">B = (A × p) / 100</code>
                            </div>
                            <div class="bg-blue-50 dark:bg-slate-800 p-3 rounded border text-center">
                                <div class="font-bold text-blue-600">Foiziga ko'ra sonni topish</div>
                                <code class="text-sm">A = (B × 100) / p</code>
                            </div>
                            <div class="bg-blue-50 dark:bg-slate-800 p-3 rounded border text-center">
                                <div class="font-bold text-blue-600">Ikki son nisbati foizda</div>
                                <code class="text-sm">(A / B) × 100%</code>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'm4',
                    title: "Pifagor teoremasi va to'g'ri burchakli uchburchak",
                    readTime: "7 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Pifagor teoremasi</h4>
                        <p class="mb-3 leading-relaxed">To'g'ri burchakli uchburchakda gipotenuza kvadratining yig'indisi katetlar kvadratlarining yig'indisiga tengdir:</p>
                        <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 border-l-4 border-emerald-500 rounded my-3 text-center">
                            <span class="text-2xl font-bold font-mono text-emerald-800 dark:text-emerald-300">c² = a² + b²</span>
                        </div>
                        <p class="mt-3"><strong>Misr uchburchagi:</strong> Katetlari 3 va 4 bo'lsa, gipotenuzasi har doim 5 ga teng bo'ladi (3, 4, 5 nisbatidagi uchburchak).</p>
                    `
                },
                {
                    id: 'm5',
                    title: "Mantiqiy masalalar va kombinatorika",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Faktorial va o'rin almashtirishlar</h4>
                        <p class="mb-3 leading-relaxed">1 dan n gacha bo'lgan barcha natural sonlar ko'paytmasi <strong>n faktorial</strong> deyiladi va <code>n!</code> belgilanadi:</p>
                        <p class="font-mono bg-slate-100 dark:bg-slate-800 p-2 rounded">n! = 1 × 2 × 3 × ... × n (0! = 1)</p>
                        <p class="mt-3">Masalan: 5 nafar o'quvchini bir qatorga <code>5! = 120</code> xil usulda tizish mumkin.</p>
                    `
                }
            ],
            formulas: [
                { name: "Kvadrat tenglama ildizlari", formula: "x = (-b ± √(b² - 4ac)) / (2a)" },
                { name: "Pifagor teoremasi", formula: "a² + b² = c²" },
                { name: "Aylana yuzi", formula: "S = π × r²" },
                { name: "Aylana uzunligi", formula: "L = 2 × π × r" },
                { name: "Trapetsiya yuzi", formula: "S = ((a + b) / 2) × h" },
                { name: "Arifmetik progressiya n-hadi", formula: "a_n = a_1 + (n - 1)d" }
            ]
        },
        {
            id: 'ingliz_tili',
            name: 'Ingliz tili',
            icon: 'fa-language',
            color: 'from-emerald-500 to-teal-600',
            badgeBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
            description: 'Grammatika, boy so\'z boyligi, iboralar va xalqaro muloqot tili.',
            lessonsCount: 5,
            topics: [
                {
                    id: 'e1',
                    title: "Present Simple vs Present Continuous",
                    readTime: "7 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Present Simple va Present Continuous farqi</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                            <div class="p-4 bg-teal-50 dark:bg-teal-950/40 rounded border border-teal-200">
                                <h5 class="font-bold text-teal-800 dark:text-teal-300">Present Simple (Oddiy hozirgi)</h5>
                                <p class="text-sm mt-1 text-slate-600 dark:text-slate-300">Doimiy odatlar, faktlar, takrorlanuvchi harakatlar uchun.</p>
                                <p class="mt-2 text-xs font-mono bg-white dark:bg-slate-800 p-2 rounded">Subject + Verb(s/es)</p>
                                <p class="mt-2 text-sm italic">"The Sun rises in the East."</p>
                                <p class="text-sm italic">"I usually wake up at 7 AM."</p>
                            </div>
                            <div class="p-4 bg-emerald-50 dark:bg-emerald-950/40 rounded border border-emerald-200">
                                <h5 class="font-bold text-emerald-800 dark:text-emerald-300">Present Continuous (Hozirgi davomli)</h5>
                                <p class="text-sm mt-1 text-slate-600 dark:text-slate-300">Ayni vaqtda sodir bo'layotgan yoki vaqtinchalik harakatlar.</p>
                                <p class="mt-2 text-xs font-mono bg-white dark:bg-slate-800 p-2 rounded">Subject + am/is/are + Verb-ing</p>
                                <p class="mt-2 text-sm italic">"I am studying English right now."</p>
                                <p class="text-sm italic">"Listen! The birds are singing."</p>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'e2',
                    title: "Past Simple and Irregular Verbs",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">O'tgan zamon va Noto'g'ri fe'llar</h4>
                        <p class="mb-3 leading-relaxed">O'tgan zamonda to'g'ri fe'llarga <code>-ed</code> qo'shimchasi qo'shiladi (work &rarr; worked). Noto'g'ri fe'llar esa o'zgaradi:</p>
                        <div class="overflow-x-auto my-3">
                            <table class="min-w-full text-left text-sm">
                                <thead class="bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-300">
                                    <tr><th class="p-2">V1 (Infinitive)</th><th class="p-2">V2 (Past Simple)</th><th class="p-2">V3 (Past Participle)</th><th class="p-2">Tarjimasi</th></tr>
                                </thead>
                                <tbody class="divide-y divide-slate-200 dark:divide-slate-700">
                                    <tr><td class="p-2 font-semibold">go</td><td class="p-2">went</td><td class="p-2">gone</td><td class="p-2">bormoq</td></tr>
                                    <tr><td class="p-2 font-semibold">take</td><td class="p-2">took</td><td class="p-2">taken</td><td class="p-2">olmoq</td></tr>
                                    <tr><td class="p-2 font-semibold">write</td><td class="p-2">wrote</td><td class="p-2">written</td><td class="p-2">yozmoq</td></tr>
                                    <tr><td class="p-2 font-semibold">speak</td><td class="p-2">spoke</td><td class="p-2">spoken</td><td class="p-2">gapirmoq</td></tr>
                                    <tr><td class="p-2 font-semibold">think</td><td class="p-2">thought</td><td class="p-2">thought</td><td class="p-2">o'ylamoq</td></tr>
                                </tbody>
                            </table>
                        </div>
                    `
                },
                {
                    id: 'e3',
                    title: "Modal Verbs: Can, Must, Should, May",
                    readTime: "5 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Modal fe'llar qoidalari</h4>
                        <ul class="space-y-3">
                            <li class="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                                <strong class="text-emerald-600">CAN / COULD:</strong> Jismoniy yoki aqliy qobiliyat (I can swim).
                            </li>
                            <li class="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                                <strong class="text-emerald-600">MUST:</strong> Qat'iy burch yoki majburiyat, qonun (You must wear a seatbelt).
                            </li>
                            <li class="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                                <strong class="text-emerald-600">SHOULD:</strong> Maslahat yoki tavsiya (You should drink more water).
                            </li>
                            <li class="p-3 bg-slate-50 dark:bg-slate-800 rounded">
                                <strong class="text-emerald-600">MAY / MIGHT:</strong> Ehtimollik yoki muloyim ruxsat so'rash (May I come in?).
                            </li>
                        </ul>
                    `
                },
                {
                    id: 'e4',
                    title: "Articles: A, An, The ishlatilishi",
                    readTime: "5 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Artikllar qoidasi</h4>
                        <p class="mb-2"><strong>A / An (Noaniq artikl):</strong> Faqat birlikdagi sanaladigan otlar oldidan birinchi marta tilga olinganda.</p>
                        <p class="mb-2"><strong>The (Aniq artikl):</strong> Tinglovchi va so'zlovchiga ma'lum bo'lgan, takroriy yoki dunyoda yagona bo'lgan narsalar oldidan (the Sun, the Moon, the President).</p>
                    `
                },
                {
                    id: 'e5',
                    title: "Common English Idioms (Foydali iboralar)",
                    readTime: "4 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Jonli muloqot iboralari</h4>
                        <ul class="space-y-2">
                            <li class="p-2 border rounded"><strong>A piece of cake</strong> — Juda oson ish (xamirdek oson).</li>
                            <li class="p-2 border rounded"><strong>Break a leg!</strong> — Omad yor bo'lsin! (Imtihondan oldin).</li>
                            <li class="p-2 border rounded"><strong>Once in a blue moon</strong> — Juda kamdan-kam, yilda bir marta.</li>
                            <li class="p-2 border rounded"><strong>Under the weather</strong> — O'zini biroz betob his qilish.</li>
                        </ul>
                    `
                }
            ],
            flashcards: [
                { word: "Perseverance", translation: "Matonat, sabot, qat'iyat", example: "Perseverance is the key to success." },
                { word: "Knowledge", translation: "Bilim, ilm", example: "Knowledge is power." },
                { word: "Opportunity", translation: "Imkoniyat, qulay vaziyat", example: "Don't miss this great opportunity." },
                { word: "Accomplish", translation: "Bajarmoq, erishmoq", example: "You can accomplish anything you want." },
                { word: "Curiosity", translation: "Qiziquvchanlik, intilish", example: "Curiosity fuels learning." }
            ]
        },
        {
            id: 'ona_tili',
            name: 'Ona tili',
            icon: 'fa-book-open',
            color: 'from-amber-500 to-orange-600',
            badgeBg: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
            description: 'Fonetika, orfografiya, morfologiya, sintaksis va nutq madaniyati.',
            lessonsCount: 5,
            topics: [
                {
                    id: 'o1',
                    title: "Fonetika va Imlo qoidalari",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">O'zbek tili fonetikasi va asosiy imlo me'yorlari</h4>
                        <p class="mb-3 leading-relaxed">O'zbek alifbosida 29 ta harf (28 ta tovush bildiruvchi harf va 1 ta harflar birikmasi 'ng') hamda tutuq belgisi mavjud.</p>
                        
                        <div class="p-4 bg-amber-50 dark:bg-amber-950/40 border-l-4 border-amber-500 rounded my-3">
                            <h5 class="font-bold text-amber-800 dark:text-amber-300">Tutuq belgisi (') qoidalari:</h5>
                            <ul class="list-disc pl-5 mt-2 space-y-1 text-sm">
                                <li>Unlidan keyin kelsa, unli tovush cho'ziqroq aytiladi: <em>ta'lim, ma'no, da'vo, e'lon</em>.</li>
                                <li>Undoshdan keyin kelsa, undosh va unli tovushlar ajratib aytiladi: <em>san'at, qat'iy, mas'ul, jur'at</em>.</li>
                            </ul>
                        </div>
                    `
                },
                {
                    id: 'o2',
                    title: "So'z turkumlari: Mustaqil va Yordamchi",
                    readTime: "7 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">So'z turkumlari tasnifi</h4>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
                                <h5 class="font-bold text-orange-600">Mustaqil so'z turkumlari (6 ta):</h5>
                                <ul class="list-disc pl-5 text-sm space-y-1 mt-2">
                                    <li><strong>Ot:</strong> Kim? Nima? Qayer? (kitob, talaba)</li>
                                    <li><strong>Sifat:</strong> Qanday? Qanaqa? (chiroyli, yuksak)</li>
                                    <li><strong>Son:</strong> Nechta? Qancha? (besh, o'ninchi)</li>
                                    <li><strong>Olmosh:</strong> Men, bu, kimdir, har kim</li>
                                    <li><strong>Fe'l:</strong> Nima qildi? (o'qimoq, yozmoq)</li>
                                    <li><strong>Ravish:</strong> Qanday? Qachon? (tez, bugun)</li>
                                </ul>
                            </div>
                            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
                                <h5 class="font-bold text-orange-600">Yordamchi va alohida turkumlar:</h5>
                                <ul class="list-disc pl-5 text-sm space-y-1 mt-2">
                                    <li><strong>Ko'makchi:</strong> bilan, uchun, orqali</li>
                                    <li><strong>Bog'lovchi:</strong> va, ammo, chunki</li>
                                    <li><strong>Yuklama:</strong> -mi, -chi, -gina, hatto</li>
                                    <li><strong>Undov so'zlar:</strong> voy, oh, eh</li>
                                    <li><strong>Taqlid so'zlar:</strong> taq-tuq, yalt-yult</li>
                                    <li><strong>Modal so'zlar:</strong> albatta, ehtimol, shaksiz</li>
                                </ul>
                            </div>
                        </div>
                    `
                },
                {
                    id: 'o3',
                    title: "Sintaksis: Gap bo'laklari",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Bosh va ikkinchi darajali bo'laklar</h4>
                        <p class="mb-3">Gapning ifoda maqsadiga ko'ra turlari: darak, so'roq, buyruq va his-hayajon gaplar.</p>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Ega:</strong> Gapdagi harakat yoki holat bajaruvchisi (Kim? Nima?)</li>
                            <li><strong>Kesim:</strong> Ega haqida hukmni ifodalovchi bosh bo'lak</li>
                            <li><strong>Hol:</strong> Harakatning qayerda, qachon, qanday bajarilishini bildiradi</li>
                            <li><strong>To'ldiruvchi:</strong> Kimni? Nimani? Kimga? Nimaga? so'roqlariga javob</li>
                            <li><strong>Aniqlatuvchi:</strong> Qaysi? Qanday? Nechanchi? so'roqlariga javob</li>
                        </ul>
                    `
                },
                {
                    id: 'o4',
                    title: "Tinish belgilari: Vergul, Chiziqcha, Qo'shtirnoq",
                    readTime: "5 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Tinish belgilarining asosiy qoidalari</h4>
                        <p class="mb-2"><strong>Vergul:</strong> Uyushiq bo'laklar orasida, kirish so'zlar va undalmalarni ajratishda, qo'shma gap tarkibidagi sodda gaplar orasida qo'yiladi.</p>
                        <p class="mb-2"><strong>Tire (—):</strong> Ega va kesim ot yoki son bilan ifodalanganda ular orasiga qo'yiladi. Masalan: <em>"O'zbekiston — kelajagi buyuk davlat."</em></p>
                    `
                },
                {
                    id: 'o5',
                    title: "So'z boyligi: Sinonimlar, Antonimlar, Paronimlar",
                    readTime: "5 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Lug'at boyligi</h4>
                        <ul class="space-y-2">
                            <li class="p-2 border rounded"><strong>Sinonimlar:</strong> Ma'nosi yaqin so'zlar (ulug' — buyuk — yuksak).</li>
                            <li class="p-2 border rounded"><strong>Antonimlar:</strong> Zid ma'noli so'zlar (oq — qora, yosh — qari).</li>
                            <li class="p-2 border rounded"><strong>Paronimlar:</strong> Talaffuzi yaqin, ammo ma'nosi boshqa-boshqa so'zlar (asl — asil, shoh — shox, ta'lim — ta'limot).</li>
                        </ul>
                    `
                }
            ]
        },
        {
            id: 'tarix',
            name: 'Tarix',
            icon: 'fa-landmark',
            color: 'from-rose-500 to-red-600',
            badgeBg: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300',
            description: 'Buyuk allomalar, qadimiy sivilizatsiyalar va mustaqillik yo\'li.',
            lessonsCount: 5,
            topics: [
                {
                    id: 't1',
                    title: "Qadimgi O'zbekiston davlatchiligi",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Ilk davlatchilik o'choqlari</h4>
                        <p class="mb-3 leading-relaxed">O'zbekiston hududida miloddan avvalgi I mingyillikning boshlarida dastlabki davlat birlashmalari shakllangan.</p>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Qadimgi Baqtriya:</strong> Amudaryoning o'rta va yuqori oqimlarida vujudga kelgan, "Ming shahar mamlakati" deb atalgan.</li>
                            <li><strong>Katta Xorazm:</strong> Amudaryoning quyi oqimidagi qadimgi dehqonchilik va madaniyat markazi.</li>
                            <li><strong>Sug'diyona:</strong> Zarafshon va Qashqadaryo vohalarida joylashgan yirik savdo va hunarmandchilik o'chog'i.</li>
                        </ul>
                    `
                },
                {
                    id: 't2',
                    title: "Amir Temur va Temuriylar Renessansi",
                    readTime: "8 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Sohibqiron Amir Temur (1336-1405)</h4>
                        <p class="mb-3 leading-relaxed">1336-yil 9-aprelda Kesh (Shahrisabz) yaqinidagi Xo'ja Ilg'or qishlog'ida tavallud topgan. 1370-yilda Movaronnahrning yagona hukmdori bo'ldi va qudratli markazlashgan davlat barpo etdi.</p>
                        
                        <div class="p-4 bg-rose-50 dark:bg-rose-950/40 border-l-4 border-rose-500 rounded my-3">
                            <h5 class="font-bold text-rose-800 dark:text-rose-300">Amir Temur shiori:</h5>
                            <p class="text-xl italic font-serif text-slate-800 dark:text-slate-100">"Kuch — adolatdadir!"</p>
                            <p class="mt-2 text-sm">U Samarqandni poytaxt etib belgilab, dunyoning eng go'zal shahriga aylantirdi. "Temur tuzuklari" davlat boshqaruvi qonun-qoidalari majmuasidir.</p>
                        </div>
                    `
                },
                {
                    id: 't3',
                    title: "Buyuk Renessans Allomalari",
                    readTime: "7 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Sharq uyg'onish davri daholari</h4>
                        <div class="space-y-3 my-3">
                            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
                                <strong class="text-rose-600">Al-Xorazmiy (783-850):</strong> Algebra fanining asoschisi, algoritmlar nazariyasini yaratgan.
                            </div>
                            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
                                <strong class="text-rose-600">Abu Ali ibn Sino (980-1037):</strong> "Tib qonunlari" asari bilan tibbiyot otasi sifatida jahonga tanilgan.
                            </div>
                            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
                                <strong class="text-rose-600">Mirzo Ulug'bek (1394-1449):</strong> Samarqandda rasadxona qurib, 1018 ta yulduzning aniq koordinatasini tuzgan ("Ziji jadidi Ko'ragoniy").
                            </div>
                            <div class="p-3 bg-slate-50 dark:bg-slate-800 rounded border">
                                <strong class="text-rose-600">Alisher Navoiy (1441-1501):</strong> O'zbek mumtoz adabiyotining sultoni, "Xamsa" (besh doston) muallifi.
                            </div>
                        </div>
                    `
                },
                {
                    id: 't4',
                    title: "O'zbek xonliklari davri (XVI - XIX asr)",
                    readTime: "6 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">Uch xonlik davri</h4>
                        <ul class="list-disc pl-5 space-y-2">
                            <li><strong>Buxoro amirligi:</strong> Mang'itlar sulolasi boshqargan yirik ma'rifiy va madaniy markaz.</li>
                            <li><strong>Xiva xonligi:</strong> Qo'ng'irotlar sulolasi hukmronligi, Ichan-Qal'a me'moriy obidalari.</li>
                            <li><strong>Qo'qon xonligi:</strong> Farg'ona vodiysi va Toshkentni qamrab olgan Ming sulolasi davlati.</li>
                        </ul>
                    `
                },
                {
                    id: 't5',
                    title: "O'zbekiston Mustaqilligi va Yangi Davr",
                    readTime: "5 daqiqa",
                    content: `
                        <h4 class="text-xl font-bold mb-3 text-slate-800 dark:text-slate-100">1991-yil 31-avgust — Tarixiy burilish</h4>
                        <p class="mb-3 leading-relaxed">1991-yil 31-avgustda O'zbekiston Respublikasining davlat mustaqilligi e'lon qilindi va 1-sentyabr Mustaqillik kuni deb belgilandi.</p>
                        <p class="mb-2">1991-yil 18-noyabrda Davlat bayrog'i, 1992-yil 2-iyulda Davlat gerbi, 1992-yil 10-dekabrda Davlat madhiyasi va 1992-yil 8-dekabrda Konstitutsiya qabul qilindi.</p>
                    `
                }
            ]
        }
    ],

    // Fanlar bo'yicha interaktiv test savollari
    quizzes: {
        matematika: [
            {
                id: 'qm1',
                question: "24 va 36 sonlarining Eng Katta Umumiy Bo'luvchisi (EKUB) nechaga teng?",
                options: ["6", "12", "18", "72"],
                correct: 1,
                explanation: "24 = 2³ × 3 va 36 = 2² × 3². Umumiy bo'luvchilarning eng kichik darajalari ko'paytmasi: 2² × 3 = 12."
            },
            {
                id: 'qm2',
                question: "x² - 5x + 6 = 0 kvadrat tenglamaning ildizlarini toping.",
                options: ["x₁ = 2, x₂ = 3", "x₁ = -2, x₂ = -3", "x₁ = 1, x₂ = 6", "x₁ = -1, x₂ = -6"],
                correct: 0,
                explanation: "Viyet teoremasiga ko'ra: x₁ + x₂ = 5 va x₁ × x₂ = 6. Bu sonlar 2 va 3."
            },
            {
                id: 'qm3',
                question: "To'g'ri burchakli uchburchakning katetlari 6 sm va 8 sm bo'lsa, gipotenuzasi necha sm?",
                options: ["9 sm", "10 sm", "12 sm", "14 sm"],
                correct: 1,
                explanation: "Pifagor teoremasi: c² = a² + b² = 6² + 8² = 36 + 64 = 100. c = √100 = 10 sm."
            },
            {
                id: 'qm4',
                question: "Kitobning narxi 50 000 so'm edi. Uning narxi 20% ga oshirildi. Kitobning yangi narxi qancha?",
                options: ["55 000 so'm", "60 000 so'm", "65 000 so'm", "70 000 so'm"],
                correct: 1,
                explanation: "50 000 ning 20% i: 50 000 × 0.20 = 10 000 so'm. Yangi narx: 50 000 + 10 000 = 60 000 so'm."
            },
            {
                id: 'qm5',
                question: "3 ta turli kitobni javonga necha xil usulda ketma-ket joylashtirish mumkin?",
                options: ["3", "6", "9", "12"],
                correct: 1,
                explanation: "O'rin almashtirishlar soni P = 3! = 1 × 2 × 3 = 6."
            },
            {
                id: 'qm6',
                question: "Radiusi 7 sm bo'lgan aylananing uzunligini toping (π ≈ 22/7 deb oling).",
                options: ["22 sm", "44 sm", "88 sm", "154 sm"],
                correct: 1,
                explanation: "L = 2 × π × r = 2 × (22/7) × 7 = 44 sm."
            },
            {
                id: 'qm7',
                question: "Ketma-ketlikning keyingi sonini toping: 2, 4, 8, 16, 32, ... ?",
                options: ["48", "60", "64", "128"],
                correct: 2,
                explanation: "Har bir son oldingisidan 2 barobar ko'payib bormoqda (geometrik progressiya). 32 × 2 = 64."
            },
            {
                id: 'qm8',
                question: "Tenglamani yeching: 3x + 15 = 45",
                options: ["x = 5", "x = 10", "x = 15", "x = 20"],
                correct: 1,
                explanation: "3x = 45 - 15 => 3x = 30 => x = 10."
            }
        ],
        ingliz_tili: [
            {
                id: 'qe1',
                question: "Look! The children ______ football in the school yard.",
                options: ["play", "are playing", "played", "have played"],
                correct: 1,
                explanation: "'Look!' so'zi harakat ayni paytda sodir bo'layotganini ko'rsatadi, shuning uchun Present Continuous (are playing) ishlatiladi."
            },
            {
                id: 'qe2',
                question: "Yesterday she ______ a letter to her grandmother.",
                options: ["writes", "written", "wrote", "was write"],
                correct: 2,
                explanation: "'Yesterday' o'tgan zamon ko'rsatkichi bo'lib, 'write' fe'lining o'tgan zamon shakli (V2) 'wrote' dir."
            },
            {
                id: 'qe3',
                question: "You ______ stop when the traffic light turns red. It is the law.",
                options: ["must", "might", "may", "should"],
                correct: 0,
                explanation: "Qonun-qoidalar va qat'iy majburiyat uchun 'must' modal fe'li ishlatiladi."
            },
            {
                id: 'qe4',
                question: "Choose the correct idiom meaning: 'A piece of cake'.",
                options: ["Very delicious food", "Something very easy", "A birthday gift", "A difficult puzzle"],
                correct: 1,
                explanation: "'A piece of cake' ingliz tilida 'juda oson, qiyinchiliksiz ish' degan ma'noni bildiradi."
            },
            {
                id: 'qe5',
                question: "______ Sun rises in ______ east.",
                options: ["A / an", "The / an", "The / the", "A / the"],
                correct: 2,
                explanation: "Dunyoda yagona bo'lgan tabiiy jismlar (The Sun) va dunyo tomonlari (the east) oldidan 'the' aniq artikli qo'yiladi."
            },
            {
                id: 'qe6',
                question: "What is the opposite (antonym) of 'generous'?",
                options: ["Kind", "Stingy (mean)", "Helpful", "Honest"],
                correct: 1,
                explanation: "'Generous' — saxiy, uning aksi 'stingy' yoki 'mean' — xasis, baxil demakdir."
            },
            {
                id: 'qe7',
                question: "He has been living in Tashkent ______ 2018.",
                options: ["for", "since", "during", "ago"],
                correct: 1,
                explanation: "Aniq boshlanish vaqti (yil, sana) ko'rsatilganda 'since' ishlatiladi."
            },
            {
                id: 'qe8',
                question: "If I ______ enough money, I would travel around the world.",
                options: ["have", "had", "will have", "would have"],
                correct: 1,
                explanation: "Second Conditional qoidasi: If + Past Simple (had), would + verb."
            }
        ],
        ona_tili: [
            {
                id: 'qo1',
                question: "Qaysi qatorda tutuq belgisi to'g'ri ishlatilgan?",
                options: ["Surat'", "Ta'lim", "Bah'or", "Kit'ob"],
                correct: 1,
                explanation: "'Ta'lim' so'zida unlidan keyin tutuq belgisi kelib, 'a' tovushining cho'ziqroq aytilishini ta'minlaydi."
            },
            {
                id: 'qo2',
                question: "'O'qituvchi yangi mavzuni doskaga chiroyli yozdi' gapida 'chiroyli' so'zi qaysi gap bo'lagi?",
                options: ["Ega", "Kesim", "Hol", "To'ldiruvchi"],
                correct: 2,
                explanation: "Fe'lga bog'lanib, harakatning qanday bajarilganini bildirgan bo'lak hol (tarz holi) hisoblanadi."
            },
            {
                id: 'qo3',
                question: "Qaysi qatorda faqat mustaqil so'z turkumlari berilgan?",
                options: ["Ot, sifat, ko'makchi", "Fe'l, ravish, son", "Bog'lovchi, yuklama, ot", "Olmosh, modal so'z, fe'l"],
                correct: 1,
                explanation: "Fe'l, ravish va son — ma'noli, gap bo'lagi bo'la oladigan mustaqil so'z turkumlaridir."
            },
            {
                id: 'qo4',
                question: "'Asl' va 'Asil' so'zlari qanday so'zlar hisoblanadi?",
                options: ["Sinonimlar", "Antonimlar", "Paronimlar", "Omonimlar"],
                correct: 2,
                explanation: "Yozilishi va aytilishi bir-biriga yaqin, ammo ma'nolari butunlay boshqa bo'lgan so'zlar paronimlar deyiladi."
            },
            {
                id: 'qo5',
                question: "Qaysi qatorda imloviy jihatdan xato yozilgan so'z bor?",
                options: ["Tashabbus", "Harakat", "Muhim", "Intizomliylik"],
                correct: 3,
                explanation: "To'g'ri shakli — 'intizomlilik' bo'ladi, 'y' orttirilishi imlo xatosi hisoblanadi."
            },
            {
                id: 'qo6',
                question: "'Vatan sajdagoh kabi muqaddasdir' gapida ega qaysi so'z?",
                options: ["Vatan", "Sajdagoh", "Kabi", "Muqaddasdir"],
                correct: 0,
                explanation: "Nima muqaddas? — Vatan. Gapning egasi 'Vatan' so'zidir."
            },
            {
                id: 'qo7',
                question: "Qaysi so'zda unli tovush cho'ziq talaffuz qilinadi?",
                options: ["San'at", "Da'vo", "Qat'iy", "Mas'ul"],
                correct: 1,
                explanation: "'Da'vo' so'zida tutuq belgisi unlidan keyin kelgani sababli 'a' cho'ziq talaffuz qilinadi."
            },
            {
                id: 'qo8',
                question: "Quyidagilardan qaysi biri qo'shma gap hisoblanadi?",
                options: [
                    "Bahor keldi va daraxtlar gulladi.",
                    "Ali va Vali darsga birga keldilar.",
                    "Ular kitobni o'qib, topshiriqni yakunladilar.",
                    "Maktab hovlisida bolalar shodon o'ynashmoqda."
                ],
                correct: 0,
                explanation: "'Bahor keldi' va 'daraxtlar gulladi' — ikkita mustaqil grammatik asosga (ega-kesim) ega qo'shma gap."
            }
        ],
        tarix: [
            {
                id: 'qt1',
                question: "Amir Temur qachon va qayerda tavallud topgan?",
                options: [
                    "1336-yil 9-aprelda Xo'ja Ilg'or qishlog'ida",
                    "1340-yil 1-mayda Samarqandda",
                    "1320-yil 12-fevralda Buxoroda",
                    "1350-yil 9-aprelda Keshda"
                ],
                correct: 0,
                explanation: "Sohibqiron Amir Temur 1336-yil 9-aprelda Kesh (Shahrisabz) yaqinidagi Xo'ja Ilg'or qishlog'ida dunyoga kelgan."
            },
            {
                id: 'qt2',
                question: "'Tib qonunlari' shoh asari muallifi kim?",
                options: ["Al-Xorazmiy", "Mirzo Ulug'bek", "Abu Ali ibn Sino", "Abu Rayhon Beruniy"],
                correct: 2,
                explanation: "Tibbiyot olamining buyuk dahosi Abu Ali ibn Sino 'Al-Qonun fit-tibb' asari muallifidir."
            },
            {
                id: 'qt3',
                question: "Samarqandda mashhur rasadxona qurdirgan olim va hukmdor kim?",
                options: ["Bobur mirzo", "Mirzo Ulug'bek", "Shohruh mirzo", "Husayn Boyqaro"],
                correct: 1,
                explanation: "Mirzo Ulug'bek 1424-1429-yillarda Samarqandda noyob rasadxona qurdirib, 1018 ta yulduz jadvalini tuzgan."
            },
            {
                id: 'qt4',
                question: "O'zbekiston Respublikasining davlat mustaqilligi qachon e'lon qilingan?",
                options: ["1990-yil 20-iyun", "1991-yil 31-avgust", "1991-yil 8-dekabr", "1992-yil 1-sentyabr"],
                correct: 1,
                explanation: "1991-yil 31-avgust kuni Oliy Kengashning navbatdan tashqari sessiyasida O'zbekiston mustaqilligi e'lon qilingan."
            },
            {
                id: 'qt5',
                question: "Amir Temur davlatining shiori nima bo'lgan?",
                options: ["Kuch — boylikda", "Kuch — adolatdadir", "Ilm — najotdir", "Birlik — qudrat"],
                correct: 1,
                explanation: "Amir Temurning davlatchilik bosh shiori va uzuklariga o'yib yozilgan hikmati 'Kuch — adolatdadir' bo'lgan."
            },
            {
                id: 'qt6',
                question: "Qadimgi dunyoda 'Ming shahar mamlakati' deb qaysi davlat atalgan?",
                options: ["Sug'diyona", "Qadimgi Baqtriya", "Xorazm", "Parfiya"],
                correct: 1,
                explanation: "Qadimgi yunon-rim manbalarida Baqtriya o'zining ko'p sonli mustahkam qal'alari uchun 'Ming shahar mamlakati' deyilgan."
            },
            {
                id: 'qt7',
                question: "O'zbek adabiy tilining asoschisi, besh dostondan iborat 'Xamsa' muallifi kim?",
                options: ["Alisher Navoiy", "Zahiriddin Muhammad Bobur", "Ahmad Yassaviy", "Lutfiy"],
                correct: 0,
                explanation: "Hazrat Alisher Navoiy turkiy tilda birinchi bo'lib buyuk 'Xamsa'ni yaratgan."
            },
            {
                id: 'qt8',
                question: "O'zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
                options: ["1991-yil 1-sentyabr", "1992-yil 8-dekabr", "1993-yil 1-yanvar", "1992-yil 2-iyul"],
                correct: 1,
                explanation: "O'zbekiston Konstitutsiyasi 1992-yil 8-dekabrda qabul qilingan."
            }
        ]
    },

    // Masalalar va mantiqiy jumboqlar
    problems: [
        {
            id: 'p1',
            subject: 'matematika',
            category: 'Mantiqiy masala',
            difficulty: 'Oson',
            points: 20,
            title: "Uch kishi va baliq ovi",
            description: "Ota va ikki o'g'il baliq oviga bordilar. Har biri bittadan baliq tutdi. Uyga qaytgach qarashsa, jami 3 ta emas, 2 ta baliq bor ekan. Lekin hech kim baliqni yo'qotmagan. Bu qanday bo'lishi mumkin?",
            questionText: "U yerda nechta odam bo'lgan edi?",
            hint: "Oila a'zolarining qarindoshlik darajasiga e'tibor bering (bobo, ota, nevara).",
            answer: "2",
            acceptableAnswers: ["2", "2 ta", "ikki", "ikkitasi"],
            explanation: "U yerda aslida 2 kishi emas, baliq oviga Bobo, uning o'g'li va nevarasi borgan — jami 3 avlod. Shunda bobo ota bo'ladi, o'g'il ham ota, ham o'g'il bo'ladi, nevara esa o'g'il bo'ladi. Jami 2 nafar ota va 2 nafar o'g'il bor, lekin kishilar soni 3 ta. Agar ular 3 ta baliq tutgan bo'lsa va 2 kishi borgan deb o'ylansa, bu jumboq: Bobo, Ota, O'g'il (3 kishi) 3 ta baliq tutadi. Savolda esa 'nechta odam 2 ta baliq olib kelgan' deyilsa: Ota va uning o'g'li (2 kishi) bor bo'lsa, javob: 2 nafar kishi (biri ota, biri o'g'il bo'lgan)."
        },
        {
            id: 'p2',
            subject: 'matematika',
            category: 'Arifmetika',
            difficulty: 'O\'rta',
            points: 30,
            title: "Chipta va konfetlar narxi",
            description: "Bitta daftar va bitta qalam birgalikda 11 000 so'm turadi. Daftar qalamdan 10 000 so'm qimmatroq. Qalamning narxi qancha?",
            questionText: "Qalamning narxini raqamda kiriting (so'mda):",
            hint: "Daftar narxini x, qalam narxini y deb olib tenglama tuzing: x + y = 11000 va x - y = 10000.",
            answer: "500",
            acceptableAnswers: ["500", "500 so'm", "500 som"],
            explanation: "Qalam = y bo'lsa, Daftar = y + 10000. Yig'indi: y + y + 10000 = 11000 => 2y = 1000 => y = 500 so'm. Daftar esa 10 500 so'm bo'ladi. Ko'pchilik adashib 1000 so'm deb o'ylaydi!"
        },
        {
            id: 'p3',
            subject: 'matematika',
            category: 'Geometriya va tezlik',
            difficulty: 'Qiyin',
            points: 50,
            title: "Shilliqqurt va ustun",
            description: "Balandligi 10 metr bo'lgan ustun bo'ylab shilliqqurt yuqoriga o'rmalab chiqmoqda. U kunduzi 3 metr yuqoriga ko'tariladi, kechasi esa uxlab 2 metr pastga sirg'alib tushadi. Shilliqqurt ustunning eng yuqori cho'qqisiga nechanchi kuni yetib boradi?",
            questionText: "Nechanchi kuni cho'qqiga chiqadi? (kun sonini yozing)",
            hint: "Oxirgi kunda shilliqqurt tepaga chiqsa, ortga sirg'alib tushmaydi!",
            answer: "8",
            acceptableAnswers: ["8", "8-kuni", "8 kun", "sakkizinchi"],
            explanation: "Har bir sutkada (kunduz + tun) u 1 metr yuqoriga siljiydi (3 - 2 = 1). 7 sutkadan keyin u 7 metr balandlikda bo'ladi. 8-kuni kunduzi u 3 metr ko'tariladi va 7 + 3 = 10 metrga, ya'ni cho'qqiga yetib boradi!"
        },
        {
            id: 'p4',
            subject: 'ona_tili',
            category: 'Lug\'at va mantiq',
            difficulty: 'Oson',
            points: 20,
            title: "Paronim juftlik",
            description: "'U o'z sohasining haqiqiy ... (asl / asil) mutaxassisi' gapida nuqtalar o'rniga qaysi so'z qo'yilishi kerak?",
            questionText: "To'g'ri so'zni yozing:",
            hint: "'Asl' — haqiqiy, tub ma'nosida; 'Asil' — qimmatbaho, zotli, olijanob ma'nosida ishlatiladi.",
            answer: "asl",
            acceptableAnswers: ["asl", "Asl"],
            explanation: "'Asl mutaxassis' — haqiqiy, chinakam mutaxassis degan ma'noni beradi. 'Asil' esa dur-gavhar, metall yoki naslli otlarga nisbatan (asil mato, asil zot) ishlatiladi."
        },
        {
            id: 'p5',
            subject: 'ingliz_tili',
            category: 'Grammar riddle',
            difficulty: 'O\'rta',
            points: 30,
            title: "Tense puzzle",
            description: "Put the verb in bracket into the correct form: 'I have never ______ (see) such a wonderful place before.'",
            questionText: "Write the correct past participle form:",
            hint: "Present Perfect zamonida 'see' fe'lining 3-shakli (V3) ishlatiladi.",
            answer: "seen",
            acceptableAnswers: ["seen", "Seen"],
            explanation: "'See' fe'lining uchta shakli: see - saw - seen. Present Perfect formulasida have/has + V3 bo'lgani sababli 'seen' bo'ladi."
        },
        {
            id: 'p6',
            subject: 'tarix',
            category: 'Tarixiy jumboq',
            difficulty: 'O\'rta',
            points: 35,
            title: "Buyuk davlat asoschisi",
            description: "1370-yilda Movaronnahrda hokimiyatni qo'lga olgan, 35 yil hukmronlik qilgan va 'Kuch — adolatdadir' shiorini davlat siyosatiga aylantirgan sarkarda kim?",
            questionText: "Sarkardaning ismini yozing:",
            hint: "Samarqandni jahonning eng ko'rkam poytaxtiga aylantirgan Sohibqiron.",
            answer: "Amir Temur",
            acceptableAnswers: ["Amir Temur", "amir temur", "Temur", "Temurbek", "Sohibqiron"],
            explanation: "Sohibqiron Amir Temur 1370-yildan 1405-yilgacha hukmronlik qilib, qudratli markazlashgan davlat barpo etgan."
        }
    ],

    // Kundalik topshiriqlar ro'yxati
    dailyTasks: [
        {
            id: 'dt1',
            title: "Matematikadan 5 ta test yechish",
            xp: 25,
            coins: 10,
            category: "matematika",
            icon: "fa-calculator",
            target: 5,
            current: 0,
            completed: false
        },
        {
            id: 'dt2',
            title: "Ingliz tilidan 3 ta yangi dars o'qish",
            xp: 20,
            coins: 10,
            category: "ingliz_tili",
            icon: "fa-language",
            target: 3,
            current: 0,
            completed: false
        },
        {
            id: 'dt3',
            title: "1 ta mantiqiy masala yechish",
            xp: 30,
            coins: 15,
            category: "masalalar",
            icon: "fa-lightbulb",
            target: 1,
            current: 0,
            completed: false
        },
        {
            id: 'dt4',
            title: "Tarixdan 1 ta test sinovidan o'tish",
            xp: 25,
            coins: 10,
            category: "tarix",
            icon: "fa-landmark",
            target: 1,
            current: 0,
            completed: false
        },
        {
            id: 'dt5',
            title: "Ona tilidan imlo qoidalarini takrorlash",
            xp: 20,
            coins: 10,
            category: "ona_tili",
            icon: "fa-book-open",
            target: 1,
            current: 0,
            completed: false
        }
    ],

    // Foydalanuvchi yutuqlari (Badges)
    badges: [
        {
            id: 'first_step',
            title: "Ilk qadam",
            description: "Birinchi testni muvaffaqiyatli yakunladingiz",
            icon: "fa-shoe-prints",
            color: "text-amber-500 bg-amber-100 dark:bg-amber-950",
            unlocked: true
        },
        {
            id: 'math_wizard',
            title: "Matematik daho",
            description: "Matematikadan 100% natija qayd eting",
            icon: "fa-square-root-variable",
            color: "text-blue-500 bg-blue-100 dark:bg-blue-950",
            unlocked: false
        },
        {
            id: 'polyglot',
            title: "Poliglot",
            description: "Ingliz tilidagi barcha savollarga to'g'ri javob bering",
            icon: "fa-earth-americas",
            color: "text-emerald-500 bg-emerald-100 dark:bg-emerald-950",
            unlocked: false
        },
        {
            id: 'historian',
            title: "Tarix bilimdoni",
            description: "Tarix fanidan barcha dars va testlarni o'zlashtiring",
            icon: "fa-landmark",
            color: "text-rose-500 bg-rose-100 dark:bg-rose-950",
            unlocked: false
        },
        {
            id: 'problem_solver',
            title: "Zukko mantiqchi",
            description: "Kamida 3 ta qiyin masalani to'g'ri yeching",
            icon: "fa-brain",
            color: "text-purple-500 bg-purple-100 dark:bg-purple-950",
            unlocked: false
        },
        {
            id: 'streak_master',
            title: "Matonatli talaba",
            description: "Ketma-ket 5 kunlik faollik ko'rsatkichi",
            icon: "fa-fire",
            color: "text-orange-500 bg-orange-100 dark:bg-orange-950",
            unlocked: false
        }
    ],

    // Reytingdagi yetakchilar (Leaderboard)
    leaderboard: [
        { rank: 1, name: "Jasurbek Aliyev", school: "Toshkent sh., 1-IDUM", xp: 3450, tests: 42, badge: "Oltin", avatar: "👨‍🎓" },
        { rank: 2, name: "Madina Karimova", school: "Samarqand sh., 14-maktab", xp: 3120, tests: 39, badge: "Kumush", avatar: "👩‍🎓" },
        { rank: 3, name: "Behzod Rahimov", school: "Buxoro sh., Qorako'l litseyi", xp: 2980, tests: 36, badge: "Bronza", avatar: "🧑‍💻" },
        { rank: 4, name: "Diyora Rustamova", school: "Farg'ona sh., 2-maktab", xp: 2750, tests: 32, badge: "Top 5", avatar: "👩‍🏫" },
        { rank: 5, name: "Otabek Saidov", school: "Namangan sh., Prezident maktabi", xp: 2610, tests: 30, badge: "Top 5", avatar: "👨‍🔬" },
        { rank: 6, name: "Sardor Yusupov", school: "Andijon sh., 5-maktab", xp: 2420, tests: 28, badge: "A'lochi", avatar: "🧑‍🎓" },
        { rank: 7, name: "Gulnoza Ergasheva", school: "Qashqadaryo, Qarshi sh.", xp: 2280, tests: 25, badge: "A'lochi", avatar: "👩‍💼" }
    ],

    // Motivatsion iqtiboslar
    quotes: [
        { text: "Ilm o'rganish igna bilan quduq qazish kabidir.", author: "O'zbek xalq maqoli" },
        { text: "Kuch — adolatdadir!", author: "Sohibqiron Amir Temur" },
        { text: "Bilim — eng buyuk xazina, unga ega bo'lgan kishi hech qachon qashshoqlashmaydi.", author: "Abu Ali ibn Sino" },
        { text: "Harakatda — barakat. Har bir intilishingiz yangi ufq ochadi.", author: "Alisher Navoiy" },
        { text: "Matematika barcha fanlarning shohi va xizmatkoridir.", author: "Karl Gauss" }
    ]
};
