let currentLang = 'en';

function toggleLanguage() {
    const enContent = document.querySelector('.lang-en');
    const frContent = document.querySelector('.lang-fr');
    const toggleBtn = document.getElementById('lang-toggle');

    if (currentLang === 'en') {
        enContent.classList.remove('active-lang');
        enContent.classList.add('hidden-lang');
        frContent.classList.remove('hidden-lang');
        frContent.classList.add('active-lang');
        toggleBtn.innerText = '[ DECRYPT: ENGLISH ]';
        currentLang = 'fr';
    } else {
        frContent.classList.remove('active-lang');
        frContent.classList.add('hidden-lang');
        enContent.classList.remove('hidden-lang');
        enContent.classList.add('active-lang');
        toggleBtn.innerText = '[ DECRYPT: FRANÇAIS ]';
        currentLang = 'en';
    }
}

async function loadIntel(filename, btnElement) {
    const displayArea = document.getElementById('intel-display');
    
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    displayArea.innerHTML = 'RETRIEVING FILE FROM ARCHIVE...';

    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error('File not found.');
        const markdown = await response.text();
        displayArea.innerHTML = marked.parse(markdown);
    } catch (error) {
        displayArea.innerHTML = `<span class="stamp angled-left">FILE MISSING</span><br><br>ERROR: INTEL ${filename} NOT FOUND IN CURRENT DIRECTORY.`;
    }
}