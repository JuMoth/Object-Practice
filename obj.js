const person = {
    name: '일분이',
    age: 10,
    introduce: function() {
        console.log(`안녕하세요. 저는 ${this.name}이고, 나이는 ${this.age}살입니다.`);
    },
};

const person2 = {
    name: '이분이',
    age: 8,
    introduce: function() {
        console.log(`안녕하세요. 저는 ${this.name}이고, 나이는 ${this.age}살입니다.`);
    },
};

person.introduce();
person2.introduce();