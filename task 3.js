function random(str) {
    return Array.from(str).reverse().toString().replace(/[\s.,%]/g, '');
}
random('hello');