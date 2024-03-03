function game369 (number) {
    if (number <= 0) {
        console.log('input over than zero');
    } else if (number % 3 == 0 && number % 9 != 0) {
        console.log('clap');
    } else if (number % 9 == 0) {
        console.log('clapx2');
    } else {
        console.log('pass');
    }
}

function isLastDigit369(number) {
    if (number % 10 == 3 || number % 10 == 6 || number % 10 == 9) {
        console.log('clap');
    } else {
        console.log('pass');
    }
}

isLastDigit369(3);
isLastDigit369(2);
isLastDigit369(19);

function isTestPassed(subject1, subject2) {
    if (subject1 < 0 || subject1 > 100 || subject2 < 0 || subject2 > 100) {
        console.log('Enter the number over than 0 and lower than 100');
    } else if (subject1 < 40 || subject2 < 40 || subject1 + subject2 < 120) {
        console.log('You fail');
    } else {
        console.log('You Pass'); 
    }
}
isTestPassed(5, 101);
isTestPassed(-3, 80);
isTestPassed(70, 70);
isTestPassed(30, 100);
isTestPassed(50, 50);