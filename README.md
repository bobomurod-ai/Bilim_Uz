# Bilim_Uz — Zamonaviy Interaktiv Ta'lim Platformasi

**Bilim_Uz** — o'quvchilar va talabalar uchun mo'ljallangan, bilim darajasini oshirish, fanlarni mustaqil o'zlashtirish, testlar va muammoli masalalar yechish orqali reytingda yuqorilash imkonini beruvchi interaktiv ta'lim tizimi.

---

## 🌟 Asosiy Menyular va Imkoniyatlar:

1. **Bosh sahifa (Dashboard)**:
   - Shaxsiy salomlashish va bugungi kunlik ko'rsatkichlar.
   - O'quvchi faollik zanjiri (**Streak** — har kuni kirish davomiyligi).
   - Motivatsion iqtiboslar (O'zbek va jahon allomalari hikmatlari).
   - Fanlar bo'yicha tezkor o'tish bloklari.
   - Umumiy statistika (XP, Testlar soni, Reytingdagi o'rin).

2. **Fanlar (Darsliklar va Konspektlar)**:
   - **Matematika**: Tub va murakkab sonlar, EKUB/EKUK, tenglamalar, foizlar, Pifagor teoremasi, formulalar.
   - **Ingliz tili**: Zamonlar (Present Simple / Continuous), Noto'g'ri fe'llar, Modal fe'llar, Foydali iboralar.
   - **Ona tili**: Fonetika va tutuq belgisi, So'z turkumlari, Gap bo'laklari, Imlo va tinish belgilari.
   - **Tarix**: Qadimgi Baqtriya va Sug'd, Sohibqiron Amir Temur, Renessans allomalari, O'zbekiston mustaqilligi.

3. **Kundalik topshiriqlar**:
   - Har kuni beriladigan vazifalar (Test yechish, dars o'qish, masala tahlili).
   - Vazifani bajarganda real vaqtda **XP (tajriba)** va **Tangalar** mukofoti.
   - Bajarilganlik progress bari.

4. **Testlar fanlar bo'yicha**:
   - Matematika, Ingliz tili, Ona tili va Tarix bo'yicha maxsus test savollari.
   - Jonli 30 soniyalik dinamik taymer.
   - Savolga javob berilgach, darhol to'g'ri/xato ekanligini ko'rsatish va to'liq ilmiy tushuntirish berish.
   - Test yakunida batafsil tahlil: foiz, to'g'ri/xatolar soni, xatolar ustida ishlash bo'limi.
   - Real audio effektlar (Web Audio API orqali).
   - Konfetti animatsiyasi (yuqori ball to'planganda).

5. **Masalalar**:
   - Fanlar bo'yicha mantiqiy va noan'anaviy boshqotirmalar.
   - Filtrlar (Barchasi, Matematika, Ingliz tili, Ona tili, Tarix).
   - "Maslahat (Hint) olish" imkoniyati.
   - Foydalanuvchi javob kiritish inputi va tekshirish tizimi.
   - To'liq yechim algoritmi.

6. **Natijalar**:
   - Umumiy statistika (Topshirilgan testlar, o'rtacha foiz %, yechilgan savollar soni).
   - Chart.js asosidagi interaktiv fanlar o'zlashtirish grafiklari.
   - O'tgan barcha testlar sanasi va natijalarining to'liq tarixi.

7. **Reyting**:
   - Top o'quvchilar podiumi (1, 2, 3-o'rinlar maxsus tojlari bilan).
   - Butun respublika o'quvchilari o'rtasidagi umumiy reyting ro'yxati.
   - O'quvchining o'z o'rni va boshqalarga nisbatan natijalari.

8. **Profil**:
   - Ism, familiya va maktab/sinf ma'lumotlarini kiritish/tahrirlash.
   - Qiziqarli o'quvchi avatarlarini tanlash.
   - Daraja (Level) va XP ko'rsatkichi (Boshlang'ichdan Allomagacha).
   - Qo'lga kiritilgan maxsus nishonlar (Badges) galereyasi.
   - **Rasmiy Muvaffaqiyat Sertifikati**ni generatsiya qilish va bir tugma bilan Chop etish / PDF qilib saqlash!

---

## 🚀 Ishga Tushirish:

### 1-usul (Tavsiya etiladi - Python orqali):
Terminalda loyiha jildiga o'tib quyidagi buyruqni bering:
```bash
python run.py
```
Dastur avtomatik ravishda standart brauzeringizda `http://localhost:8000` manzilida ochiladi!

### 2-usul (Windows `start.bat` orqali):
`d:\Bilim_Uz\start.bat` fayliga sichqoncha bilan ikki marta bosing.

### 3-usul (To'g'ridan-to'g'ri brauzerda):
`d:\Bilim_Uz\index.html` faylini Google Chrome, Microsoft Edge yoki istalgan brauzerda oching.

---

## 🎨 Dizayn va Texnologiyalar:
- **HTML5 & CSS3**: Zamonaviy responsive dizayn (kompyuter, planshet va mobil telefonlarga to'liq mos).
- **Tailwind CSS**: Chiroyli va toza UI komponentlar.
- **JavaScript (ES6+)**: SPA arxitekturasi, modulli tuzilma, dinamik test va tahlil tizimi.
- **Web Audio API**: Tashqi audio fayllarsiz tabiiy tovushlar (to'g'ri/noto'g'ri javob, g'alaba fanfari, chertish).
- **Chart.js**: Natijalar tahlili uchun jonli diagrammalar.
- **Canvas Confetti**: Yutuqlar va g'alabalar uchun bayramona animatsiyalar.
- **Dark / Light Mode**: Tungi va kunduzgi rejimni bitta tugma bilan almashtirish.
- **LocalStorage**: Barcha natijalar, profil sozlamalari, kunlik topshiriqlar brauzer xotirasida xavfsiz saqlanadi.
