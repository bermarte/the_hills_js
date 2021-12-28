/*
https://stackoverflow.com/questions/22578160/how-to-read-user-input-in-node-js-for-simple-calculations
https://bobbyhadz.com/blog/javascript-create-array-n-elements-same-value
*/
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function total(number) {
    console.log('The total is', number);
}

function toArray(num) {
    return Array(num).fill(1);
}

function percentage(percent, total) {
    return ((percent/ 100) * total).toFixed(2)
}

rl.question('Enter number of children: ', function (x) {
    rl.question('Enter amount of wage: ', function (y) {
        let amount = 0;
        const children = parseFloat(x);
        const wage = parseFloat(y);

        //convert number to array
        const childrenArray = toArray(children)

        //add 25 for every child
        childrenArray.forEach(() => {
            amount += 25;
        });

        //if children >= 3 then receive(+12.50) for every child >= 3
        if (childrenArray.length >= 3){
            let tmp = childrenArray.length - 2
            const childrenArrayMoreThan3 = toArray(tmp)

            childrenArrayMoreThan3.forEach(() => {
                amount += 12.50;
            });
        }

        //if child >= 5 then receive(+7.50)
        if (childrenArray.length >= 5){
            let tmp = childrenArray.length - 4
            const childrenArrayMoreThan5 = toArray(tmp)

            childrenArrayMoreThan5.forEach(() => {
                amount += 7.50;
            });
        }

        //wage calculation
        //if mother_wage <= 500 receive(+25%)
        //if mother_wage > 2000 receive(-25%)

        console.log('percentage is', percentage(25, amount))
        console.log('amount is', amount)

        if (wage <= 500) {
            let tmp = parseFloat(percentage(25, amount))
            amount = amount + tmp
        }

        if (wage > 2000) {
            let tmp = parseFloat(percentage(25, amount))
            amount = amount - tmp
        }

        total(amount)

        rl.close();
    });
});

