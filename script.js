// Fungsi untuk berpindah slide
function nextSlide(slideNumber) {
    // Sembunyikan semua slide
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Tampilkan slide tujuan
    const targetSlide = document.getElementById('slide-' + slideNumber);
    if (targetSlide) {
        targetSlide.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Slide 0: Password Check
document.getElementById('btn-login').addEventListener('click', function() {
    const passInput = document.getElementById('password-input').value.trim().toLowerCase();
    const errorMsg = document.getElementById('error-msg');

    // Password yang valid: "garnis", "barbie", "cantik", atau "123"
    if (passInput === 'garnis' || passInput === 'barbie' || passInput === 'cantik' || passInput === '123') {
        errorMsg.textContent = "";
        alert("✨ AKSES DITERIMA ✨\n\nSelamat datang, Garnis.\nSilakan masuk ke dunia lu sendiri. 🎀");
        nextSlide(1);
    } else {
        errorMsg.textContent = "❌ Eits, salah. Barbie kok lupa password sendiri 😭 Coba lagi.";
    }
});

// Shortcut tekan Enter di input password
document.getElementById('password-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('btn-login').click();
    }
});

// Slide 2: Buka Amplop
let envelopeOpened = false;
function openEnvelope() {
    if (!envelopeOpened) {
        envelopeOpened = true;
        document.getElementById('envelope-container').style.display = 'none';
        document.getElementById('letter-content').classList.remove('hidden');
    }
}

// Slide 3: Fakta Barbie Bergantian
const facts = [
    "🎀 Fakta #1\nGarnis punya kemampuan spesial: bikin percakapan random jadi panjang.",
    "💗 Fakta #2\nEntah kenapa, keberadaan lu bikin suasana jadi lebih seru.",
    "😂 Fakta #3\nTingkat random lu kadang nggak masuk akal."
];
let currentFactIndex = 0;

function flipIdCard() {
    const front = document.getElementById('id-card-front');
    const back = document.getElementById('id-card-back');
    const factText = document.getElementById('fact-text');

    if (front.classList.contains('hidden')) {
        front.classList.remove('hidden');
        back.classList.add('hidden');
    } else {
        front.classList.add('hidden');
        back.classList.remove('hidden');
        factText.innerText = facts[currentFactIndex];
        currentFactIndex = (currentFactIndex + 1) % facts.length;
    }
}

// Slide 5: Submit Quiz
function submitQuiz() {
    nextSlide(6);
}

// Slide 7: Stempel Sertifikat
function applyStamp() {
    document.getElementById('stamp').classList.remove('hidden');
    document.getElementById('btn-stamp').style.display = 'none';
    document.getElementById('btn-next-7').style.display = 'inline-block';
}

// Slide 9: Buka Hadiah
function openGift() {
    document.getElementById('gift-box').style.display = 'none';
    document.getElementById('gift-content').classList.remove('hidden');
}

// Slide 10: Easter Egg Steps
let easterStep = 0;
function triggerEasterEgg() {
    const eeBox = document.getElementById('easter-egg-box');
    eeBox.classList.remove('hidden');
}

function nextEasterStep() {
    const eeText = document.getElementById('ee-text');
    const eeBtn = document.getElementById('ee-btn');

    easterStep++;
    if (easterStep === 1) {
        eeText.innerHTML = "Gua udah bilang jangan diklik.";
    } else if (easterStep === 2) {
        eeText.innerHTML = "Garnis...";
    } else if (easterStep === 3) {
        eeText.innerHTML = "<strong>YA AMPUN LU PENASARAN BANGET 😭</strong>";
    } else {
        eeText.innerHTML = "Oke deh.<br><strong>Lu menang. 🏳️</strong>";
        eeBtn.innerText = "LANJUT KE ENDING →";
        eeBtn.onclick = function() { nextSlide(11); };
    }
}

// Restart Website
function restartWebsite() {
    easterStep = 0;
    currentFactIndex = 0;
    document.getElementById('password-input').value = "";
    document.getElementById('error-msg').textContent = "";
    document.getElementById('envelope-container').style.display = 'block';
    document.getElementById('letter-content').classList.add('hidden');
    document.getElementById('id-card-front').classList.remove('hidden');
    document.getElementById('id-card-back').classList.add('hidden');
    document.getElementById('stamp').classList.add('hidden');
    document.getElementById('btn-stamp').style.display = 'inline-block';
    document.getElementById('btn-next-7').style.display = 'none';
    document.getElementById('gift-box').style.display = 'block';
    document.getElementById('gift-content').classList.add('hidden');
    document.getElementById('easter-egg-box').classList.add('hidden');
    
    nextSlide(0);
}
