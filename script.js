document.addEventListener('DOMContentLoaded', () => {

    // 1. Obsługa menu mobilnego
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 2. Filtrowanie i wyszukiwanie części w czasie rzeczywistym
    const searchInput = document.getElementById('searchInput');
    const partCards = document.querySelectorAll('.part-card');
    const noResults = document.getElementById('noResults');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            let visibleCount = 0;

            partCards.forEach(card => {
                const title = card.getAttribute('data-title').toLowerCase();
                const model = card.getAttribute('data-model').toLowerCase();

                if (title.includes(query) || model.includes(query)) {
                    card.classList.remove('hidden');
                    visibleCount++;
                } else {
                    card.classList.add('hidden');
                }
            });

            if (visibleCount === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        });
    }

    // 3. Obsługa formularza kontaktowego
    const contactForm = document.getElementById('contactForm');
    const formAlert = document.getElementById('formAlert');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Pokaż powiadomienie o wysłaniu
            formAlert.classList.remove('hidden');
            contactForm.reset();

            // Ukryj powiadomienie po 5 sekundach
            setTimeout(() => {
                formAlert.classList.add('hidden');
            }, 5000);
        });
    }
});
