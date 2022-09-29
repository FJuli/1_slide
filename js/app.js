const cards = document.querySelectorAll('.cards');

for (const card of cards) {
    card.addEventListener('click', () => {
        clearActiveClasses();
        card.classList.add('active')
    })
}

function clearActiveClasses () {
    cards.forEach ((card) => {
        card.classList.remove('active');
    })
}