let currentLang = 'en';

// Keep the existing toggleLanguage() function at the top...
// Theme Toggle Logic
function toggleTheme() {
    const body = document.body;
    const toggleBtn = document.getElementById('theme-toggle');

    if (body.classList.contains('theme-beige')) {
        body.classList.remove('theme-beige');
        toggleBtn.innerText = '[ LIGHT MODE ]';
    } else {
        body.classList.add('theme-beige');
        toggleBtn.innerText = '[ DARK MODE ]';
    }
}

// New Card Logic
async function toggleCard(cardElement, filename) {
    const isExpanded = cardElement.classList.contains('expanded');
    const detailsContainer = cardElement.querySelector('.card-details');
    const githubLink = cardElement.querySelector('.github-link');
    const markdownDisplay = cardElement.querySelector('.markdown-content');

    // If already expanded, collapse it
    if (isExpanded) {
        cardElement.classList.remove('expanded');
        detailsContainer.classList.add('hidden');
        githubLink.classList.add('hidden');
        return;
    }

    // Collapse all other cards first to maintain layout grid
    document.querySelectorAll('.intel-card').forEach(card => {
        card.classList.remove('expanded');
        card.querySelector('.card-details').classList.add('hidden');
        card.querySelector('.github-link').classList.add('hidden');
    });

    // Expand the clicked card
    cardElement.classList.add('expanded');
    detailsContainer.classList.remove('hidden');
    githubLink.classList.remove('hidden');

    // Fetch and decrypt the markdown file
    markdownDisplay.innerHTML = '( CONNECTING... )';

    try {
        const response = await fetch(filename);
        if (!response.ok) throw new Error('File not found.');
        const markdown = await response.text();
        markdownDisplay.innerHTML = marked.parse(markdown);
    } catch (error) {
        markdownDisplay.innerHTML = `<span class="stamp angled-left">FILE 404</span><br><br>ERROR: ${filename} NOT FOUND IN DIRECTORY.`;
    }
}