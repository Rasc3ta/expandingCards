const cards = document.getElementsByClassName("card");

const removeActive = () => {
    for (let card of cards) {
        card.classList.remove('active');
    }
}

for (let card of cards) {

    card.addEventListener('click',
    (Event) => {
        removeActive();
        Event.target.classList.add('active');
    })

}

