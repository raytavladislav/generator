var generator = sequence(10, 3)

generator();
generator();

var generatorTwo = sequence(7, 1);

generatorTwo();

generator();

generatorTwo();
generatorTwo();
generatorTwo();

generator();


function sequence(startNumber, step){
    var a = startNumber;
    console.log(a)
    var b = step;
    return function() {
        a += b;
        console.log(a);
    }
}

//другий спосіб вибиває помилку , що generator не є функцією
// var generator = sequence(10, 3);

// generator();
// generator();

// var generatorTwo = sequence(7, 1);

// generatorTwo();

// generator();

// generatorTwo();
// generatorTwo();
// generatorTwo();

// generator();

// function sequence(startNumber, step) {
//     var a = startNumber;
//     var b = step;

//     a + b;
//     a += a;
// }


//takeGen ----------------------------------------------
console.log('takeGen:')

var gen2 = sequence(0, 5);

console.log(take(gen2, 5));

function take(fn, count) {
    let arr = [];
    while (arr.length < count) {
        arr.push(fn());
    }
    return arr;
}