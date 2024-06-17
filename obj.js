const person = {
    name: '일분이',
    age: 10,
    introduce: function() {
        console.log(`안녕하세요. 저는 ${this.name}이고, 나이는 ${this.age}살입니다.`);
    },
};

// 생성자 (constructor)
function Person(nickname, age) {
    this.nickname = nickname;
    this.age = age;
}

Person.prototype.introduce = function () {
    console.log(`안녕하세요. 저는 ${this.nickname}이고, 나이는 ${this.age}살입니다.`);
}

// 인스턴스(instance)
const person1 = new Person('일분이', 10);
const person2 = new Person('이분이', 8);

person1.introduce();
person2.introduce();