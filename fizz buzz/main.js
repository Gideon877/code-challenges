var fizzBuzz = 0,
    fizz = 0,
    buzz = 0,
    i = 1;

while (i <= 100) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " Fizz Buzz");
        fizzBuzz += 1;
    } else if (i % 3 === 0) {
        console.log(i + " Fizz")
        fizz += 1;

    } else if (i % 5 === 0) {
        console.log(i + " Buzz")
        buzz += 1;

    } else {
        console.log(i)
    }
    i++
}

console.log("Fizz-Buzz: " + fizBuzz + " Buzz: " + buzz + " Fizz: " + fizz)
