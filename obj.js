const person = {};
// 속성, property
person.name = '일분이';
person.age = 10;
// 메서드, method
person.introduce = function() {
    console.log('안녕하세요. 저는 일분이이고 나이는 10살입니다.');
};

person.introduce();