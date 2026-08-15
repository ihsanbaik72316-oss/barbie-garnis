let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.getElementById('dotsContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Generate titik navigasi (dots) otomatis sesuai jumlah slide
slides.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (idx === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

// Fungsi utama perpindahan slide
function updateSlides() {
    slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentSlide);
        dots[idx].classList.toggle('active', idx === currentSlide);
    });

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    // Animasi bertahap untuk Slide 5
    if (currentSlide === 4) {
        const items = document.querySelectorAll('.deserve-item');
        items.forEach((item, index) => {
            setTimeout(() => item.classList.add('show'), index * 300);
        });
    }
}

function nextSlide() {
    if (currentSlide < slides.length - 1) {
        currentSlide++;
        updateSlides();
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        currentSlide--;
        updateSlides();
    }
}

function goToSlide(index) {
    currentSlide = index;
    updateSlides();
}

/* Interaksi Slide 2: Amplop */
function openEnvelope() {
    document.getElementById('env-icon').className = 'fa-solid fa-envelope-open';
    document.getElementById('env-text').innerText = "Apparently, someone thought you deserved a tiny surprise today ✨";
    document.getElementById('btn-slide2').style.display = 'inline-flex';
}

/* Interaksi Slide 3: Kartu Accordion */
function toggleCard(card) {
    card.classList.toggle('open');
    const icon = card.querySelector('i');
    icon.className = card.classList.contains('open') ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down';
}

/* Interaksi Slide 4: Pilih Mood */
function selectMood(mood) {
    const result = document.getElementById('moodResult');
    if (mood === 'sweet') result.innerText = "“Okay Barbie, we see you being adorable today 🌸”";
    if (mood === 'chaotic') result.innerText = "“Yeah… that sounds about right ✨”";
    if (mood === 'iconic') result.innerText = "“Obviously. Did you expect anything else? 💅”";
}

/* Interaksi Slide 6: Photo Booth */
function setBooth(emoji, caption, chip) {
    document.getElementById('avatarDisplay').innerText = emoji;
    document.getElementById('avatarCaption').innerText = caption;
    document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
}

/* Interaksi Slide 8 & 9: Easter Egg Confetti */
function triggerEasterEgg() {
    confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } });
    nextSlide();
}

// Inisialisasi tampilan awal
updateSlides();
