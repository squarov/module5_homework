let result = +prompt('Введите значение..');
if (result) {
     if (result % 2 === 0) {
        console.log('Число четное');
    } else {
        console.log('Число нечетное');
    }
} else if (isNaN(result)) {
        console.log('Упс, кажется, вы ошиблись');
} else {
    alert('Вы не ввели значение');
}