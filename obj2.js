function Card(num, color) {
    this.num = num;
    this.color = color;
}

Card.prototype.width = 100;
Card.prototype.height = 150;

const card1 = new Card(1, 'green');
const card2 = new Card(7, 'blue');

console.log(card1.color);
console.log(card2.color);
console.log(card1.width);
console.log(card2.width);