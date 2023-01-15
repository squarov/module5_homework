let myMap = new Map();
myMap.set('key', 'prop');
myMap.set(123, 'array');
myMap.set('smth', 'with');

let a;
let b;

for (let map of myMap.keys()) {
    a = map;
    
    for (let map of myMap.values()) {
        b = map;
    }
console.log(`Ключ — ${a}, значение — ${b}`);
}