const readline = require('readline');
const fs = require('fs')
const add = require('./modules/add');
const subtract = require('./modules/subtract');
const multiply = require('./modules/multiply');
const divide = require('./modules/divide');
const lessThan = require('./modules/lessThan');
const greaterThan = require('./modules/greaterThan');
const equalTo = require('./modules/equalTo');
const notEqualTo = require('./modules/NotEqualTo');

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

let recallVar = [];
let recallSometing = [];

function quest() {
    rl.question('What would you like to know? ', (answer) => {
        let equation = answer.includes('+')||answer.includes('-')||answer.includes('*')||answer.includes('/')||answer.includes('<')||answer.includes('>')||answer.includes('===')||answer.includes('!=');
        if (equation) {
            let leftNum = [];
            let operator = [];
            let rightNum = [];
            for (let i=0; i<answer.length; i++) {
                let num = Number(answer[i]);
                if (num === 0 && operator.length != 0) {
                    rightNum.push(num);
                } else if (num === 0 && operator.length === 0) {
                    leftNum.push(num);
                } else if (!num) {
                    operator.push(answer[i]);
                } else if (num && operator.length != 0) {
                    rightNum.push(num);
                } else {
                    leftNum.push(num);
                }
            }
            let lefty = leftNum.join('');
            let sign = operator.join('');
            let righty = rightNum.join('');
            if (sign === '+') {
                console.log(add(Number(lefty), Number(righty)));
            } else if (sign === '-') {
                console.log(subtract(Number(lefty), Number(righty)));
            } else if (sign === '*') {
                console.log(multiply(Number(lefty), Number(righty)));
            } else if (sign === '/') {
                console.log(divide(Number(lefty), Number(righty)));
            } else if (sign === '<') {
                console.log(lessThan(Number(lefty), Number(righty)));
            } else if (sign === '>') {
                console.log(greaterThan(Number(lefty), Number(righty)));
            } else if (sign === '===') {
                console.log(equalTo(Number(lefty), Number(righty)));
            } else if (sign === '!=') {
                console.log(notEqualTo(Number(lefty), Number(righty)));
            } else console.log('Error: Cannot Compute');

        } else if (answer.includes('let ')) {
            let vari = answer.replace('let ', '');
            let varArr = [];
            let equl = [];
            let someting = [];
            for (let i=0; i<vari.length; i++) {
                let word = vari[i];
                if (word === '=') {
                    equl.push(word);
                } else if (word != '=' && equl.length != 0) {
                    someting.push(word);
                } else if (word != '=') {
                    varArr.push(word);
                }
            }

            let newVar = varArr.join('').trim();
            let newSometing = someting.join('').trim();
            recallVar.push(newVar);
            recallSometing.push(newSometing);
        } else if (recallVar.includes(answer)) {
            function recall(index) {
                return index == answer
            }
            console.log(recallSometing[recallVar.findIndex(recall)]);
        } else {
            console.log('Syntax Error') 
        }
        quest(); 
    });
}
quest();