
function steps(num) {
    let steps = 0;
    let numero = num;
    while (numero > 0) {
        if (numero % 2 == 0) numero /= 2;
        else numero -= 1
        steps++
    }
    return steps;
}

let check = steps(100);

console.log(check);