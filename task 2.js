let x;
if (typeof(x) === 'string') {
    alert('red');
} else if (typeof(x) === 'number') {
    console.log('x - число');
} else if (typeof(x) === 'boolean') {
    console.log('x - логический тип');
} else {
    console.log('Тип x не определён');
}