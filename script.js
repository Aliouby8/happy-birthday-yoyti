// التحميل المسبق لجميع الصور لضمان ظهورها فوراً بدون تأخير أو تحميل
const allImagesToPreload = [
    'memory.jpg', 'cry.jpg', 'love.jpg', 'principe.jpg',
    'things.jpg', 'movies.png', 'apology.jpg',
    'photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg'
];

allImagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
});

// الشاشات
const birthdayScreen = document.getElementById('birthday-screen');
const videoScreen = document.getElementById('video-screen');
const teaserScreen = document.getElementById('teaser-screen');
const memoryScreen = document.getElementById('memory-screen');
const cryScreen = document.getElementById('cry-screen');
const loveScreen = document.getElementById('love-screen');
const principeScreen = document.getElementById('principe-screen');
const thingsScreen = document.getElementById('things-screen');
const moviesScreen = document.getElementById('movies-screen');
const bestYearsScreen = document.getElementById('best-years-screen');
const askScreen = document.getElementById('ask-screen');
const confirmScreen = document.getElementById('confirm-screen');
const dateScreen = document.getElementById('date-screen');
const apologyScreen = document.getElementById('apology-screen');
const placeScreen = document.getElementById('place-screen');
const foodScreen = document.getElementById('food-screen');
const finalScreen = document.getElementById('final-screen');

// عناصر الزينة
const bgDecorations = document.getElementById('bg-decorations');

// الزراير العامة
const nextBtn = document.getElementById('next-btn');
const videoNextBtn = document.getElementById('video-next-btn');
const teaserNextBtn = document.getElementById('teaser-next-btn');
const memoryNextBtn = document.getElementById('memory-next-btn');
const cryNextBtn = document.getElementById('cry-next-btn');
const loveNextBtn = document.getElementById('love-next-btn');
const principeNextBtn = document.getElementById('principe-next-btn');
const thingsNextBtn = document.getElementById('things-next-btn');
const moviesNextBtn = document.getElementById('movies-next-btn');
const bestYearsNextBtn = document.getElementById('best-years-next-btn');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const confirmNextBtn = document.getElementById('confirm-next-btn');
const dateNextBtn = document.getElementById('date-next-btn');
const apologyNextBtn = document.getElementById('apology-next-btn');
const dateOptionBtns = document.querySelectorAll('.date-option-btn');

// عناصر شاشة المكان
const placeOptionBtns = document.querySelectorAll('.place-option-btn');
const customOptionBtn = document.getElementById('custom-option-btn');
const customPlaceContainer = document.getElementById('custom-place-container');
const customPlaceInput = document.getElementById('custom-place-input');
const placeNextBtn = document.getElementById('place-next-btn');

// عناصر شاشة الأكل
const foodOptionBtns = document.querySelectorAll('.food-option-btn');
const customFoodOptionBtn = document.getElementById('custom-food-option-btn');
const customFoodContainer = document.getElementById('custom-food-container');
const customFoodInput = document.getElementById('custom-food-input');
const foodNextBtn = document.getElementById('food-next-btn');

// عناصر الشاشة النهائية والملخص
const summaryDate = document.getElementById('summary-date');
const summaryPlace = document.getElementById('summary-place');
const summaryFood = document.getElementById('summary-food');
const whatsappBtn = document.getElementById('whatsapp-btn');

// الصوت والفيديو
const birthdayVideo = document.getElementById('birthday-video');
const bgMusic = document.getElementById('bg-music');

// أسماء الصور
const photosList = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg'];

// متغيرات لحفظ الاختيارات
let selectedDate = null;
let selectedPlace = null;
let selectedFood = null;

// 1. من التهنئة الأولى ⬅️ شاشة الفيديو
nextBtn.addEventListener('click', () => {
    launchConfetti();
    launchBalloons();

    birthdayScreen.classList.add('hidden');
    videoScreen.classList.remove('hidden');
    
    birthdayVideo.play().catch(e => console.log('خطأ في تشغيل الفيديو:', e));
});

// دالة إطلاق فرقعة الألوان (الكونفيتي)
function launchConfetti() {
    if (typeof confetti === 'function') {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 50,
                angle: 60,
                spread: 55,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 50,
                angle: 120,
                spread: 55,
                origin: { x: 1 }
            });
        }, 250);
    }
}

// دالة الألعاب النارية لصفحة الاتفاق النهائية (Fireworks)
function launchFireworks() {
    if (typeof confetti === 'function') {
        var duration = 3.5 * 1000;
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        var interval = setInterval(function() {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random() * 0.4 + 0.1, y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: Math.random() * 0.4 + 0.5, y: Math.random() - 0.2 } }));
        }, 250);
    }
}

// دالة طيران البلالين
function launchBalloons() {
    const balloonCount = 22;
    
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.innerText = '🎈';

        const startX = Math.random() * 95;
        const duration = 4 + Math.random() * 3.5;
        const delay = Math.random() * 1.2;
        const size = 32 + Math.random() * 28;
        const hue = Math.floor(Math.random() * 360);

        balloon.style.left = `${startX}vw`;
        balloon.style.animationDuration = `${duration}s`;
        balloon.style.animationDelay = `${delay}s`;
        balloon.style.fontSize = `${size}px`;
        balloon.style.filter = `hue-rotate(${hue}deg)`;

        document.body.appendChild(balloon);

        setTimeout(() => {
            balloon.remove();
        }, (duration + delay) * 1000);
    }
}

// تفعيل زرار Happy Birthday تلقائياً فور انتهاء الفيديو
birthdayVideo.addEventListener('ended', enableVideoNextBtn);
birthdayVideo.addEventListener('timeupdate', () => {
    if (birthdayVideo.duration && birthdayVideo.currentTime >= birthdayVideo.duration - 0.5) {
        enableVideoNextBtn();
    }
});

function enableVideoNextBtn() {
    videoNextBtn.disabled = false;
    videoNextBtn.classList.remove('dimmed-btn');
}

// 2. من شاشة الفيديو ⬅️ شاشة الاشتغالة
videoNextBtn.addEventListener('click', () => {
    birthdayVideo.pause();
    videoScreen.classList.add('hidden');
    
    bgDecorations.classList.remove('hidden');
    launchConfetti();

    teaserScreen.classList.remove('hidden');
    bgMusic.play().catch(e => console.log('خطأ في تشغيل الموسيقى:', e));
});

// 3. من شاشة الاشتغالة ⬅️ فاكرة؟
teaserNextBtn.addEventListener('click', () => {
    teaserScreen.classList.add('hidden');
    memoryScreen.classList.remove('hidden');
});

// 4. من فاكرة ⬅️ لما خلتيني أعيط
memoryNextBtn.addEventListener('click', () => {
    memoryScreen.classList.add('hidden');
    cryScreen.classList.remove('hidden');
});

// 5. من لما خلتيني أعيط ⬅️ وأنا كمان بموت فيكي
cryNextBtn.addEventListener('click', () => {
    cryScreen.classList.add('hidden');
    loveScreen.classList.remove('hidden');
});

// 6. من وأنا كمان بموت فيكي ⬅️ Principe Azzurro
loveNextBtn.addEventListener('click', () => {
    loveScreen.classList.add('hidden');
    principeScreen.classList.remove('hidden');
});

// 7. من Principe Azzurro ⬅️ الحاجات اللي عملناها مع بعض
principeNextBtn.addEventListener('click', () => {
    principeScreen.classList.add('hidden');
    thingsScreen.classList.remove('hidden');
});

// 8. من الحاجات اللي عملناها مع بعض ⬅️ كمية الأفلام
thingsNextBtn.addEventListener('click', () => {
    thingsScreen.classList.add('hidden');
    moviesScreen.classList.remove('hidden');
});

// 9. من كمية الأفلام ⬅️ أحلى سنتين ونص
moviesNextBtn.addEventListener('click', () => {
    moviesScreen.classList.add('hidden');
    bestYearsScreen.classList.remove('hidden');
    
    setTimeout(dropPhotos, 300);
});

// 10. من أحلى سنتين ونص ⬅️ طلب الخروج
bestYearsNextBtn.addEventListener('click', () => {
    bestYearsScreen.classList.add('hidden');
    askScreen.classList.remove('hidden');
    
    noBtn.style.pointerEvents = 'none';
    setTimeout(() => {
        noBtn.style.pointerEvents = 'auto';
    }, 400);
});

// حركة هروب زرار "لا"
function moveNoButton() {
    noBtn.style.position = 'fixed';
    noBtn.style.zIndex = '9999';

    const padding = 20;
    const maxX = window.innerWidth - noBtn.offsetWidth - padding;
    const maxY = window.innerHeight - noBtn.offsetHeight - padding;

    const x = Math.max(padding, Math.floor(Math.random() * maxX));
    const y = Math.max(padding, Math.floor(Math.random() * maxY));

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);

// 11. من الطلب (زرار أكيد) ⬅️ شاشة تأكيد الموافقة
yesBtn.addEventListener('click', () => {
    askScreen.classList.add('hidden');
    confirmScreen.classList.remove('hidden');
    launchConfetti();
});

// 12. من تأكيد الموافقة (It's a date) ⬅️ شاشة اختيار اليوم
confirmNextBtn.addEventListener('click', () => {
    confirmScreen.classList.add('hidden');
    dateScreen.classList.remove('hidden');
});

// اختيار اليوم وتفعيل زرار "تمام"
dateOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        dateOptionBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        
        selectedDate = btn.innerText.trim();
        
        dateNextBtn.disabled = false;
        dateNextBtn.classList.remove('dimmed-btn');
    });
});

// 13. من اختيار اليوم (زرار تمام) ⬅️ شاشة الاعتذار
dateNextBtn.addEventListener('click', () => {
    dateScreen.classList.add('hidden');
    apologyScreen.classList.remove('hidden');
});

// 14. من شاشة الاعتذار (زرار ولا يهمك) ⬅️ شاشة اختيار المكان
apologyNextBtn.addEventListener('click', () => {
    apologyScreen.classList.add('hidden');
    placeScreen.classList.remove('hidden');
});

// اختيار المكان وتفعيل زرار "حلو"
placeOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        placeOptionBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        if (btn === customOptionBtn) {
            customPlaceContainer.classList.remove('hidden');
            customPlaceInput.focus();

            if (customPlaceInput.value.trim() !== '') {
                selectedPlace = customPlaceInput.value.trim();
                enablePlaceNextBtn();
            } else {
                disablePlaceNextBtn();
            }
        } else {
            customPlaceContainer.classList.add('hidden');
            selectedPlace = btn.innerText.trim();
            enablePlaceNextBtn();
        }
    });
});

customPlaceInput.addEventListener('input', () => {
    if (customPlaceInput.value.trim() !== '') {
        selectedPlace = customPlaceInput.value.trim();
        enablePlaceNextBtn();
    } else {
        disablePlaceNextBtn();
    }
});

function enablePlaceNextBtn() {
    placeNextBtn.disabled = false;
    placeNextBtn.classList.remove('dimmed-btn');
}

function disablePlaceNextBtn() {
    placeNextBtn.disabled = true;
    placeNextBtn.classList.add('dimmed-btn');
}

// 15. من اختيار المكان (زرار حلو) ⬅️ شاشة اختيار الأكل
placeNextBtn.addEventListener('click', () => {
    placeScreen.classList.add('hidden');
    foodScreen.classList.remove('hidden');
});

// اختيار الأكل وتفعيل زرار "تمام"
foodOptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        foodOptionBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

        if (btn === customFoodOptionBtn) {
            customFoodContainer.classList.remove('hidden');
            customFoodInput.focus();

            if (customFoodInput.value.trim() !== '') {
                selectedFood = customFoodInput.value.trim();
                enableFoodNextBtn();
            } else {
                disableFoodNextBtn();
            }
        } else {
            customFoodContainer.classList.add('hidden');
            selectedFood = btn.innerText.trim();
            enableFoodNextBtn();
        }
    });
});

customFoodInput.addEventListener('input', () => {
    if (customFoodInput.value.trim() !== '') {
        selectedFood = customFoodInput.value.trim();
        enableFoodNextBtn();
    } else {
        disableFoodNextBtn();
    }
});

function enableFoodNextBtn() {
    foodNextBtn.disabled = false;
    foodNextBtn.classList.remove('dimmed-btn');
}

function disableFoodNextBtn() {
    foodNextBtn.disabled = true;
    foodNextBtn.classList.add('dimmed-btn');
}

// 16. من اختيار الأكل (زرار تمام) ⬅️ الشاشة النهائية
foodNextBtn.addEventListener('click', () => {
    foodScreen.classList.add('hidden');
    finalScreen.classList.remove('hidden');

    // ملء بيانات الملخص
    if (summaryDate) summaryDate.innerText = selectedDate || '';
    if (summaryPlace) summaryPlace.innerText = selectedPlace || '';
    if (summaryFood) summaryFood.innerText = selectedFood || '';

    // إطلاق الألعاب النارية عند الدخول
    launchFireworks();
});

// زر إرسال الواتساب
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        const dateStr = selectedDate || '';
        const placeStr = selectedPlace || '';
        const foodStr = selectedFood || '';

        const message = `انا اخترت الديت بتاعنا 🥳\n\n` +
                        `المعاد: ${dateStr}\n` +
                        `المكان: ${placeStr}\n` +
                        `الاكل: ${foodStr}\n\n` +
                        `بحبك أوي يا علي ❤️`;

        const encodedMessage = encodeURIComponent(message);
        
        // 👈 رقم الهاتف بكود الدولة
        const phoneNumber = "201114288788"; 

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    });
}

// دالة رمي الصور
function dropPhotos() {
    const photoStack = document.getElementById('photo-stack');
    photoStack.innerHTML = '';
    let i = 0;
    
    const interval = setInterval(() => {
        if (i >= photosList.length) {
            clearInterval(interval);
            return;
        }

        const img = document.createElement('img');
        img.src = photosList[i];
        img.classList.add('stacked-photo');

        const randomX = Math.floor(Math.random() * 180) - 90;
        const randomY = Math.floor(Math.random() * 100) - 10;
        const randomRotation = Math.floor(Math.random() * 44) - 22;

        img.style.left = `calc(50% - 65px + ${randomX}px)`;
        img.style.top = `${randomY}px`;
        img.style.zIndex = i;

        photoStack.appendChild(img);

        requestAnimationFrame(() => {
            setTimeout(() => {
                img.classList.add('show');
                img.style.transform = `scale(1) rotate(${randomRotation}deg)`;
            }, 30);
        });

        i++;
    }, 700);
}
