class Card {
  constructor(num, color) {
    this.num = num;
    this.color = color;
    this.init();
  }

  init() {
    const mainElem = document.createElement("div");
    mainElem.style.color = this.color;
    mainElem.innerHTML = this.num;
    mainElem.classList.add("card");
    document.body.appendChild(mainElem);
  }
}

const card1 = new Card(10, "green");
const card2 = new Card(70, "blue");