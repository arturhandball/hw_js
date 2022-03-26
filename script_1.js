//2
let a1 = 5 % 3,
    a2 = 3 % 5,
    a3 = 5 + '3',
    a4 = '5' - 3,
    a5 = 75 + 'kg',
    a6 = 785 * 653,
    a7 = 100 / 25,
    a8 = 0 * 0,
    a9 = 0 / 2,
    a10 = 89 / 0,
    a11 = 98 + 2,
    a12 = 5 - 98,
    a13 = (8 + 56 * 4) / 5,
    a14 = (9 - 12) * 7 / (5 + 2),
    a15 = +"123",
    a16 = 1 || 0,
    a17 = false || true,
    a18 = true > 0;

console.log(`
    a1 = ${a1},
    a2 = ${a2},
    a3 = ${a3},
    a4 = ${a4},
    a5 = ${a5},
    a6 = ${a6},
    a7 = ${a7},
    a8 = ${a8},
    a9 = ${a9},
    a10 = ${a10},
    a11 = ${a11},
    a12 = ${a12},
    a13 = ${a13},
    a14 = ${a14},
    a15 = ${a15},
    a16 = ${a16},
    a17 = ${a17},
    a18 = ${a18}
`);

console.table(
    typeof a1,
    typeof a2,
    typeof a3,
    typeof a4,
    typeof a5,
    typeof a6,
    typeof a7,
    typeof a8,
    typeof a9,
    typeof a10,
    typeof a11,
    typeof a12,
    typeof a13,
    typeof a14,
    typeof a15,
    typeof a16,
    typeof a17,
    typeof a18);

//3
let width = '23sm';
let height = '10sm';
let SPryam = parseInt(width) * parseInt(height);
console.log(SPryam);

//4
let hc = 10;
let diam = a7;
let VCilindra = hc * a7;
console.log(VCilindra);

//5
let radius = 5;
const pi = 3.14;
let Skruga = pi * radius**2;
console.log(Skruga);

//6
{
    let a = 5;
    let b = 7;
    let h = 10;
    let STrap = ((a + b) / 2) * h;
    console.log(STrap);
}

//7
{
    let S = 2000000,
        p = 0.1,
        years = 5;
    let Pereplata = S  *p * years;
    console.log(Pereplata);
}

//8
{
    let a = 8;
    let b = 3;
    let x1 = (16 - a + (2 * b)) / 2;
    let x2 = (b * 15 - a) / (6 - b);
    let x3 = (23780 / (1 + 2 + a + b));
    console.log(x1);
    console.log(x2);
    console.log(x3);
}