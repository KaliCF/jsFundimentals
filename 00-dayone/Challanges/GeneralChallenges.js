//!Challenge:
//*write a for loop that counts from 1 to 100.
//*for numbers that are evenly divisable by 3, print 'FIZZ'
//*for numbers that are divisable by 5 print 'BUZZ'
//*for numbers that are divisable by 3 and 5 print 'FIZZ BUZZ'

for (let i = 0; i < 101; i++) {
    console.log(i);
    if (i % 3 == 0)
        console.log(`FIZZ`);
    if (i % 5 == 0)
        console.log(`BUZZ`)
}

//another way to do the same thing:

for (let l = 1; l < 101; l++) {
    if (l % 3 === 0 && l % 5 === 0) { //could also just put if(l % 15 == 0)
        console.log(`FIZZ BUZZ`)
    } else if (l % 3 === 0) {
        console.log(`FIZZ`)
    } else if (l % 5 === 0) {
        console.log(`BUZZ`)
    } else { console.log(l) }
}
//want to put the most demanding request first cause will stop after first true.