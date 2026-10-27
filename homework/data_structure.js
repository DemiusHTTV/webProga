function ConverterCase(name){
    let parts = name.split('-')
    let result = parts[0]

    for (let i = 1; i < parts.length; i++){
        result += parts[i].charAt(0).toUpperCase()+parts[i].slice(1)
    }
    return result

}
console.log(ConverterCase('hello-world'))


// 2
let arr = [9,8,7,6,5,4,3,2,1]

let arrCopy1 = [...arr]
let arrCopy2 = arr.slice()

arrCopy1.reverse()

for (let i = 0; i < arrCopy2.length / 2; i++) {
    let temp = arrCopy2[i];
    arrCopy2[i] = arrCopy2[arrCopy2.length - 1 - i];
    arrCopy2[arrCopy2.length - 1 - i] = temp;
}

console.log(arr)
console.log(arrCopy1)
console.log(arrCopy2)

// 3

let dictionary = {
    'привет': { en: 'hello', de: 'hallo' },
    'мир':    { en: 'world', de: 'Welt' },
    'кот':    { en: 'cat',   de: 'Katze' },
    'собака': { en: 'dog',   de: 'Hund' }
};

function translate(text, lang) {
    let words = text.toLowerCase().split(' ');
    let result = [];

    for (let word of words) {
        if (dictionary[word] && dictionary[word][lang]) {
            result.push(dictionary[word][lang]);
        } else {
            result.push(word); 
        }
    }

    return result.join(' ');
}

console.log(translate('Привет мир', 'en'));   
console.log(translate('кот собака', 'de'));   
console.log(translate('привет друг', 'en'));  


// 4 

let week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресенье',

    showToday() {
        let day = new Date().getDay();
        if (day === 0) day = 7;         
        console.log('Сегодня: ' + this[day]);
    }
};

week.showToday(); 

// 5

let staff = {
    director: 'Иванов',
    manager: 'Петрова',
    programmer: 'Сидоров'
};

let staff2 = { ...staff }; 
staff2.director = 'Смирнов';
staff2.manager = 'Козлова';
staff2.programmer = 'Новиков';

function objToString(obj) {
    let str = '';
    for (let key in obj) {
        str += key + ': ' + obj[key] + '\n';
    }
    return str;
}

console.log('Персонал:\n' + objToString(staff));
console.log('Персонал 2:\n' + objToString(staff2));


//6 

let subjects = {
    list: 'Математика, Физика, История, Информатика',

    add(subject) {
        let arr = this.list.split(', ');
        if (!arr.includes(subject)) {
            arr.push(subject);
            this.list = arr.join(', ');
        } else {
            console.log(subject + ' уже есть в списке');
        }
    },

    remove(subject) {
        let arr = this.list.split(', ');
        let index = arr.indexOf(subject);
        if (index !== -1) {
            arr.splice(index, 1);
            this.list = arr.join(', ');
        } else {
            console.log(subject + ' нет в списке');
        }
    }
};

subjects.add('Химия');
console.log(subjects.list);  

subjects.add('Физика');     

subjects.remove('История');
console.log(subjects.list); 