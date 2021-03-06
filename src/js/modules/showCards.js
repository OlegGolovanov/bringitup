export default class ShowCards {
    constructor({
        containerSelector
    }) {
        this.container = document.querySelector(containerSelector);
        try {
            this.cards = this.container.querySelectorAll(".officer__card-item");

            this.plus = this.container.querySelector(".plus");
        } catch (e) {}
        this.index = 0;
    }

    hideCards() {
        this.cards.forEach(card => {
            card.style.display = 'none';
            card.classList.add("animate__animated", "animate__fadeIn");
        });
    }

    showLastCards() {
        this.cards[this.cards.length - 1].style.display = 'flex';
    }

    plusIndex() {
        this.plus.addEventListener("click", () => {
            this.plusCard(this.index += 1);
        });
    }

    plusCard(n) {
        if (n >= this.cards.length - 1) {
            this.index = this.cards.length - 1;
        }
        this.cards[this.index - 1].style.display = 'flex';
    }

    init() {
        try {
            this.hideCards();
            this.showLastCards();
            this.plusIndex();
        } catch (e) {}
    }
}