function quadraticEquation() {

    var a = prompt('Please input' + ' "a" ' + 'value', '');
    var b = prompt('Please input' + ' "b" ' + 'value', '');
    var c = prompt('Please input' + ' "c" ' + 'value', '');

    if (isNaN(a) || a === '' || a === 0 || isNaN(b) || b === '' || isNaN(c) || c === '') {
        alert('Invalid input data');
    } else {
        var d = (b * b) - 4 * a * c;
        if (d === 0) {
            var x = -b / 2 * a;
            alert('x = ' + x);
        } else if (d < 0) {
            alert('no solution')
        } else {
            var x1 = -b / (2 * a) - Math.sqrt(d) / (2 * a);
            var x2 = -b / (2 * a) + Math.sqrt(d) / (2 * a);
            alert('x1 = ' + x1 + ' and ' + 'x2 = ' + x2)
        }
    }
}

quadraticEquation()