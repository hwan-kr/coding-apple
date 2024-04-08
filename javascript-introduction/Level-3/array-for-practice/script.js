// 있어요 출력
// let attendanceList = ["흥민", "영희", "철수", "재석"];

// function findName(name) {
//     attendanceList.forEach(function (element) {
//         if (name == element) {
//             console.log("있어요");
//         }
//     });
// }

// 구구단 출력
// for (let i = 2; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         console.log(j * i);
//     }
// }

//평균점수 계산기
let score1 = [10, 20, 30, 40, 50];
let score2 = [40, 40, 40];

function averageCalc(score, myScore) {
    let sum = 0;
    let average;
    score.forEach(function (item) {
        sum = sum + item;
        average = sum / score.length;
    });
    if (average > myScore) {
        console.log(`평균보다 ${Math.abs(average - myScore)}점 떨어졌네요`);
    } else if (average < myScore) {
        console.log(`평균보다 ${Math.abs(average - myScore)}점 올랐네요`);
    }
}

averageCalc(score1, 40);
averageCalc(score2, 20);
